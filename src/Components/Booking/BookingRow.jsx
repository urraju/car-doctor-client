import React from "react";

const BookingRow = ({ booking, handleDelete,handleUpdate }) => {
  const {_id, price, service,email, date, img ,status} = booking;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle  btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className=" rounded-lg w-36 h-36">
                      <img src={img} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold font-hebo text-lg">{service}</div>
                    <p className="font-light text-gray-500">Color : Green</p>
                    <p className="font-light text-gray-500">Size : s</p>
                  </div>
                </div>
              </td>
              <td>
                {
                    status === 'confirm' ? <span className="badge badge-ghost badge-sm">${email}</span> : <span className="badge badge-ghost badge-sm">${price}</span>
                }
              </td>
              <td>{date}</td>
              <th>
               { 
                    status === 'confirm' ?  <button onClick={() => handleUpdate(_id)} className="  text-white btn-xs bg-success px-4  tracking-wider rounded font-semibold font-hebo">
                    Approved
                  </button> :  <button onClick={() => handleUpdate(_id)} className="  text-white btn-xs bg-[#FF3811] px-4  tracking-wider rounded font-semibold font-hebo">
                  Pending
                </button>
               }
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingRow;
