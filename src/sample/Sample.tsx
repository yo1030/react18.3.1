import { ColorSwitch } from "./ColorSwitch";
import LightSwitch from "./LightSwitch";

export const Sample = () => {
  let i = 0;
  function handleColorSwitchChange(event: React.MouseEvent<HTMLButtonElement>): void {
    const colors = [
      "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6",
      "#F6FF33", "#FF8333", "#6D33FF", "#FF3364", "#33FF8A"
    ];
    event.currentTarget.style.backgroundColor = colors[i];
    i++;
  }
  return (
    <>
      <LightSwitch></LightSwitch>
      <ColorSwitch onChangeColor={handleColorSwitchChange}></ColorSwitch>
    </>
  )
}