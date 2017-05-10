import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Angular2Csv} from 'angular2-csv';




@Component({
  selector: 'app-evalstats',
  templateUrl: './evalstats.component.html',
  styleUrls: ['./evalstats.component.css']
})
export class EvalstatsComponent implements OnInit {
  private data;
  private sender=[];
  private scores=[1,2,3,4,5,6,7,8,9,10];

  private yes;
  private average;
  private evalid=localStorage.getItem("evalID");
  constructor(public http:Http) { }
  private currentClass =localStorage.getItem("class");

  ngOnInit() {
    this.sender.push(this.evalid);
    this.sender.push(this.currentClass);
    console.log(this.sender);
    this.getData();
  }
  getData(){
    this.http.post('http://localhost/PHP/untitledfolder/getScores.php',JSON.stringify(this.sender))
      .subscribe(res=>this.data=res.json());
    this.http.post('http://localhost/PHP/untitledfolder/EvalStats.php',JSON.stringify(this.sender))
      .subscribe(res=>this.average=res.json());



  }
  downloadFile(){
    let blob= new Angular2Csv(this.data,"MyReport");
    let url = window.URL.createObjectURL(blob);
    window.open(url);
  }
  getStuff(users){
    return Object.keys(users).map((key)=>{return users[key]})

  }
  downloadAverages(){
    let blob = new Angular2Csv(this.average,"Averages");
    let url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}
