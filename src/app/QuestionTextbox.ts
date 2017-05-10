
import {QuestionBase} from "./QuestionBase";
export class DropDownQuestion extends QuestionBase<string>{
    options = [];
    user:string;
    controlType = 'dropdown';
    constructor(){
        super();
    }
}
export class TextboxQuestion extends QuestionBase<string>{
    type:string;
    user:string;
    controlType = 'textbox';
    constructor(){
        super();
    }
}
export class ZeroSum extends QuestionBase<string>{
    type:string;
    user:string;
    controlType = 'zerosum';
    constructor(){
        super();
    }
}
