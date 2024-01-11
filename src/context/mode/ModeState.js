import { useState } from "react";
import ModeContext from "./ModeContext";

const ModeState = (props) => {

    const [mode, setMode] = useState("dark");

    function toggleMode (){
        if(mode === "light"){
            setMode("dark");
        }else{
            setMode("light");
        }
    }

    return (
        <ModeContext.Provider value={{mode, toggleMode}}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeState;