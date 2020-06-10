import { Component, HostListener, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mountaber";
  top: any;
  left: any;
  expand = false;
  @ViewChild("follower", { static: false }) follower: ElementRef;

  constructor() {}

  ngOnInit() {}
  // cursor
  @HostListener("document:mousemove", ["$event"])
  onMousemove($event) {
    this.top = $event.pageY + "px";
    this.left = $event.pageX + "px";
    this.follower.nativeElement.setAttribute(
      "style",
      "top: " + ($event.pageY + 4) + "px; left: " + ($event.pageX + 4) + "px;"
    );
  }
}
