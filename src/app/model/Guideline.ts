import { Level } from './Level';

export class Guideline{
    _id :string;
    active?: String;
    institutionName?:String;
    recommendedFor?:String;
    publisher?:String;
    diagnosis?:String;
    keywords?:[String];
    nameOfGuideline?:String;
    source?:String;
    validity?:String;
    internalAuthor?:String;
    levels?:Level[];
    selectionTitle:String;
    sublevelDisplayType:String;
}


