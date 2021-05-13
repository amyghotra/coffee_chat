import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import PublicProMeetingSelection from './PublicProMeetingSelection'
import PublicProInfo from './PublicProInfo'
import NavBar from '../../../../components/navbar/index.jsx'
import UserContext from '../../../../contexts/users';
import { GetProfessionalInfo } from '../../../../services/professional';

const ProfessionalPublicView = () => {
	const { selectedProfessional } = useContext(UserContext);

	const [ professionalInfo, setProfessionalInfo] = useState([]);

	useEffect(async () => {
		try {
			const dbProfessionalInfo = await GetProfessionalInfo(selectedProfessional);
			console.log('db', dbProfessionalInfo)
			setProfessionalInfo(dbProfessionalInfo);
		} catch (error) {
		}
		
	}, [selectedProfessional])

	// Checks to see if selectedProfessional was valid if not redirect
	if (!selectedProfessional) {
		return <Redirect to='/schedule' />;
	}

	return (
	  <>
	    <NavBar />
			{
				professionalInfo ? 
					<div id="pro_public_container">
						<PublicProInfo professionalInfo={professionalInfo} />
						<PublicProMeetingSelection professionalInfo={professionalInfo} />
					</div> 
					: 
					<></>
			}
	  </>
  );  
}

export default ProfessionalPublicView