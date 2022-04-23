import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignupLoginForm from '../../Login/SignUpLoginForm';

export default function CustomPopUp(props){
    return (
        <Popup  trigger={open =>(  
        <div>
        <button  type="button" className=" one btn btn-outline-light rounded-pill"> تسجيل الدخول </button>
        <button  type="button" className=" two btn btn-outline-light rounded-pill"> فتح حساب </button>
        </div>

        )} 
         position="center"  closeOnDocumentClick>
             <SignupLoginForm/>
        </Popup>
    )
}
