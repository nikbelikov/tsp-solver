import { IPoint } from "./models/Point";
import { IValue } from "./models/Value";
import { IParams } from "./models/Params";
import { IResult } from "./models/Result";
declare const solve: (points: IPoint[], values: IValue[], parameters?: IParams | undefined) => IResult;
export default solve;
