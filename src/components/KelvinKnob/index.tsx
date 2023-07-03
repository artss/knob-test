import {Knob, KnobProps} from "../Knob";

export type KelvinKnobProps = Omit<KnobProps, 'unit'>

export function KelvinKnob(props: KelvinKnobProps) {
  return <Knob unit="K" {...props} />
}