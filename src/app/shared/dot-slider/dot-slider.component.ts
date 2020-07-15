import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-dot-slider",
  templateUrl: "./dot-slider.component.html",
  styleUrls: ["./dot-slider.component.scss"],
})
export class DotSliderComponent implements OnInit {
  @ViewChild("liCollections", { static: true }) liCollections: ElementRef;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.location.onUrlChange((url: string) => {
      if (url == "/collections") {
        this.liCollections.nativeElement.classList.add(
          "menu-active-collections"
        );
      } else {
        this.liCollections.nativeElement.classList.remove(
          "menu-active-collections"
        );
      }
    });
  }
}
