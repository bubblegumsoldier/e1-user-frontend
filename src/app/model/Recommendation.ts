export class Recommendation{
    name?:String;
    gradeOfEvidence?:String;
    gradeOfRecommendation?:String;
    primaryRecommendation?:Boolean;
    comment?:String;
    content?:String;
    type?:String;
    hideOnSublevelSelect?:Boolean;
    public Recommendation()
    {
        this.primaryRecommendation = true;
    }
}

