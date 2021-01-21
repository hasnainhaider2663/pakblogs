import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { TitleDescComponent } from './title-desc/title-desc.component';
import { AvatarCardComponent } from './avatar-card/avatar-card.component';
import { BannerPicComponent } from './banner-pic/banner-pic.component';
import { ContentComponent } from './content/content.component';
import { MoreSectionComponent } from './more-section/more-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubNavbarComponent,
    BannerCardComponent,
    TitleDescComponent,
    AvatarCardComponent,
    BannerPicComponent,
    ContentComponent,
    MoreSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
