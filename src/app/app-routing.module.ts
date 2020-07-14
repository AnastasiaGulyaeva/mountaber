import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StampComponent } from "./stamp/stamp.component";
import { JewelsComponent } from "./jewels/jewels.component";
import { ContactComponent } from "./contact/contact.component";
import { CollectionsComponent } from "./collections/collections.component";
import { CookiesComponent } from './views/cookies/cookies.component';
import { CreditsComponent } from './views/credits/credits.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "the-stamp", component: StampComponent },
  { path: "the-jewels", component: JewelsComponent },
  { path: "contact-us", component: ContactComponent },
  { path: "collections", component: CollectionsComponent },
  { path: "cookies", component: CookiesComponent },
  { path: "credits", component: CreditsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
