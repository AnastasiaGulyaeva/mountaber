import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { StampComponent } from "./stamp/stamp.component";
import { JewelsComponent } from "./jewels/jewels.component";
import { ContactComponent } from "./contact/contact.component";
import { CollectionsComponent } from "./collections/collections.component";
import { DotSliderComponent } from "./dot-slider/dot-slider.component";
import { IconsComponent } from "./icons/icons.component";
import { HamburgerComponent } from "./hamburger/hamburger.component";
import { HttpClientModule } from "@angular/common/http";
import { MessageService } from "./services/message.service";

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
