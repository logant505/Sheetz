import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScripComponent } from './layouts/scrip/scrip.component';
import { BioLayoutComponent } from './layouts/bio-layout/bio-layout.component';
import { SearchLayoutComponent } from './layouts/find/search-layout.component';
import { CharitiesComponent } from './layouts/charities/charities.component'; 
import { KidsLayoutComponent } from './layouts/kids-layout/kids-layout.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path: 'charities',
    component:CharitiesComponent
  },
  {
    path:'whatsAsheetz',
    component:BioLayoutComponent
  },
  {
    path:'scrip',
    component:ScripComponent
  },
  {
    path:'search',
    component:SearchLayoutComponent
  },
  {
    path:'kids',
    component:KidsLayoutComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
