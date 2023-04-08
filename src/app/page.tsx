"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter()
  const [name,setName]=useState("")
  const handleClick = (name: string) => {
    router.push(`/${name}`);
  };
  
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full flex flex-wrap justify-center items-center border-red-500 gap-3">
        <Card
          title="No Messages"
          desc="When you have messages you’ll see them here"
          buttonText="Go back"
          image="/images/next-component.png"
          handleClick={handleClick}
        />
        <Card
          title="No Favourites"
          desc="You can add an item to your favourites by clicking “Star Icon”"
          buttonText="Go back"
          image="/images/next-component-1.png"
          handleClick={handleClick}
        />
        <Card
          title="Lost Connection"
          desc="Whoops, no internet connection found. Please check your connection"
          buttonText="Try Again"
          image="/images/next-component-2.png"
          handleClick={handleClick}
        />
        <Card
          title="Result Not Found"
          desc="Please try again with another keywords or maybe use generic term"
          buttonText="Search Again"
          image="/images/next-component-3.png"
          handleClick={handleClick}
        />
        <Card
          title="No Address Yet"
          desc="Please add your address for your better experience"
          buttonText="Add Address"
          image="/images/next-component-4.png"
          handleClick={handleClick}
        />
        <Card
          title="Page Not Found"
          desc="Sorry, the page you’re looking for can’t be found"
          buttonText="Go back"
          image="/images/next-component-5.png"
          handleClick={handleClick}
        />
        <Card
          title="Your Cart is Empty"
          desc="Looks like you haven’t added anything to your cart yet"
          buttonText="Go Shop"
          image="/images/next-component-6.png"
          handleClick={handleClick}
        />
        <Card
          title="No Notifications Yet"
          desc="When you get notifications, they’ll show up here"
          buttonText="Refresh"
          image="/images/next-component-7.png"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};
export default Home;
