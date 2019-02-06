import { Recommendation } from "./Recommendation";

export class Level {
    levelName?:String = "";
    definition?:String = "";
    recommendations?:Recommendation[] = [];
    checked?:Boolean;
    levelId?:String;
    toBeDeleted?:Boolean;
    levels?:Level[] = [];
    andOr? :String;
}