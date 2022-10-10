import React, { useState } from "react";
import alertContext from "./alertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState(null)
    const showAlert = (type, display) => {
        setAlert({
            theme: type,
            message: display
        })
        // console.log(alert);
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }

    return (
        <alertContext.Provider value={{ alert, showAlert }}>
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;