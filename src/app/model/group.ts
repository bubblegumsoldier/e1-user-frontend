import { CommonRec } from "./CommonRec";
import {syntax} from './syntax';
import {drug} from './medicine';
import {FreeText} from './freeText';

export class group extends CommonRec{
hideAnd:Boolean;
recommendations:[syntax|FreeText|drug];
}