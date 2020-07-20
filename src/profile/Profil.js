import React from 'react';
import PropTypes from "prop-types";
const Profil = (props) => {
    return (
        <div style={props.mystyle}>
        <h2>{props.full_name}</h2>
        <h3>{props.bio}</h3>
        <h3>{props.profession}</h3>
        <button onClick={()=>props.fon(props.full_name)}>Alert</button>
        </div>
        )
}
Profil.defaultProps={
    full_name:"GO",
    bio:"MY", 
    profession:"CODE"

}
Profil.propTypes={
    full_name:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
}

export default Profil;