import {FormGroup, Validators, FormControl} from '@angular/forms';
import {DropDownQuestion, TextboxQuestion} from "./QuestionTextbox";
export class QuestionModel {
  questions = [];

  toGroup() {
    let group: any = {};
    this.questions.forEach((question) => {
        group[question.key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }
}
