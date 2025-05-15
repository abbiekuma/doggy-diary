import React from "react";
import Calendar from "../components/Calendar";

const HomePage = () => {
  const handleDateSelect = (selectedDate) => {
    console.log("Choicen date:", selectedDate);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary">
      <h1 className="text-2xl font-bold text-mainT2d">
        Welcome to Doggy Diary!
      </h1>
      <Calendar onDateSelect={handleDateSelect} />
    </div>
  );
};

export default HomePage;
