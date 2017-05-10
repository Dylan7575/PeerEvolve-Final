/**
 * Created by dylanlafrenz on 3/5/17.
 */
import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from "rxjs/Rx";
import {Http} from "@angular/http";
import {parseCookieValue} from "@angular/platform-browser/src/browser/browser_adapter";


@Injectable()
export class AdminGuard implements CanActivate {
  private data;
  private temp;
  private bool ;
  private error;
    constructor(private http:Http,private router: Router ) {}
    canActivate() {
        this.http.get('http://localhost/PHP/untitledfolder/getUserName.php',{withCredentials:true})
            .subscribe(res=>this.data=res.json(),error => this.error = error,() => this.setData());
            return true;
        }
        setData() {
            if(this.data==="NONE"){


                localStorage.clear();
                window.location.href="http://localhost/PHP/untitledfolder/login.php";

            }
            if (this.data[1]==="admin") {

                    localStorage.setItem("user",JSON.stringify(this.data[0]));

            }
            else{
                localStorage.clear();
                localStorage.setItem("user",JSON.stringify(this.data[0]));
                this.router.navigateByUrl("/userhome");
            }

        }

}
