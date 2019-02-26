import { Component, OnInit, AfterViewInit, Input, ViewChild, forwardRef } from '@angular/core';
import { jsPlumb, jsPlumbUtil } from 'jsplumb';
import { DiagramContent, DiagramNode, DiagramNodeShape, DiagramElement, DiagramVertice, DiagramVerticeStyle } from '../../model/DiagramContent';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {Subject, Observable} from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'e1-diagram-editor',
  templateUrl: './diagram-editor.component.html',
  styleUrls: ['./diagram-editor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DiagramEditorComponent),
    }
  ]
})
export class DiagramEditorComponent implements AfterViewInit, OnInit, ControlValueAccessor {
  onChangeEvent :any[] = [];
  onTouchedEvent :any[] = [];

  writeValue(obj: DiagramContent): void {
    this.dataModel = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeEvent.push(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouchedEvent.push(fn);
  }

  editorOpened :boolean = false;

  jsPlumbInstance;

  dialogVisible :boolean = false;

  @ViewChild("canvas") canvas;

  //Inputs
  @Input() zIndex = 5;

  @Input() readOnly = false;

  dataModel :DiagramContent = new DiagramContent();

  shapes :any = [
    {
      id: "square",
      icon: "assets/shapes/square.svg",
      data: DiagramNodeShape.SQUARE
    },
    {
      id: "circle",
      icon: "assets/shapes/circle.svg",
      data: DiagramNodeShape.CIRCLE
    },
    {
      id: "diamond",
      icon: "assets/shapes/diamond.svg",
      data: DiagramNodeShape.DIAMOND
    }
  ];

  defaultColor :string = "white";

  static GRID_SIZE :number = 1;

  currentlySelectedElement :DiagramElement;

  connectionTypes :any = {
    "dashed": { anchor:"Continuous", connector: ["Flowchart", {cornerRadius: 8}], endpoint: "Blank", overlays: [
      [ "Arrow", {
        location: 1,
        id: "arrow",
        length: 14,
        foldback: 0.8
      }]
    ], paintStyle: {
      stroke: "#888"
    } },
    "basic": { anchor:"Continuous", connector:"Flowchart", endpoint: "Blank", paintStyle:{ stroke:"red", strokeWidth:5  } }
  }

  currentConnectionType :string = "dashed";

  valueUpdated :Subject<void> = new Subject<void>();
  debouncedValueUpdated :Observable<void>;

  constructor() {
    this.debouncedValueUpdated = this.valueUpdated.pipe(debounceTime(800));
    this.debouncedValueUpdated.subscribe( _ => this.onDelayedChange());
  }

  initJSPlumb()
  {
    if(this.jsPlumbInstance)
    {
      //resetting jsplumb
      console.log("resetting");
      
    }
    this.jsPlumbInstance = jsPlumb.getInstance({
      Container: "canvas"
    });
    
    this.jsPlumbInstance.registerConnectionTypes(this.connectionTypes);
    this.reinitJSPlumb();
  }

  reinitJSPlumb()
  {
    this.jsPlumbInstance.bind("connection", (info, event) => {
      
      if(!event)
      {
        //connection was created programatically
        return;
      }
      let vertice = new DiagramVertice();
      vertice.fromId = info.sourceId;
      vertice.toId = info.targetId;
      vertice.style = this.currentConnectionType;
      vertice.id = info.connection.id;
      this.connectionWasMade(vertice);
    });

    this.jsPlumbInstance.bind('click', (connection, e) => {
      console.log("connection deletion");
      console.log(connection);
      this.jsPlumbInstance.deleteConnection(connection);
      let index = this.dataModel.vertices.findIndex(element => {return element.id === connection.id});
      this.dataModel.vertices.splice(index, 1);
    });
  }

  ngAfterViewInit() {
    this.initJSPlumb();
  }

  connectionWasMade(connection :DiagramVertice)
  {
    this.dataModel.vertices.push(connection);
  }

  initNode(el, node) {

    // initialise draggable elements.
    if(this.readOnly)
    {
      return;
    }
    
    this.jsPlumbInstance.draggable(el, {
      containment:true,
      grid: [DiagramEditorComponent.GRID_SIZE, DiagramEditorComponent.GRID_SIZE],
      drag: event => {
        node.position = 
        {
          x: event.pos[0],
          y: event.pos[1]
        }
      }
    });
    

    var flag = 0;
    el.addEventListener("mousedown", _ => {
        flag = 0;
    }, false);
    el.addEventListener("mousemove", _ => {
        flag = 1;
    }, false);
    el.addEventListener("mouseup", _ => {
        if(flag === 0){
            
            this.nodeSelected(node);
        }
        else if(flag === 1){
            
        }
        flag = 0;
    }, false);

    this.jsPlumbInstance.makeSource(el, {
      filter: ".ep",
      anchor: "Continuous",
      connectorStyle: { stroke: "#5c96bc", strokeWidth: 2, outlineStroke: "transparent", outlineWidth: 4 },
      connectionType: this.currentConnectionType
    });

    this.jsPlumbInstance.makeTarget(el, {
      dropOptions: { hoverClass: "dragHover" },
      anchor: "Continuous",
      allowLoopback: true
    });
  }

  onChange($event)
  {
    this.valueUpdated.next();
    
    //this.canvas.getElementById()
  }

  onDelayedChange()
  {
    this.updateByModel();
  }

  createNewNode(shape :DiagramNodeShape)
  {
    let node = new DiagramNode();
    node.id = jsPlumbUtil.uuid();
    node.color = this.defaultColor;
    node.label = "Text";
    node.position = {x: 200, y: 200};
    node.shape = shape;
    this.addNode(node);
    this.dataModel.nodes.push(node);
  }

  nodeSelected(node :DiagramNode)
  {
    if(this.currentlySelectedElement == node)
    {
      this.currentlySelectedElement = undefined;
      return;
    }
    this.currentlySelectedElement = node;
  }

  updateByModel()
  {
    while(this.canvas.nativeElement.firstChild)
    {
      this.canvas.nativeElement.removeChild(this.canvas.nativeElement.firstChild);
    }
    this.jsPlumbInstance.reset();
    this.reinitJSPlumb();
    this.dataModel.nodes.forEach((node :DiagramNode) => {
      this.addNode(node);
    });
    this.dataModel.vertices.forEach((vertice :DiagramVertice) => {
      this.addVertice(vertice);
    });
  }
  

  addVertice(vertice :DiagramVertice)
  {
    console.log(vertice.style);
    this.jsPlumbInstance.connect({
      source: vertice.fromId,
      target: vertice.toId,
      type: vertice.style,
      anchors:[ "Center","Center" ]
    });
  }

  addNode(node :DiagramNode)
  {
    var d = document.createElement("div");
    var id = node.id;
    d.className = "diagram-item shape-" + node.shape + " color-" + node.color + " text-style-" + node.textStyle;
    d.id = id;
    console.log(node.label);
    d.innerHTML = node.label.replace(/(?:\r\n|\r|\n)/g, "<br>");
    if(!this.readOnly)
    {
      d.innerHTML += "<div class=\"ep\"></div>";
    }
    d.style.left = node.position.x + "px";
    d.style.top = node.position.y + "px";
    d.style.fontSize = node.textSize + "px";
    
    this.canvas.nativeElement.appendChild(d);
    this.initNode(d, node);
    return d;
  }

  ngOnInit() {
  }

  toggleDialog()
  {
    this.dialogVisible = !this.dialogVisible;
    this.updateByModel();
  }

}
