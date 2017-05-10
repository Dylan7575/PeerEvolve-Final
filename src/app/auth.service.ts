import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
@Injectable()
export class AuthService implements CanActivate {
  constructor(private http:Http,private router:Router){}
  private data;
  private error;
  canActivate() {

    this.http.get('http://localhost/php/untitledfolder/getUserName.php',{withCredentials:true})
        .subscribe(res=>this.data=res.json(),error => this.error = error,() => this.setData());
    return true;
  }
  setData(){
    if (this.data[1]==="admin"||this.data[1]==null) {
      this.router.navigateByUrl("home");
    }
    else{
      localStorage.setItem("user",JSON.stringify(this.data[0]));
    }

  }

}
