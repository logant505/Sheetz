import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './Navigation/side-nav/side-nav.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { SearchComponent } from './Navigation/search/search.component';
import { BottomCarouselCardComponent } from './Navigation/bottom-carousel-card/bottom-carousel-card.component';
import { MiddleIconCardComponent } from './Navigation/middle-icon-card/middle-icon-card.component';
import { CarouselBuilderComponent } from './Navigation/carousel-builder/carousel-builder.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { SearchLayoutComponent } from './layouts/find/search-layout.component';
import { BioLayoutComponent } from './layouts/bio-layout/bio-layout.component';
import { KidsLayoutComponent } from './layouts/kids-layout/kids-layout.component';
import { CharitiesComponent } from './layouts/charities/charities.component';
import { ScripComponent } from './layouts/scrip/scrip.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { CardBuilderComponent } from './layouts/card-builder/card-builder.component';
import { TopFlexComponent } from './Navigation/top-flex/top-flex.component';
import { UserInfoComponent } from './Navigation/side-nav/user-info/user-info.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import {provideDatabase,getDatabase} from '@angular/fire/database';
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
    BioLayoutComponent,
    CharitiesComponent,
    SearchLayoutComponent,
    KidsLayoutComponent,
    ScripComponent,
    HomepageComponent,
    CardBuilderComponent,
    TopFlexComponent,
    UserInfoComponent,
    AddProductComponent,
    AuthComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase,'sheetz-app'),
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
  provideDatabase(()=>getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


