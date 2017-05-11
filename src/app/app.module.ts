import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {AdminGuard} from './admin.guard';
import { NewclassComponent } from './newclass/newclass.component';
import { DoerBarComponent } from './doer-bar/doer-bar.component';
import { TopbarComponent } from './topbar/topbar.component';
import {NgbModule, NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';
import { StudentsComponent } from './students/students.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { ShowComponent } from './show/show.component';
import { MakeGroupsComponent } from './make-groups/make-groups.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { SurveyDemoComponent } from './survey-demo/survey-demo.component';
import { EvalstatsComponent } from './evalstats/evalstats.component';
import { CurvalsComponent } from './curvals/curvals.component';
import { PeerevalComponent } from './peereval/peereval.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { PeertakeComponent } from './peertake/peertake.component';
import {AuthService} from './auth.service';
import {HashLocationStrategy} from '@angular/common';
import {DatePickerModule} from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewclassComponent,
    DoerBarComponent,
    TopbarComponent,
    UploadcsvComponent,
    StudentsComponent,
    SingleStudentComponent,
    ShowComponent,
    MakeGroupsComponent,
    EditStudentComponent,
    SurveyDemoComponent,
    EvalstatsComponent,
    CurvalsComponent,
    PeerevalComponent,
    UserhomeComponent,
    PeertakeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DatePickerModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
        {path: '', redirectTo : 'home', pathMatch: 'full',canActivate:[AdminGuard]},
        {path: 'home', component:HomeComponent,canActivate:[AdminGuard]},
        {path: 'students', component:StudentsComponent,canActivate:[AdminGuard]},
        {path: 'students/uploadcsv',component:UploadcsvComponent,canActivate:[AdminGuard]},
        {path: 'groups',component:ShowComponent,canActivate:[AdminGuard]},
        {path: 'students/editstudents',component:EditStudentComponent,canActivate:[AdminGuard]},
        {path: 'curvals', component:CurvalsComponent,canActivate:[AdminGuard]},
        {path: 'curvals/evalstats', component:EvalstatsComponent,canActivate:[AdminGuard]},
        {path: 'curvals/peereval', component:PeerevalComponent, canActivate: [AdminGuard]},
        {path: 'userhome',component:UserhomeComponent,canActivate:[AuthService]},
        {path: 'userhome/survey',component:SurveyDemoComponent,canActivate:[AuthService]},
        ],{useHash:true})
  ],
  providers: [AdminGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
