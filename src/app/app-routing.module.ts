import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BomSubMenu1Component } from './bom-sub-menu1/bom-sub-menu1.component';
import { BomSubMenu2Component } from './bom-sub-menu2/bom-sub-menu2.component';
import { BomSubMenu3Component } from './bom-sub-menu3/bom-sub-menu3.component';
import { BomComponent } from './bom/bom.component';
import { FirmabilgileriComponent } from './firmabilgileri/firmabilgileri.component';
import { GorusmelistesiComponent } from './gorusmelistesi/gorusmelistesi.component';
import { HakedisComponent } from './hakedis/hakedis.component';
import { MusteriComponent } from './musteri/musteri.component';
import { OzgecmisIslemleriComponent } from './ozgecmis-islemleri/ozgecmis-islemleri.component';
import { OzgecmisComponent } from './ozgecmis/ozgecmis.component';
import { SetSubMenu1Component } from './set-sub-menu1/set-sub-menu1.component';
import { SetSubMenu2Component } from './set-sub-menu2/set-sub-menu2.component';
import { SetSubMenu3Component } from './set-sub-menu3/set-sub-menu3.component';
import { SettingsComponent } from './settings/settings.component';
import { ToplantilistesiComponent } from './toplantilistesi/toplantilistesi.component';


const routes: Routes = [
  { path: '', redirectTo: '/hakedis', pathMatch: 'full' },
  { path: 'hakedis', component: HakedisComponent },
  {
    path: 'musteri', component: MusteriComponent
  },
  {
    path: 'ozgecmis', component: OzgecmisComponent
  },
  {
    path: 'settings',component:SettingsComponent
  },
  {path:'bom',component:BomComponent},
  { path: "m-firmabilgileri", component: FirmabilgileriComponent, outlet: "full" },
  { path: "cv-bilgileri", component: OzgecmisIslemleriComponent, outlet: "full" },
  { path: "m-toplantilistesi", component: ToplantilistesiComponent, outlet: "full" },
  { path: "m-gorusmelistesi", component: GorusmelistesiComponent, outlet: "full" },
  { path: "m-bom1", component: BomSubMenu1Component, outlet: "full" },
  { path: "m-bom2", component: BomSubMenu2Component, outlet: "full" },
  { path: "m-bom3", component: BomSubMenu3Component, outlet: "full" },
  { path: "m-set1", component: SetSubMenu1Component, outlet: "full" },
  { path: "m-set2", component: SetSubMenu2Component, outlet: "full" },
  { path: "m-set3", component: SetSubMenu3Component, outlet: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
