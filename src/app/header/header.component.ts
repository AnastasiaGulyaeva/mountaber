import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("header", { static: false }) header: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  // hamburgerClick() {
  //   // this.header.nativeElement.classList.add("hamburgerHeight");
  // }
}
