import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HakedisComponent } from './hakedis/hakedis.component';
import { MusteriComponent } from './musteri/musteri.component';
import { FirmabilgileriComponent } from './firmabilgileri/firmabilgileri.component';
import {FormsModule} from '@angular/forms';
import { OzgecmisComponent } from './ozgecmis/ozgecmis.component';
import { OzgecmisIslemleriComponent } from './ozgecmis-islemleri/ozgecmis-islemleri.component';
import { ToplantilistesiComponent } from './toplantilistesi/toplantilistesi.component';
import { GorusmelistesiComponent } from './gorusmelistesi/gorusmelistesi.component';
import { BomComponent } from './bom/bom.component';
import { BomSubMenu1Component } from './bom-sub-menu1/bom-sub-menu1.component';
import { BomSubMenu2Component } from './bom-sub-menu2/bom-sub-menu2.component';
import { BomSubMenu3Component } from './bom-sub-menu3/bom-sub-menu3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './settings/settings.component';
import { SetSubMenu1Component } from './set-sub-menu1/set-sub-menu1.component';
import { SetSubMenu2Component } from './set-sub-menu2/set-sub-menu2.component';
import { SetSubMenu3Component } from './set-sub-menu3/set-sub-menu3.component';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HakedisComponent,
    MusteriComponent,
    FirmabilgileriComponent,
    OzgecmisComponent,
    OzgecmisIslemleriComponent,
    ToplantilistesiComponent,
    GorusmelistesiComponent,
    BomComponent,
    BomSubMenu1Component,
    BomSubMenu2Component,
    BomSubMenu3Component,
    SettingsComponent,
    SetSubMenu1Component,
    SetSubMenu2Component,
    SetSubMenu3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
