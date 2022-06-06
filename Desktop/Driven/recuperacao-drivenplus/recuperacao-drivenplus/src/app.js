import Screen1 from "./Functions/Screen1";
import Screen2 from "./Functions/Screen2";
import Screen3 from "./Functions/Screen3";
import Screen4 from "./Functions/Screen4";
import { useState } from "react";

export default function App (){
    const [Screen, setScreen]= useState(3);
    return (
        <>
        {Screen == 1 && <Screen1 Screen={Screen} setScreen={setScreen}/>}
        {Screen == 2 && <Screen2 Screen={Screen} setScreen={setScreen}/>}
        {Screen == 3 && <Screen3 Screen={Screen} setScreen={setScreen}/>}
        {Screen == 4 && <Screen4 Screen={Screen} setScreen={setScreen}/>}
        </>
    );
}














































