import React from 'react';
import firebaseIcon from 'assets/icons/firebase.svg';

export const FirebaseLink = (props) => {
	
	if(!props.hostingLink){
		//if link is null return nothing
		return null;
	} else {
		return(
			<div className="firebaseLink">
		        <a href={props.hostingLink}>
		            <img className="livelink" src={firebaseIcon} alt="live firebase link" />
		        </a>
		    </div>
		);
	}
}