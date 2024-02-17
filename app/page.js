import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-center">
          Get the best gadgets at tech{" "}
        </h1>
        <p className="text-center text-xl text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          porro laudantium quaerat labore repellat vitae, impedit quisquam
          veniam minus quas? Excepturi quia, illo possimus placeat hic atque
          saepe ex et!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <Banner />
      </div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-center">Featured Products</h1>
      </div>
      <div className="p-10 flex">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
