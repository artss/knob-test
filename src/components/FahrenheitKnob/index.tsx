import {Knob, KnobProps} from "../Knob";

export type FahrenheitKnobProps = Omit<KnobProps, 'unit'>

export function FahrenheitKnob(props: FahrenheitKnobProps) {
  return <Knob unit="°F" {...props} />
}