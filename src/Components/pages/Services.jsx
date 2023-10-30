
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
           <div className='max-w-7xl mx-auto'>
            {data?.map(item => <ServiceCard key={item.id} serviceData={item} />)}
           </div>
        </div>
    )
}

export default Services