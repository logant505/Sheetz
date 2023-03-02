import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './Navigation/side-nav/side-nav.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { SearchComponent } from './search/search.component';
import { BottomCarouselCardComponent } from './bottom-carousel-card/bottom-carousel-card.component';
import { MiddleIconCardComponent } from './middle-icon-card/middle-icon-card.component';
import { CarouselBuilderComponent } from './carousel-builder/carousel-builder.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeLayoutComponent } from './layouts/buy-stuff/buy stuff';
import { SearchLayoutComponent } from './layouts/find/search-layout.component';
import { BioLayoutComponent } from './layouts/bio-layout/bio-layout.component';
import { KidsLayoutComponent } from './layouts/kids-layout/kids-layout.component';
import { CardLayoutComponent } from './layouts/card-layout/card-layout.component';
import { CharitiesComponent } from './layouts/charities/charities.component';
import { SponsorshipComponent } from './layouts/sponsorship/sponsorship.component';
import { ScripComponent } from './layouts/scrip/scrip.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    FooterComponent,
    SearchComponent,
    BottomCarouselCardComponent,
    MiddleIconCardComponent,
    CarouselBuilderComponent,
    LayoutsComponent,
    HomeLayoutComponent,
    SearchLayoutComponent,
    BioLayoutComponent,
    KidsLayoutComponent,
    CardLayoutComponent,
    CharitiesComponent,
    SponsorshipComponent,
    ScripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


