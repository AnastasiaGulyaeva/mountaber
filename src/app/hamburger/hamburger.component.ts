import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  state,
} from "@angular/animations";

@Component({
  selector: "app-hamburger",
  templateUrl: "./hamburger.component.html",
  styleUrls: ["./hamburger.component.scss"],
  animations: [
    trigger("menuAnimation1", [
      state(
        "close",
        style({
          opacity: "0",
          transform: "translateX(-100%)",
        })
      ),

      state(
        "open",
        style({
          opacity: "1",
          transform: "translateX(0%)",
        })
      ),

      transition("close => open", [
        animate("0.8s 0.1s cubic-bezier(.41,.12,.5,.83)"),
      ]),
    ]),

    trigger("menuAnimation2", [
      state(
        "close",
        style({
          opacity: "0",
          transform: "translateX(-100%)",
        })
      ),

      state(
        "open",
        style({
          opacity: "1",
          transform: "translateX(0%)",
        })
      ),

      transition("close => open", [
        animate("0.8s 0.3s cubic-bezier(.41,.12,.5,.83)"),
      ]),
    ]),

    trigger("menuAnimation3", [
      state(
        "close",
        style({
          opacity: "0",
          transform: "translateX(-100%)",
        })
      ),

      state(
        "open",
        style({
          opacity: "1",
          transform: "translateX(0%)",
        })
      ),

      transition("close => open", [
        animate("0.8s 0.5s cubic-bezier(.41,.12,.5,.83)"),
      ]),
    ]),

    trigger("menuAnimation4", [
      state(
        "close",
        style({
          opacity: "0",
          transform: "translateX(-100%)",
        })
      ),

      state(
        "open",
        style({
          opacity: "1",
          transform: "translateX(0%)",
        })
      ),

      transition("close => open", [
        animate("0.8s 0.7s cubic-bezier(.41,.12,.5,.83)"),
      ]),
    ]),

    trigger("menuAnimationLine", [
      state(
        "close",
        style({
          opacity: "0",
          transform: "translateX(-100%)",
        })
      ),

      state(
        "open",
        style({
          opacity: "1",
          transform: "translateX(0%)",
        })
      ),

      transition("close => open", [
        animate("0.8s 0.9s cubic-bezier(.41,.12,.5,.83)"),
      ]),
    ]),

    trigger("menuAnimationIcons", [
      state(
        "close",
        style({
          opacity: "0",
        })
      ),

      state(
        "open",
        style({
          opacity: "1",
        })
      ),

      transition("close => open", [
        animate("1s 0.9s cubic-bezier(.41,.12,.5,.83)"),
      ]),
    ]),
  ],
})
export class HamburgerComponent implements OnInit {
  @ViewChild("input", { static: false }) input: ElementRef;
  menuState = "close";
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.input.nativeElement.checked = false;
    this.menuState = this.menuState === "close" ? "open" : "close";
  }

  openMenu() {
    this.menuState = this.menuState === "close" ? "open" : "close";
  }
}
