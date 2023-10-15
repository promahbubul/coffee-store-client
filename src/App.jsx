import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className=" m-20">
      <h2 className="text-6xl text-purple-700   ">
        Hot Cold Coffee {coffees.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffe) => (
          <CoffeeCard
            key={coffe._id}
            coffee={coffe}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default App;
