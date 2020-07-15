import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  ViewChildren,
  QueryList,
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("logo", { static: false }) logo: ElementRef;
  @ViewChildren("menu") menus: QueryList<ElementRef>;
  screenHeight: number;
  screenWidth: number;

  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenHeight <= 650 && this.screenWidth >= 992) {
      this.logo.nativeElement.classList.add("box-logo-desktop");
      this.menus.forEach((menu) =>
        menu.nativeElement.classList.add("nav-link-desktop")
      );
    } else {
      this.logo.nativeElement.classList.remove("box-logo-desktop");
      this.menus.forEach((menu) =>
        menu.nativeElement.classList.remove("nav-link-desktop")
      );
    }
  }
}
