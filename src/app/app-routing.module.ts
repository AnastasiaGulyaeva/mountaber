import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { StampComponent } from "./views/stamp/stamp.component";
import { JewelsComponent } from "./views/jewels/jewels.component";
import { ContactComponent } from "./views/contact/contact.component";
import { CollectionsComponent } from "./views/collections/collections.component";
import { CookiesComponent } from './views/cookies/cookies.component';
import { CreditsComponent } from './views/credits/credits.component';
import { LegalAdvertisementComponent } from './views/legal-advertisement/legal-advertisement.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "the-stamp", component: StampComponent },
  { path: "the-jewels", component: JewelsComponent },
  { path: "contact-us", component: ContactComponent },
  { path: "collections", component: CollectionsComponent },
  { path: "cookies", component: CookiesComponent },
  { path: "credits", component: CreditsComponent },
  { path: "legal-advertisement", component: LegalAdvertisementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
