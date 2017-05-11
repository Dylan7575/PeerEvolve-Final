import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  data;
  user = JSON.parse(localStorage.getItem("user"));

  constructor(private http: Http) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/GetUserVals.php',JSON.stringify(this.user))
      .subscribe(res=>this.data=res.json());
  }
  public  saveID(toStore,toClass){
    localStorage.setItem("evalID",toStore);
    localStorage.setItem("course",toClass);
  }


}
