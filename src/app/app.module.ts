import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './in-memory-web.service';
import {DemoMaterialModule} from "./material.module";
import {  UserlistComponent } from './components/userlist/userlist.component';
import { UserdialogComponent } from './components/userdialog/userdialog.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryService),DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],  
  entryComponents: [UserdialogComponent],
})
export class AppModule { }
