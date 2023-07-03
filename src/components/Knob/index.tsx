import { useMemo, useState } from 'react';
import cx from 'classnames';
import './index.css';

const ANGLE_MIN = -150;
const ANGLE_MAX = 150;

export type KnobProps = {
  min: number;
  max: number;
  value: number;
  unit: string;
  className?: string;
};

export function Knob({ min, max, value, unit, className }: KnobProps) {
  const [outOfRange, setOutOfRange] = useState(false);

  const angle = useMemo(() => {
    if (value < min) {
      setOutOfRange(true);
      return ANGLE_MIN;
    }
    if (value > max) {
      setOutOfRange(true);
      return ANGLE_MAX;
    }

    setOutOfRange(false);

    const range = max - min;
    const arcRange = ANGLE_MAX - ANGLE_MIN;

    const a = value / range * arcRange + ANGLE_MIN;

    console.log('=', value, range, arcRange, a);
    return a;
  }, [min, max, value]);

  const displayValue = useMemo(() => {
    if (Number.isInteger(value)) return value;
    return value.toFixed(3).replace(/\.?0+$/, '');
  }, [value])

  return (
    <div className={cx('Knob', className)}>
      <div className="Knob-circle">
        <div className="Knob-pointer" style={{transform: `rotate(${angle}deg)`}} />
        <div className="Knob-mark" style={{transform: `rotate(${ANGLE_MIN}deg)`}} />
        <div className="Knob-mark" style={{transform: `rotate(${ANGLE_MAX}deg)`}} />
      </div>

      <div className={cx('Knob-label', {'Knob-label-out-of-range': outOfRange})}>
        {displayValue} {unit}
      </div>
    </div>
  )
}