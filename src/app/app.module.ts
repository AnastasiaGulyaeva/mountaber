import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./views/home/home.component";
import { StampComponent } from "./views/stamp/stamp.component";
import { JewelsComponent } from "./views/jewels/jewels.component";
import { ContactComponent } from "./views/contact/contact.component";
import { CollectionsComponent } from "./views/collections/collections.component";
import { DotSliderComponent } from "./shared/dot-slider/dot-slider.component";
import { IconsComponent } from "./shared/icons/icons.component";
import { HamburgerComponent } from "./shared/hamburger/hamburger.component";
import { HttpClientModule } from "@angular/common/http";
import { MessageService } from "./services/message.service";
import { CookiesComponent } from './views/cookies/cookies.component';
import { CreditsComponent } from './views/credits/credits.component';
import { LegalAdvertisementComponent } from './views/legal-advertisement/legal-advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StampComponent,
    JewelsComponent,
    ContactComponent,
    CollectionsComponent,
    DotSliderComponent,
    IconsComponent,
    HamburgerComponent,
    CookiesComponent,
    CreditsComponent,
    LegalAdvertisementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
