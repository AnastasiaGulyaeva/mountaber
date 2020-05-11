import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StampComponent } from "./stamp/stamp.component";
import { JewelsComponent } from "./jewels/jewels.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "stamp", component: StampComponent },
  { path: "jewels", component: JewelsComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
