import {Component, OnInit, Input} from '@angular/core';
import {Http} from "@angular/http";

import {FormControl, Validators, FormGroup} from "@angular/forms";

import {QuestionModel} from "../QuestionModel";
import {parseLine} from "tslint/lib/test/lines";
import {Router} from "@angular/router";

@Component({
  selector: 'app-peertake',
  templateUrl: './peertake.component.html',
  styleUrls: ['./peertake.component.css']
})
export class PeertakeComponent implements OnInit {
  classs = localStorage.getItem("class");
  private data ;
  private questions;
  private sender=[];
  private errorMessage=[];
  @Input() model : any;
  @Input() users : any;
  @Input() group : any;
  form : FormGroup;
  payLoad:any = [];
  constructor(public http:Http,private router:Router) {}

  ngOnInit() {

    this.form = this.model.toGroup();
  }

  getData(){
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/enterVal.php',JSON.stringify(localStorage.getItem("class")))
      .subscribe(res=>this.data=res.json());
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/questions.php',JSON.stringify(this.classs))
      .subscribe(res=>this.questions=res.json());
  }
  onSubmit() {
    if (this.zeroSum()){
      this.payLoad = JSON.stringify(this.form.value);
      this.hope();
      this.errorMessage.pop();
      return true;
    }
    else{
      this.errorMessage.push("Sum does not equal 100x the number of group members");
      this.payLoad="no";
      return false;
    }

  }

  zeroSum(){
    let array= document.getElementsByName("zerosum");
    let tot=0;

    for (let i=0;i<array.length;i++){
      if(parseInt((<HTMLInputElement>array[i]).value)){
        tot+=parseInt((<HTMLInputElement>array[i]).value);

      }
    }
    return tot === array.length * 100;

  }
  hope(){

    let i =0;
    while(document.getElementById(this.users[0]+i)!=null){
      i++;
    }
    for(let k =0;k<this.users.length;k++){
      let user =this.users[k];
      for(let j =0;j<i;j++){
        let array= JSON.stringify((<HTMLInputElement>document.getElementById(user+j)).value);
        //console.log(JSON.parse(array));
        this.sender.push(JSON.parse(array));
      }
      let today= new Date();
      let dd=today.getDate();
      let mm=today.getMonth()+1;
      let yyyy=today.getFullYear();



      let tempDate=yyyy+'/'+mm+'/'+dd;
      this.sender.push(tempDate);
      this.sender.push(user);
      this.sender.push(JSON.parse(localStorage.getItem("user")));
      this.sender.push(localStorage.getItem("evalID"));
      this.sender.push(localStorage.getItem("course"));
      this.sender.push(this.group);
      let test=0;
      //while (this.sender[test]!=null){
      //   console.log(this.sender[test]);
      //   test++;
      //  }

      console.log(JSON.stringify(this.sender));
      this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/PeerEnter.php',JSON.stringify(this.sender))
        .subscribe(res=>this.data=res.json());
      console.log(this.data);
      while(this.sender[0]!=null){
        this.sender.pop();
      }
    }
    while(this.sender[0]!=null){
      this.sender.pop();
    }
    alert("Peer Evaluation successfully submitted");
    this.form.reset();
    this.router.navigateByUrl("userhome");
  }

}
