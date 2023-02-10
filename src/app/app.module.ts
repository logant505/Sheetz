import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './Navigation/side-nav/side-nav.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { SearchComponent } from './Navigation/search/search.component';
import { SlideshowComponent } from './Navigation/slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    FooterComponent,
    SearchComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
