import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from "@angular/animations";
import { titleAnimation } from "../animations/animationTitle";

@Component({
  selector: "app-stamp",
  templateUrl: "./stamp.component.html",
  styleUrls: ["./stamp.component.scss"],
  animations: [
    titleAnimation,
    trigger("animationEnamelsPhoto", [
      transition(":enter", [
        style({
          opacity: "0",
          transform: "scale(0.5)",
        }),
        animate(
          "0.6s 0.4s cubic-bezier(0.85, 0, 0.15, 1)",
          style({
            opacity: "1",
            transform: "scale(1)",
          })
        ),
      ]),
      transition(":leave", [
        animate(
          "0.6s cubic-bezier(0.85, 0, 0.15, 1)",
          style({
            opacity: "0",
            transform: "scale(0.5)",
          })
        ),
      ]),
    ]),

    trigger("animationText", [
      state(
        "start",
        style({
          transform: "scale(1) translateX(0) translateY(0)",
        })
      ),

      state(
        "finish",
        style({
          transform: "scale(2.6) translateX(0) translateY(0)",
        })
      ),

      transition("start <=> finish", [
        animate("0.9s cubic-bezier(0.85, 0, 0.15, 1)"),
      ]),
    ]),

    // -----------------------------------ring animation---------------------------------------
    trigger("animationRing", [
      state(
        "start",
        style({
          opacity: "1",
          transform: "scale(1) translateX(0) translateY(0)",
        })
      ),

      state(
        "finish",
        style({
          opacity: "0.3",
          transform: "scale(0.9) translateX(0) translateY(0)",
        })
      ),

      transition("start => finish", [
        animate("0.6s cubic-bezier(0, 0.55, 0.45, 1)"),
      ]),

      transition("finish => start", [
        animate("0.6s 0.2s cubic-bezier(0, 0.55, 0.45, 1)"),
      ]),
    ]),

    // -----------------------------------title animation---------------------------------------
    trigger("titleAnimation", [
      transition(":enter", [
        // hide the inner elements
        query("span:nth-child(1), span:nth-child(3)", [
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

    // ------------------------------------- text animation -----------------------------------------
    trigger("textAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.6s 1s cubic-bezier(.41,.12,.5,.83)", style({ opacity: 1 })),
      ]),
    ]),

    trigger("RingTotalAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(
          "0.6s 1.4s cubic-bezier(.41,.12,.5,.83)",
          style({ opacity: 1 })
        ),
      ]),
    ]),

    trigger("arrowAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.6s 1s cubic-bezier(.41,.12,.5,.83)", style({ opacity: 1 })),
      ]),
    ]),

    // -------------------------------------- transition text ---------------------------

    trigger("changeStateTitle", [
      state("title", style({ transform: "translateX(0)", opacity: 1 })),
      state(
        "text",
        style({
          transform: "translateX(-180%)",
          opacity: 0,
        })
      ),
      transition("title => text", [animate("0.5s ease-in")]),
      transition("text => title", [animate("0.5s ease-out")]),
    ]),

    trigger("changeStateText", [
      state(
        "text",
        style({
          transform: "translateX(0) translateY(-100%)",
          opacity: 1,
        })
      ),
      state(
        "title",
        style({
          transform: "translateX(180%) translateY(-100%)",
          opacity: 0,
        })
      ),
      transition("text=>title", [animate("0.5s ease-in")]),
      transition("title=>text", [animate("0.5s ease-out")]),
    ]),

    // --------------------------------------- final animations -----------------------------------------
  ],
})
export class StampComponent implements OnInit {
  animationStateEnamels = "start";
  isVisibleEnamels = false;
  animationStateDesign = "start";
  isVisibleDesign = false;
  animationStateStone = "start";
  isVisibleStone = false;
  animationStatePolished = "start";
  isVisiblePolished = false;
  animationRing = "start";
  screenHeight: number;
  screenWidth: number;
  @ViewChild("row", { static: true }) row: ElementRef;
  @ViewChild("arrow", { static: true }) arrow: ElementRef;
  currentState = "title";
  constructor() {}

  ngOnInit(): void {
    this.onResize();
  }

  animationEnamels() {
    this.animationStateEnamels =
      this.animationStateEnamels === "start" ? "finish" : "start";
    this.isVisibleEnamels = this.isVisibleEnamels === false ? true : false;
    this.animationRing = this.animationRing === "start" ? "finish" : "start";
  }

  animationDesign() {
    this.animationStateDesign =
      this.animationStateDesign === "start" ? "finish" : "start";
    this.isVisibleDesign = this.isVisibleDesign === false ? true : false;
    this.animationRing = this.animationRing === "start" ? "finish" : "start";
  }
  animationStone() {
    this.animationStateStone =
      this.animationStateStone === "start" ? "finish" : "start";
    this.isVisibleStone = this.isVisibleStone === false ? true : false;
    this.animationRing = this.animationRing === "start" ? "finish" : "start";
  }
  animationPolished() {
    this.animationStatePolished =
      this.animationStatePolished === "start" ? "finish" : "start";
    this.isVisiblePolished = this.isVisiblePolished === false ? true : false;
    this.animationRing = this.animationRing === "start" ? "finish" : "start";
  }

  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenHeight > 667 && this.screenWidth < 768) {
      this.row.nativeElement.classList.remove("interior-height");
      this.row.nativeElement.classList.add("interior-height-x");
    }
  }

  moreText() {
    this.currentState = this.currentState === "title" ? "text" : "title";
    let arrow = this.arrow.nativeElement;

    if (arrow.classList.contains("is-flipped-left")) {
      arrow.classList.remove("is-flipped-left");
      arrow.classList.add("is-flipped-right");
    } else if (arrow.classList.contains("is-flipped-right")) {
      arrow.classList.remove("is-flipped-right");
      arrow.classList.add("is-flipped-left");
    } else {
      arrow.classList.add("is-flipped-left");
    }
  }
}
