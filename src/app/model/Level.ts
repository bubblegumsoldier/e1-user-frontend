import { Recommendation } from "./Recommendation";
import { DiagramContent } from "../lib/modules/diagram-editor/model/DiagramContent";

export class Level {
    levelName?:String = "";
    definition?:String = "";
    recommendations?:Recommendation[] = [];
    checked?:Boolean;
    levelId?:String;
    toBeDeleted?:Boolean;
    levels?:Level[] = [];
    andOr? :String;
    selectionTitle:String;
    sublevelDisplayType:String;
    diagramContent :DiagramContent;
    showDiagram :Boolean = false;
    invisibleLevels? :Level[] = [];
}