import React  from "react";

interface ColorSwitchProps {
  onChangeColor: React.MouseEventHandler<HTMLButtonElement>
}

export const ColorSwitch: React.FC<ColorSwitchProps> = (
  props
) => {
  return (
    <button onClick={props.onChangeColor}>
      Change color
    </button>
  );
}
