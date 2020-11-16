import {
  Slider,
  SliderChangeEventArgs,
  SliderTickRenderedEventArgs
} from "@syncfusion/ej2-inputs";
/**
 * Bar Customization sample
 */

// Initialize Slider component
let gradientSlider: Slider = new Slider({
  // Set slider minimum and maximum values
  min: 0,
  max: 100,
  // Set the intial value for slider
  value: 50,
  // Set the type to render minRange slider
  type: "MinRange",
  // Initialize ticks with placement, largestep, smallstep
  ticks: { placement: "Before", largeStep: 25, smallStep: 5 },

  // Handler used to customize tick element
  renderedTicks: (args: SliderTickRenderedEventArgs) => {
    let li: any = args.ticksWrapper.getElementsByClassName("e-large");
    let remarks: any = ["Worst", "Poor", "Average", "Good", "Excellent"];
    for (let i: number = 0; i < li.length; ++i) {
      (li[i].querySelectorAll(".e-tick-before")[0] as HTMLElement).innerText =
        remarks[i];
    }
  }
});
gradientSlider.appendTo("#gradient_slider");
