import React from "react";
import Swal from "sweetalert2";

const AddCoffeee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const defails = form.defails.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      photo,
      defails,
      category,
      taste,
      supplier,
      quantity,
    };
    fetch("https://coffee-store-server-six-blond.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successcully!",
            text: "Coffee Added",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      <div className="max-w-4xl my-auto mt-10 mx-auto bg-[#F4F3F0] py-14 px-24 rounded-sm">
        <h2
          style={{ textShadow: "0px 1px 5px #374151" }}
          className="text-3xl text-center  font-rancho  mb-8"
        >
          Add New Coffee
        </h2>
        <p className="text-base text-center  mb-8 text-[#1B1A1AB2]">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee} className="w-full" action="">
          {/* Coffee name */}
          <div className="flex mb-5 md:flex-row gap-6">
            <div className="flex w-full border-none flex-col gap-4">
              <label
                htmlFor="name"
                className="text-lg font-semibold leading-7 text-[#1B1A1ACC]"
              >
                Name
              </label>
              <input
                className="px-3 py-2 rounded-sm bg-white outline-none"
                id="name"
                name="name"
                type="text"
                placeholder="Enter coffee name"
              />
            </div>
            <div className="flex w-full border-none flex-col gap-4">
              <label
                htmlFor="quantity"
                className="text-lg font-semibold leading-7 text-[#1B1A1ACC]"
              >
                Quantity
              </label>
              <input
                className="px-3 py-2 rounded-sm bg-white outline-none"
                id="quantity"
                name="quantity"
                type="text"
                placeholder="Enter coffee chef"
              />
            </div>
          </div>
          {/* Supplier name */}
          <div className="flex mb-5 md:flex-row gap-6">
            <div className="flex w-full border-none flex-col gap-4">
              <label
                htmlFor="supplier"
                className="text-lg font-semibold leading-7 text-[#1B1A1ACC]"
              >
                Supplier
              </label>
              <input
                className="px-3 py-2 rounded-sm bg-white outline-none outline-none"
                id="supplier"
                name="supplier"
                type="text"
                placeholder="Enter coffee supplier"
              />
            </div>
            <div className="flex w-full border-none flex-col gap-4">
              <label
                htmlFor="taste"
                className="text-lg font-semibold leading-7 text-[#1B1A1ACC]"
              >
                Taste
              </label>
              <input
                className="px-3 py-2 rounded-sm bg-white outline-none"
                id="taste"
                name="taste"
                type="text"
                placeholder="Enter coffee taste"
              />
            </div>
          </div>
          {/* Category name */}
          <div className="flex mb-5 md:flex-row gap-6">
            <div className="flex w-full border-none flex-col gap-4">
              <label
                htmlFor="category"
                className="text-lg font-semibold leading-7 text-[#1B1A1ACC]"
              >
                Category
              </label>
              <input
                className="px-3 py-2 rounded-sm bg-white outline-none"
                id="category"
                name="category"
                type="text"
                placeholder="Enter coffee category"
              />
            </div>
            <div className="flex w-full border-none flex-col gap-4">
              <label
                htmlFor="defails"
                className="text-lg font-semibold leading-7 text-[#1B1A1ACC]"
              >
                Details
              </label>
              <input
                className="px-3 py-2 rounded-sm bg-white outline-none"
                id="defails"
                name="defails"
                type="text"
                placeholder="Enter coffee details"
              />
            </div>
          </div>
          {/* Photo URL */}
          <div className="flex mb-5 md:flex-row gap-6">
            <div className="flex w-full border-none flex-col gap-4">
              <label
                htmlFor="photo"
                className="text-lg font-semibold leading-7 text-[#1B1A1ACC]"
              >
                Photo
              </label>
              <input
                className="px-3 py-2 rounded-sm bg-white outline-none"
                id="photo"
                name="photo"
                type="text"
                placeholder="Enter photo URL"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Add Coffee"
            className="font-rancho text-lg border w-full py-2 bg-[#D2B48C]  cursor-pointer border-[#331A15]"
          />
        </form>
      </div>
    </>
  );
};

export default AddCoffeee;
