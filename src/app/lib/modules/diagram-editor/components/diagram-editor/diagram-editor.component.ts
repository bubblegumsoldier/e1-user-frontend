import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { jsPlumb, jsPlumbUtil } from 'jsplumb';
import { DiagramContent, DiagramNode, DiagramNodeShape, DiagramElement } from '../../model/DiagramContent';

@Component({
  selector: 'e1-diagram-editor',
  templateUrl: './diagram-editor.component.html',
  styleUrls: ['./diagram-editor.component.css']
})
export class DiagramEditorComponent implements AfterViewInit, OnInit {

  editorOpened :boolean = false;

  jsPlumbInstance;

  dialogVisible :boolean = false;

  @ViewChild("canvas") canvas;

  //Inputs
  @Input() zIndex = 5;

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
  possibleColors :string[] = [
    "white",
    "#ff5252"
  ]

  static GRID_SIZE :number = 50;

  currentlySelectedElement :DiagramElement;

  constructor() { }

  ngAfterViewInit() {
    this.jsPlumbInstance = jsPlumb.getInstance({
      Connector: "Flowchart",
      HoverPaintStyle: {stroke: "#1e8151", strokeWidth: 2},
      ConnectionOverlays: [
        [ "Arrow", {
          location: 1,
          id: "arrow",
          length: 14,
          foldback: 0.8
        }]
      ],
      Container: "canvas"
    });
    
    this.jsPlumbInstance.registerConnectionType("basic", { anchor:"Continuous", connector:"Flowchart", endpoint: "Blank" });
    

  }

  initNode(el) {

    // initialise draggable elements.
    this.jsPlumbInstance.draggable(el, {
      containment:true,
      grid: [DiagramEditorComponent.GRID_SIZE, DiagramEditorComponent.GRID_SIZE]
    });

    this.jsPlumbInstance.makeSource(el, {
        filter: ".ep",
        anchor: "Continuous",
        connectorStyle: { stroke: "#5c96bc", strokeWidth: 2, outlineStroke: "transparent", outlineWidth: 4 },
        connectionType:"basic",
        extract:{
            "action":"the-action"
        },
        maxConnections: 200,
        onMaxConnections: function (info, e) {
            alert("Maximum connections (" + info.maxConnections + ") reached");
        }
    });

    this.jsPlumbInstance.bind('click', (connection, e) => {
      this.jsPlumbInstance.deleteConnection(connection);
    });
 

    this.jsPlumbInstance.makeTarget(el, {
        dropOptions: { hoverClass: "dragHover" },
        anchor: "Continuous",
        allowLoopback: true
    });

    // this is not part of the core demo functionality; it is a means for the Toolkit edition's wrapped
    // version of this demo to find out about new nodes being added.
    //
    this.jsPlumbInstance.fire("jsPlumbDemoNodeAdded", el);
    this.jsPlumbInstance.recalculateOffsets(el);
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
    this.currentlySelectedElement = node;
  }

  addNode(node :DiagramNode)
  {
    var d = document.createElement("div");
    var id = node.id;
    d.className = "diagram-item " + node.shape;
    d.id = id;
    d.innerHTML = id.substring(0, 7) + "<div class=\"ep\"></div>";
    d.style.left = node.position.x + "px";
    d.style.top = node.position.y + "px";
    console.log(this.canvas);
    this.canvas.nativeElement.appendChild(d);
    this.initNode(d);

    return d;
  }

  ngOnInit() {
  }

  toggleDialog()
  {
    this.dialogVisible = !this.dialogVisible;
  }

}
