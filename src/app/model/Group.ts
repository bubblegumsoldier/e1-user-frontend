import { CommonRecommendation } from "./CommonRecommendation";
import {Syntax} from './Syntax';
import {Medicine} from './Medicine';
import {FreeText} from './FreeText';

export class group extends CommonRecommendation{
hideAnd:Boolean;
recommendations:[Syntax|FreeText|Medicine];
}