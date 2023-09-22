import React from 'react';
import { InfoSection} from '../../components';
import { homeObjOne, homeObjThree} from './Data';
import Technologies from '../../components/Technologies'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <Technologies></Technologies>
        </>
    )
}

export default Home;