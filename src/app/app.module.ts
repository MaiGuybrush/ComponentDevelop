import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DefectMapModule } from './defect-map/defect-map.module';
import { PanelComponent } from './panel/panel.component';
import { DefectComponent } from './defect/defect.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    DefectComponent
  ],
  imports: [
    BrowserModule,
    DefectMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
