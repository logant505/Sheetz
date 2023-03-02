import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScripComponent } from './layouts/scrip/scrip.component';
import { BioLayoutComponent } from './layouts/bio-layout/bio-layout.component';
import { SearchLayoutComponent } from './layouts/find/search-layout.component';
import { CharitiesComponent } from './layouts/charities/charities.component'; 
import { KidsLayoutComponent } from './layouts/kids-layout/kids-layout.component';
const routes: Routes = [
  {
    path: '',
    component:CharitiesComponent
  },
  {
    path:'',
    component:BioLayoutComponent
  },
  {
    path:'',
    component:ScripComponent
  },
  {
    path:'',
    component:SearchLayoutComponent
  },
  {
    path:'',
    component:KidsLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
