import { Recommendation } from "./Recommendation";

export class Level {
    levelName?:String;
    definition?:String;
    recommendations?:[Object];
    checked?:Boolean;
    levelId?:String;
    toBeDeleted?:Boolean;
    levels?:[Level];
}