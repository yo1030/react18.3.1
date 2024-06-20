import React  from "react";

interface ColorSwitchProps {
  onChangeColor: React.MouseEventHandler<HTMLButtonElement>
}

export const ColorSwitch: React.FC<ColorSwitchProps> = (
  props
) => {
  return (
    <div>
      <button onClick={props.onChangeColor}>
        Change color
      </button>
    </div>
  );
}
