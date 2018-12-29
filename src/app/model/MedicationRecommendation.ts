import {Recommendation} from './Recommendation';
export class MedicationRecommendation extends Recommendation{
    /*Name?:String;
    GradeOfEvidence?:String;
    LevelOfRecommendation?:String;
    PrimaryRecommendation?:String;
    Comment?:String;*/
    activeSubstance?:String;
    dosageAmount?:String;
    dosageUnit?:String;
    morningDosage?:String;
    noonDosage?:String;
    eveningDosage?:String;
    nightDosage?:String;
    dosageFrequency?:String;
    dosageDuration?:String;
    dosageDurationUnit?:String;
    unlimitedApplicationDuration?:Boolean;
    //InteractionOtherMedicine?:String;
    useSpecificDosageSchema:Boolean;

}