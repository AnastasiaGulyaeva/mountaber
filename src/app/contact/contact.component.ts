import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  @ViewChildren("span") span: QueryList<ElementRef>;
  @ViewChildren("input") input: QueryList<ElementRef>;
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
    });
  }

  submit() {}

  inputChange(i: number) {
    if (this.input.toArray()[i].nativeElement.value !== "") {
      this.span.toArray()[i].nativeElement.classList.add("input--filled");
    } else {
      this.span.toArray()[i].nativeElement.classList.remove("input--filled");
    }
  }
}
