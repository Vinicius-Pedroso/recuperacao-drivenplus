import Screen1 from "./Functions/Screen1";
import Screen2 from "./Functions/Screen2";
import Screen3 from "./Functions/Screen3";
import Screen4 from "./Functions/Screen4";
import { useState } from "react";
import Confirmation from "./Functions/Confirmation";
import ScreenHome from "./Functions/ScreenHome";

export default function App (){
    const [Screen, setScreen]= useState(1);
    const [Confirm, setConfirm]= useState(false);
    return (
        <>
        {Screen == 1 && <Screen1 setScreen={setScreen}/>}
        {Screen == 2 && <Screen2 setScreen={setScreen}/>}
        {Screen == 3 && <Screen3 setScreen={setScreen}/>}
        {Screen == 4 && <Screen4 setConfirm={setConfirm}/>}
        {Confirm == true && <Confirmation setConfirm={setConfirm} setScreen={setScreen}/>}
        {Screen == 5 && <ScreenHome/>}
        </>
    );
}
