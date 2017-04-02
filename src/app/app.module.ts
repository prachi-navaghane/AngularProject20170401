import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { MysmallComponent } from './mysmall/mysmall.component';
import { OurComponent } from './our/our.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { WhileComponent } from './our/while.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MysmallComponent,
    OurComponent,
    ViewEncapsulationComponent,
    WhileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
