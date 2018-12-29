import { MedicationRecommendation } from './MedicationRecommendation';
import { Recommendation } from './Recommendation';
export class SyntaxRecommendation extends Recommendation{
    preDefs:[MedicationRecommendation];
}