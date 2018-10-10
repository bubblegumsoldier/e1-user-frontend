import {levels} from './levels';
import { FreeText } from './freeText';
export class Guideline{
    active?: String;
    institutionName?:String;
    recommendedFor?:String;
    publisher?:String;
    diagnosis?:String;
    keywords?:[String];
    nameOfGuideline?:String;
    source?:String;
    validity?:Date;
    internalAuthor?:String;
    levels?:[levels];
}


