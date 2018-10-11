import { Level } from './Level';
import { FreeText } from './FreeText';
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
    levels?:[Level];
}


