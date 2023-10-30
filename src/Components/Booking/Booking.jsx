import React, { useEffect, useState } from "react";
import UseAuth from "../ManageAuth/UseAuth";
import BookingRow from "./BookingRow";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Booking = () => {
  const { user } = UseAuth();
  const [myData, setMyData] = useState([]);
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyData(data));
    console.log(myData);
  }, [url]);

    // axios.get(url,{ withCredentials : true})
    // .then(res => setMyData(res.data))

    // use ten Query react 
    // const {data,refetch} = useQuery({

    //   queryKey :   ['myProduct'],
    //   queryFn : async () => {
    //    const data = await fetch(url)
    //     return await data.json()
    
    //   }
      
    // })
    
   
    
   

  const handleDelete = (id) => {
     fetch(`http://localhost:5000/booking/${id}`,
       {method : 'DELETE'}
     )
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            toast.success('Deleted Successfull')
            const remaning = myData.filter(booking => booking._id !== id)
            setMyData(remaning)
            // refetch()
        }
     })
  }
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
        method : 'PATCH',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify({status : 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success('Approved Successfully')
            const remaning = myData.filter(update => update._id !== id)
            const findData = myData.find(booking => booking._id === id)
            findData.status = 'confirm'
            const newBooking = [findData, ...remaning]
            setMyData(newBooking)
        }
    })
  }
  return (
    <div className="max-w-7xl mx-auto p-5  md:p-8">
      {myData?.map((item) => (
        <BookingRow key={item._id} booking={item} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      ))}
    </div>
  );
};

export default Booking;
