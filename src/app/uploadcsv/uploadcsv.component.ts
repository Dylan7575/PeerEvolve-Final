import {Component, OnInit, Inject, NgZone, ViewChild, Input, ElementRef} from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-uploadcsv',
  templateUrl: './uploadcsv.component.html',
  styleUrls: ['./uploadcsv.component.css']
})
export class UploadcsvComponent{
  private data;
  constructor(private http:Http,private router:Router) {}
  onUpload(event) {
    let file = (<HTMLInputElement>document.getElementById("file")).files[0]
    console.log(file.name);
    let sub = file.name.substr(file.name.length - 3);
    if(sub !== "csv") {
      alert("Unsupported file type");
      return;
    }
    else{
      let myReader = new FileReader();
      myReader.onloadend = (e) => {
        console.log(myReader.result);
        let send = [myReader.result, localStorage.getItem("class")];
        // console.log(this.sender);
        this.http.post('http://localhost/PHP/untitledfolder/UploadCSV.php', JSON.stringify(send))
          .subscribe(data => this.data = data.json);
        alert("Successful import");
        this.router.navigateByUrl("students");
      };

      myReader.readAsText(file);
    }
  }
}
