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

  ngOnInit() {
    //   const cursor = this.cursor.nativeElement;
    //   // var timer;
    //   document.addEventListener("mousemove", (e) => {
    //     // cursor.classList.remove("stop");
    //     cursor.setAttribute(
    //       "style",
    //       "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    //     );
    //   });
    //   // function mouseStopped() {
    //   //   // the actual function that is called
    //   //   cursor.classList.add("stop");
    //   // }
    //   // document.addEventListener("mousemove", function () {
    //   //   clearTimeout(timer);
    //   //   timer = setTimeout(mouseStopped, 300);
    //   // });
  }

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
