import React,{useContext} from 'react'
import alertContext from '../context/alerts/alertContext';

export default function Alert() {
    const alert_available = useContext(alertContext);
    const {alert}=alert_available;

    return (
        <div style={{height : "50px"}}>
            { alert && <div className={`alert alert-${alert.theme} alert-dismissible fadeshow`} style={{marginTop:"60px"}} role="alert">{alert.message}</div>}
        </div>
    )
}
