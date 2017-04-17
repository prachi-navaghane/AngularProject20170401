import { MapService } from './service/map.service';
import { DataService } from './service/data.service';
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
import { DirectivesComponent } from './directives/directives.component';
import { AttrDirCompComponent } from './directives/attr-dir-comp.component';
import { SizerDirective } from './directives/sizer.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { ServiceComponent } from './service/service.component';
import { OneComponent } from './service/one.component';
import { TwoComponent } from './service/two.component';
import { ProjModOneComponent } from './proj-mod-one/proj-mod-one.component';
import { DropdownDirective } from './proj-mod-one/dropdown.directive';
import { StrDirComponent } from './directives/str-dir.component';

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
    DirectivesComponent,
    AttrDirCompComponent,
    SizerDirective,
    MyIfDirective,
    ServiceComponent,
    OneComponent,
    TwoComponent,
    ProjModOneComponent,
    DropdownDirective,
    StrDirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
