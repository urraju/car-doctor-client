
import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import ServiceCard from '../ServiceCard/ServiceCard'
import Info from '../UserInfo/Info'
import Team from '../TeamSection/Team'
import TeamSupport from '../TeamSupport/TeamSupport'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div className='p-5 md:p-8'>
            <Banner/>  
            <About/>
            <ServiceCard/>
            <Info/>
            <Team/>
            <TeamSupport/>
             
        </div>
    )
}

export default Home