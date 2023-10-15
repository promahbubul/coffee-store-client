import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, photo, defails, category, taste, supplier, quantity } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-six-blond.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remaining = coffees.filter((cof) => cof._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };

  return (
    <>
      <div className=" flex flex-row rounded-lg align-middle gap-6 p-7 bg-[#F5F4F1] ">
        <figure className="  justify-start">
          <img className="rounded-md  w-48" src={photo} alt="Movie" />
        </figure>
        <div className=" flex  justify-between  w-full flex-row">
          <div className="flex justify-center flex-col">
            <h2 className="card-title">
              Name: <span className="text-base font-normal">{name}</span>
            </h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="flex gap-1 flex-col">
            <button className="btn bg-[#D2B48C] hover:bg-orange-300 btn-active">
              <AiFillEye className="text-2xl  text-white "></AiFillEye>
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn bg-[#3C393B] hover:bg-gray-800">
                <BiSolidPencil className="text-2xl  text-white "></BiSolidPencil>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-[#EA4744] hover:bg-red-700"
            >
              <MdDelete className="text-2xl  text-white "></MdDelete>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
