import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  group,
} from "@angular/animations";

@Component({
  selector: "app-collections",
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"],
  animations: [],
})
export class CollectionsComponent implements OnInit {
  @ViewChild("chamferBox", { static: false }) chamferBox: ElementRef;
  @ViewChild("rosemaryBox", { static: false }) rosemaryBox: ElementRef;

  @ViewChild("chamferRing", { static: false }) chamferImg: ElementRef;
  @ViewChild("rosemaryRing", { static: false }) rosemaryImg: ElementRef;

  @ViewChild("chamferH2", { static: false }) chamferH2: ElementRef;
  @ViewChild("rosemaryH2", { static: false }) rosemaryH2: ElementRef;

  @ViewChild("theCollections", { static: false }) collections: ElementRef;
  @ViewChild("laTecnica", { static: false }) laTecnica: ElementRef;

  @ViewChild("verticalLine", { static: false }) verticalLine: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  emphasiseChamferImg() {
    this.chamferImg.nativeElement.classList.add("emphasis");
    this.chamferImg.nativeElement.classList.add("emphasis-left-img");
    this.rosemaryImg.nativeElement.classList.add("shrank");
    this.rosemaryImg.nativeElement.classList.add("shrank-right-img");
    this.chamferH2.nativeElement.classList.add("left-h2-emphasis");

    this.collections.nativeElement.classList.add("hide");

    this.verticalLine.nativeElement.classList.add("hide");

    this.laTecnica.nativeElement.classList.remove("d-none", "laTecnicaMove");
    this.laTecnica.nativeElement.classList.add("show");
  }
  shrinkChamferImg() {
    this.chamferImg.nativeElement.classList.remove("emphasis");
    this.chamferImg.nativeElement.classList.remove("emphasis-left-img");
    this.rosemaryImg.nativeElement.classList.remove("shrank");
    this.rosemaryImg.nativeElement.classList.remove("shrank-right-img");
    this.chamferH2.nativeElement.classList.remove("left-h2-emphasis");

    this.verticalLine.nativeElement.classList.remove("hide");
    this.verticalLine.nativeElement.classList.add("show");
  }
  emphasiseRosemaryImg() {
    this.rosemaryImg.nativeElement.classList.add("emphasis");
    this.rosemaryImg.nativeElement.classList.add("emphasis-right-img");
    this.chamferImg.nativeElement.classList.add("shrank");
    this.chamferImg.nativeElement.classList.add("shrank-left-img");
    this.rosemaryH2.nativeElement.classList.add("right-h2-emphasis");

    this.collections.nativeElement.classList.add("hide");

    this.verticalLine.nativeElement.classList.add("hide");

    this.laTecnica.nativeElement.classList.remove("d-none");
    this.laTecnica.nativeElement.classList.add("show", "laTecnicaMove");
  }
  shrinkRosemaryImg() {
    this.rosemaryImg.nativeElement.classList.remove("emphasis");
    this.rosemaryImg.nativeElement.classList.remove("emphasis-right-img");
    this.chamferImg.nativeElement.classList.remove("shrank");
    this.chamferImg.nativeElement.classList.remove("shrank-left-img");
    this.rosemaryH2.nativeElement.classList.remove("right-h2-emphasis");

    this.verticalLine.nativeElement.classList.remove("hide");
    this.verticalLine.nativeElement.classList.add("show");
  }
}
