import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from "@angular/animations";

export const titleAnimation = [
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
];
