import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-cookies-module",
  templateUrl: "./cookies-module.component.html",
  styleUrls: ["./cookies-module.component.scss"],
})
export class CookiesModuleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Swal.fire({
      position: "bottom",
      width: "100%",
      html:
        "<p>We use cookies to remember your preferences, draw up statistics on the usage of our website and show adverts based on your browsing habits. By continuing to browse this site, you are agreeing to our use of cookies. For more information about this, please refer to our Cookie Policy.</P>",
      focusConfirm: false,
      confirmButtonColor: "#bb9258",
      confirmButtonText: "Agree",
      customClass: {
        confirmButton: "confirm-button-class",
        content: "content-class",
      },
    });
  }
}
