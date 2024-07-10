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
import { CanvasImmer } from "./CanvasImmer";
import { ShoppingCartAdd } from "./ShoppingCartAdd";
import { ShoppingCartDelete } from "./ShoppingCartDelete";
import { TaskApp } from "./TaskApp";
import { TaskAppImmer } from "./TaskAppImmer";
import { Picture } from "./Picture";
import { EditProfile } from "./EditProfile";
import { EditProfile1 } from "./EditProfile1";
import { Clock } from "./Clock";
import { TravelPlan } from "./TravelPlan";
import MailClient from "./MailClient1";
import MailClient2 from "./MailClient2";
import { SyncedInputs } from "./SyncedInputs";
import { FilterableList } from "./FilterableList";
import { InputText } from "./InputText";
import { SwitchInput } from "./SwitchInput";
import ContactManager from "./ContactManager";
import { Gallery1 } from "./Gallery1";
import { ContactList1 } from "./ContactList1";
import { Messenger } from "./Messenger";
import { Messenger2 } from "./Messenger2";
import Messenger3 from "./Messenger3";
import Messenger4 from "./Messenger4";
import { UserImage } from "./UserImage";
import TaskAppReducer from "./TaskAppReducer";
import Chat from "../escapeHatch/Chat";
import OnOffToggle from "../escapeHatch/OnOffToggle";
import Dashboard from "../escapeHatch/DebouncedButton";
import Chat1 from "../escapeHatch/Chat1";
import CatFriends from "../escapeHatch/CatFriends";
import CustomRefInput from "../escapeHatch/CustomRefInput";
import TodoListFocus from "../escapeHatch/TodoListFocus";
import VideoPlayer from "../escapeHatch/VideoPlayer";
import SearchPage from "../escapeHatch/SearchPage";
import CatFriendsScroll from "../escapeHatch/CatFriendsScroll";
import FocusTextBox from "../escapeHatch/FocusTextBox";
import { ShowForm } from "../escapeHatch/ShowForm";
import Counter from "../escapeHatch/Counter";
import BioPage from "../escapeHatch/BioPage";
import TodoListNoEffect from "../escapeHatch/TodoListNoEffect";
import TodoListCacheResult from "../escapeHatch/TodoListCacheResult";
import ContactManagerNoEffect from "../escapeHatch/ContactManagerNoEffect";
import FormNoEffect from "../escapeHatch/FormNoEffect";
import ChatApp from "../escapeHatch/ChatApp";
import MoveDot from "../escapeHatch/MoveDot";
import MoveDot2 from "../escapeHatch/MoveDot2";
import ChatApp1 from "../escapeHatch/ChatApp1";
import PlanetPage from "../escapeHatch/PlanetPage";
import Timer from "../escapeHatch/Timer";
import Timer1 from "../escapeHatch/Timer1";
import Timer2 from "../escapeHatch/Timer2";
import ChatApp2 from "../escapeHatch/ChatApp2";
import Timer3 from "./Timer3";
import WelcomeMessage from "./WelcomeMessage";
import ChatApp3 from "../escapeHatch/ChatApp3";
import ChatApp4 from "../escapeHatch/ChatApp4";
import CustomCounter from "../escapeHatch/CustomCounter";
import CustomCounterDelay from "../escapeHatch/CustomCounterDelay";
import CustomCounterInterval from "../escapeHatch/CustomCounterInterval";
import CustomCounterIntervalBackground from "../escapeHatch/CustomCounterIntervalBackground";

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
        <CanvasImmer></CanvasImmer>
        <ShoppingCartAdd></ShoppingCartAdd>
        <ShoppingCartDelete></ShoppingCartDelete>
        <TaskApp></TaskApp>
        <TaskAppImmer></TaskAppImmer>
        <Picture></Picture>
        <EditProfile></EditProfile>
        <EditProfile1></EditProfile1>
        <Clock color="rgb(60, 180, 150)" time={new Date()}></Clock>
        <TravelPlan></TravelPlan>
        <MailClient></MailClient>
        <MailClient2></MailClient2>
        <SyncedInputs></SyncedInputs>
        <FilterableList></FilterableList>
        <InputText></InputText>
        <SwitchInput></SwitchInput>
        <ContactManager></ContactManager>
        <Gallery1></Gallery1>
        <ContactList1></ContactList1>
        <Messenger></Messenger>
        <Messenger2></Messenger2>
        <Messenger3></Messenger3>
        <Messenger4></Messenger4>
        <UserImage></UserImage>
        <TaskAppReducer></TaskAppReducer>
        <Chat></Chat>
        <OnOffToggle></OnOffToggle>
        <Dashboard></Dashboard>
        <Chat1></Chat1>
        <CatFriends></CatFriends>
        <CustomRefInput></CustomRefInput>
        <TodoListFocus></TodoListFocus>
        <VideoPlayer></VideoPlayer>
        <SearchPage></SearchPage>
        <CatFriendsScroll></CatFriendsScroll>
        <FocusTextBox></FocusTextBox>
        <ShowForm></ShowForm>
        <Counter></Counter>
        <BioPage></BioPage>
        <TodoListNoEffect></TodoListNoEffect>
        <TodoListCacheResult></TodoListCacheResult>
        <ContactManagerNoEffect></ContactManagerNoEffect>
        <FormNoEffect></FormNoEffect>
        <ChatApp></ChatApp>
        <MoveDot></MoveDot>
        <MoveDot2></MoveDot2>
        <ChatApp1></ChatApp1>
        <PlanetPage></PlanetPage>
        <Timer></Timer>
        <Timer1></Timer1>
        <Timer2></Timer2>
        <ChatApp2></ChatApp2>
        <Timer3></Timer3>
        <WelcomeMessage></WelcomeMessage>
        <ChatApp3></ChatApp3>
        <ChatApp4></ChatApp4>
        <CustomCounter></CustomCounter>
        <CustomCounterDelay></CustomCounterDelay>
        <CustomCounterInterval></CustomCounterInterval>
        <CustomCounterIntervalBackground></CustomCounterIntervalBackground>
      </Masonry>
    </>
  )
}