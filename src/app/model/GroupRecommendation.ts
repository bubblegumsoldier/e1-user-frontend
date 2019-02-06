import {SyntaxRecommendation} from './SyntaxRecommendation';
import { MedicationRecommendation } from "./MedicationRecommendation";
import { FreeTextRecommendation } from "./FreeTextRecommendation";

import { Recommendation } from "./Recommendation";

export class GroupRecommendation extends Recommendation{
hideAnd:Boolean;
recommendations:[SyntaxRecommendation|FreeTextRecommendation|MedicationRecommendation];
andOr? :String;
}