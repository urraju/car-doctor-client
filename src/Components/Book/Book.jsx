import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../ManageAuth/UseAuth";
import toast, { Toaster } from 'react-hot-toast';
const Book = () => {
  const data = useLoaderData();
  const { user } = UseAuth();
  const { _id, price, title, img, service_id } = data;

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const message = form.message.value;
    const order = {
      customerName: name,
      email,
      price : price,
      date,
      message,
      service : title,
      img,
      service_id : _id,
    };
    console.log(order);
    fetch('http://localhost:5000/booking',{
        method : "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(order)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            toast.success('Data Added Successfull')
        }
    })
  };
  return (
    <div className="w-full md:max-w-7xl flex items-center justify-center mx-auto ">
      <div className="border md:w-1/2 font-hebo p-10">
        <h1 className="text-center font-semibold text-3xl">Add Service</h1>
        <div className="mt-8   w-full">
          <form className=" grid gap-x-6" onSubmit={handleBook}>
            <div className="">
              <label htmlFor="">
                <input
                  className=" mb-3 outline-none px-3 py-2 rounded mt-2 border w-1/2 "
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                />
              </label>
              <label htmlFor="">
                <input
                  className="  outline-none px-3 py-2 rounded mt-2 border w-1/2"
                  type="date"
                  name="date"
                  id=""
                  placeholder="Your Email"
                />
              </label>
              <label htmlFor="">
                <input
                  className="  mb-3 outline-none px-3 py-2 rounded mt-2 border w-1/2 "
                  type="email"
                  name="email"
                  id=""
                  defaultValue={user?.email}
                  placeholder="Your Email"
                />
              </label>
              <label htmlFor="">
                <input
                  className=" mb-3 outline-none px-3 py-2 rounded mt-2 border  w-1/2"
                  type="text"
                  name="price"
                  id=""
                  placeholder="Your Price"
                  defaultValue={price}
                />
              </label>
              <label htmlFor="">
                <textarea
                  className="  mb-3 outline-none px-3 py-2 rounded mt-2 border w-full"
                  placeholder="Type Message"
                  name="message"
                  id=""
                  cols=""
                  rows="4"
                ></textarea>
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#FF3811] text-white w-full py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
