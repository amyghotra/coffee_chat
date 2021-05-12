import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import PublicProMeetingSelection from './PublicProMeetingSelection'
import PublicProInfo from './PublicProInfo'
import NavBar from '../../../../components/navbar/index.jsx'
import UserContext from '../../../../contexts/users';
import { GetProfessionalInfo } from '../../../../services/professional';

const ProfessionalPublicView = () => {
	const { selectedProfessional } = useContext(UserContext);

	const [ professionalInfo, setProfessionalInfo] = useState();

	useEffect(async () => {
		try {
			const dbProfessionalInfo = await GetProfessionalInfo(selectedProfessional);
			setProfessionalInfo(dbProfessionalInfo.data);
		} catch (error) {
		}
		
	}, [selectedProfessional])


	return (
	  <>
			{/* Checks to see if selectedProfessional was valid if not redirect */}
			{!selectedProfessional ? <Redirect to="/schedule" /> : <></>}
			{console.log(professionalInfo)}
	    <NavBar />
	    <div id="pro_public_container">
	      <PublicProInfo />
	      <PublicProMeetingSelection />
	    </div>
	  </>
  );  
}

export default ProfessionalPublicView