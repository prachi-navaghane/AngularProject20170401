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
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { CustomInputComponent } from './databinding/custom-input.component';
import { CustomOutputComponent } from './databinding/custom-output.component';
import { InterCompCommComponent } from './inter-comp-comm/inter-comp-comm.component';
import { ColorEmitterComponent } from './inter-comp-comm/color-emitter.component';
import { ColorReceiverComponent } from './inter-comp-comm/color-receiver.component';
import { MoreTemplatesComponent } from './more-templates/more-templates.component';
import { SubMoreComponent } from './more-templates/sub-more.component';
import { SubContentComponent } from './more-templates/sub-content.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleIndexComponent } from './lifecycle/lifecycle-index.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MysmallComponent,
    OurComponent,
    ViewEncapsulationComponent,
    WhileComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CustomInputComponent,
    CustomOutputComponent,
    InterCompCommComponent,
    ColorEmitterComponent,
    ColorReceiverComponent,
    MoreTemplatesComponent,
    SubMoreComponent,
    SubContentComponent,
    LifecycleComponent,
    LifecycleIndexComponent,
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
