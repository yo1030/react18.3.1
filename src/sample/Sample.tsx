import Masonry from "react-masonry-css";
import { ColorSwitch } from "./ColorSwitch";
import LightSwitch from "./LightSwitch";
import Gallery from "./Gallery";
import Form1 from "./Form1";
import Feedback1 from "./Feedback1";
import Gree1 from "./Greet1";
import "../pages/Home.css"
import { TrafficLight } from "./TrafficLight";
import { FourTestCase } from "./FourTestCase";
import { ScoreBoard } from "./ScoreBoard";
import { Canvas1 } from "./Canvas1";

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
  const breakpointColumnsObj = {
    default: 4,
    1350: 3,
    1048: 2,
    576: 1
  }
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'>
        <LightSwitch></LightSwitch>
        <ColorSwitch onChangeColor={handleColorSwitchChange}></ColorSwitch>
        <Gallery></Gallery>
        <Form1></Form1>
        <Feedback1></Feedback1>
        <Gree1></Gree1>
        <TrafficLight></TrafficLight>
        <FourTestCase></FourTestCase>
        <ScoreBoard></ScoreBoard>
        <Canvas1></Canvas1>
      </Masonry>
    </>
  )
}