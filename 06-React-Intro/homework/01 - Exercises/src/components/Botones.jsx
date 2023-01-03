import React from "react";

export default class Botones extends React.Component{
    render(){
        //console.log(react);
       //console.log(this.props);
       const alerts = this.props.alerts;
       //console.log(alerta);
        return(
        <div>
            <button onClick={()=> alert(alerts.m1)}>Módulo 1</button>
            <button onClick={()=> alert(alerts.m2)}>Módulo 2</button>
        </div>
        );
    }
}
