import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Router } from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from "@angular/animations";

import { circles } from "../../animations/animation";

@Component({
  selector: "app-jewels",
  templateUrl: "./jewels.component.html",
  styleUrls: ["./jewels.component.scss"],
  animations: [
    circles,
    trigger("animationJewels", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(
          "0.6s 3.4s cubic-bezier(.41,.12,.5,.83)",
          style({ opacity: 1 })
        ),
      ]),
    ]),

    trigger("textAnimationL", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(
          "0.6s 2.1s cubic-bezier(.41,.12,.5,.83)",
          style({ opacity: 1 })
        ),
      ]),
    ]),

    trigger("textAnimationR", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(
          "0.6s 2.2s cubic-bezier(.41,.12,.5,.83)",
          style({ opacity: 1 })
        ),
      ]),
    ]),

    trigger("buttonAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(
          "0.6s 2.7s cubic-bezier(.41,.12,.5,.83)",
          style({ opacity: 1 })
        ),
      ]),
    ]),

    trigger("titleAnimation", [
      transition(":enter", [
        // hide the inner elements
        query(
          "span:nth-child(1), span:nth-child(2), span:nth-child(3), span:nth-child(4)",
          [
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
          ]
        ),
      ]),
    ]),
  ],
})
export class JewelsComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  @ViewChild("pendant", { static: true }) pendant: ElementRef;

  constructor(private router: Router) {}
  goToCollections() {
    this.router.navigate(["/collections"]);
  }
  ngOnInit(): void {
    this.onResize();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenHeight === 812 && this.screenWidth === 375) {
      this.pendant.nativeElement.classList.add("pendantX");
    }
  }
}
