import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './Navigation/side-nav/side-nav.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { SearchComponent } from './Navigation/search/search.component';
import { BottomCarouselCardComponent } from './Navigation/bottom-carousel-card/bottom-carousel-card.component';
import { MiddleIconCardComponent } from './Navigation/middle-icon-card/middle-icon-card.component';
import { CarouselBuilderComponent } from './Navigation/carousel-builder/carousel-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    FooterComponent,
    SearchComponent,
    BottomCarouselCardComponent,
    MiddleIconCardComponent,
    CarouselBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


