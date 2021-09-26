import { useState } from 'react'
import fiplyServer from '../api/fiplyServer'

const useProfile = () => {

    const [profile, setProfile] = useState({})
    const [skills, setSkills] = useState({})
    const [educationalBG, setEducationalBG] = useState({})
    const [experiences, setExperiences] = useState({})

    const getMyInfos = async () => {
        await fiplyServer.get('/me')
            .then(response => {
                setProfile(response.data.data.profile)
                setSkills(response.data.data.skills)
                setEducationalBG(response.data.data.educational_background)
                setExperiences(response.data.data.experiences)
            })
            .catch(err => {
                console.log(err.response);
            })
    }


    return [getMyInfos ,profile, skills, educationalBG, experiences]
}

export default useProfile

