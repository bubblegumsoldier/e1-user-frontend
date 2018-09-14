
export class drug{
    name?:String;
    grade_of_evidence?:String;
    grade_of_recommendation?:String;
    primary_recommendation?:String;
    comment?:String;
    active_substance?:String;
    dosage_amount?:String;
    dosage_unit?:String;
    morning_dosage?:String;
    noon_dosage?:String;
    evening_dosage?:String;
    night_dosage?:String;
    dosage_freq?:String;
    dosage_duration?:String;
    dosage_duration_unit?:String;
    dosage_duration_decision?:String;
    interaction_other_medicine?:String;
}

export class free_text{
    name?:String;
    grade_of_evidence?:String;
    grade_of_recommendation?:String;
    primary_recommendation?:String;
    comment?:String;
}

export class level{
    level_name?:String;
    Medicine?:[drug];
    free_text_recommendation?:[free_text];
    checked?:Boolean;
    level?:[level];
}

export class Guideline{
    active: String;
    institution_name:String
    recommended_for:String;
    publisher:String;
    diagnosis:String;
    keywords:[String];
    name_of_guideline:String;
    source:String;
    valid_until:Date;
    internal_author:String;
    level?:[level];
}

