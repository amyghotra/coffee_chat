import React from 'react'
import ProScheduledMeetings from './ProScheduledMeetings'
import ProfessionalInfo from './ProInfo'
import NavBar from '../../components/navbar/index'
// import {useHistory} from 'react-router-dom'

export default function ProfessionalProfile(props){ 
    console.log(props.location.state.obj)
    const { name, email, social } = props.location.state.obj.userInfo
    const { experience } = props.location.state.obj.professionalInfo
    const { company } = props.location.state.obj.company
    const { position } = props.location.state.obj.role

    console.log(props.location.state.obj.role)
    
    // const history = useHistory()
    // const [isAuthenticated, setIsAuthenticated] = useState(false)

    // useEffect(() => {
    //     if(props.location.state.isAuth !== 'undefined') {
    //         setIsAuthenticated(props.location.state.isAuth)
    //     } else {
    //         // setIsAuthenticated(false)
    //         history.push('/sign-in')
    //     }
    // }, [])

    return(
        <>
            <NavBar />
            <ProfessionalInfo name={name} company={company} role={position} social={social} email={email} yearsExperience={experience} />
            <div style={{display:"flex", flexDirection:"row"}}>
                <ProScheduledMeetings />
            </div>
        </>
    )
}
