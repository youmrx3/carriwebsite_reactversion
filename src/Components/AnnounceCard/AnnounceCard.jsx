import React from 'react';
import backgroundImage from '../../Ressources/background.jpg';

//<AnounceCard name="gg" , now you can do props.name to acess it
export default function AnnounceCard(props){

    return(
        <div className="card" style="width: 18rem;">
  <img className="card-img-top" src={backgroundImage} alt=""/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
    )
}