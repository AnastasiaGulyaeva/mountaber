import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild("footer", { static: true }) footer: ElementRef;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.location.onUrlChange((url: string) => {
      if (url == "/the-jewels") {
        this.footer.nativeElement.classList.add(
          "transparentFooter"
        );
      } else {
        this.footer.nativeElement.classList.remove(
          "transparentFooter"
        );
      }
    });
  }

}
