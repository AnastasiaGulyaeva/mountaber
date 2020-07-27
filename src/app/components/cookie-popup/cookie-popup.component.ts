import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-cookie-popup",
  templateUrl: "./cookie-popup.component.html",
  styleUrls: ["./cookie-popup.component.scss"],
})
export class CookiePopupComponent implements OnInit {
  cookieValue: string;
  visible: boolean = true;
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get("Cookie"); // To Get Cookie
    if (this.cookieValue == "MountaberCookiePolicy") {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

  accept() {
    this.cookieService.set("Cookie", "MountaberCookiePolicy", 14); // To Set Cookie
    this.visible = false;
  }
}
