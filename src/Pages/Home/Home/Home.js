import React from 'react';
import AppointmentBanner from '../../AppoinmentBanner/AppointmentBanner';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;