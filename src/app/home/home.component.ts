import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from "@angular/animations";
import { circles } from "../animations/animation";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    circles,
    trigger("titleAnimation", [
      transition(":enter", [
        // hide the inner elements
        query("span:nth-child(1), span:nth-child(3), span:nth-child(4)", [
          style({
            opacity: 0,
            transform: "translateX(100%)",
          }),
          stagger(400, [
            animate(
              "0.6s cubic-bezier(.41,.12,.5,.83)",
              style({
                opacity: 1,
                transform: "translateX(0%)",
              })
            ),
          ]),
        ]),
      ]),
    ]),

    trigger("photoAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s 1.4s cubic-bezier(.41,.12,.5,.83)", style({ opacity: 1 })),
      ]),
    ]),

    // --------------------------------------- text animation ---------------------------------------
    trigger("textAnimationClick", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s cubic-bezier(.41,.12,.5,.83)", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  toggle = true;
  animationState = "start";
  @ViewChild("photo", { static: true }) photo: ElementRef;
  @ViewChild("imageTopLG", { static: false }) imageTopLG: ElementRef;
  @ViewChild("imageTopXS", { static: false }) imageTopXS: ElementRef;

  constructor() {}

  ngOnInit() {}

  animation(i) {
    this.animationState = this.animationState === "start" ? "finish" : "start";
    this.toggle = this.toggle === true ? false : true;
    this.imageTopLG.nativeElement.classList.toggle("imgTransparent");
    this.imageTopXS.nativeElement.classList.toggle("imgTransparent");
  }
}
