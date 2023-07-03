import {Knob, KnobProps} from "../Knob";

export type CelsiusKnobProps = Omit<KnobProps, 'unit'>

export function CelsiusKnob(props: CelsiusKnobProps) {
  return <Knob unit="°C" {...props} />
}