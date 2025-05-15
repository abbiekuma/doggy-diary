import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ToDoList from "../components/TodoList";

const DailyEntry = () => {
  const location = useLocation();
  const selectedDate = location.state?.selectedDate;
  const todayDate = new Date(selectedDate).toDateString;

  const [diary, setDiary] = useState("");

  //Upload photo
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col p-8 min-h-screen items-center">
      <div className="font-primary flex flex-col items-center mb-4 bg-mainTl p-1 rounded-xl">
        {" "}
        <h1 className="text-lg font-bold text-mainT2d">
          Write down the day of your doggy here!
        </h1>
        <h2 className="text-mainT2">
          Date: {new Date(selectedDate).toDateString()}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-y-2 gap-x-4 w-full max-w-4xl">
        <hr className="border-t-2 border-mainTl mt-2" />
        <h1 className="text-lg underline decoration-mainTl text-left self-center font-primary pb-1 text-mainT">
          Add a photo:
        </h1>
        <label className="w-64 mx-auto text-center font-primary rounded-xl border-4 border-mainT2 p-1 px-2 mb-1 bg-mainT2d text-mainTl cursor-pointer hover:bg-mainTl hover:text-mainT2d">
          {" "}
          choose the pic of the day{" "}
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>
        {selectedPhoto && (
          <div className="mt-2">
            <h2 className="text-left self-center font-primary pb-2 text-mainT2">
              * Uploaded photo
            </h2>
            <img
              src={selectedPhoto}
              className=" rounded-lg"
              alt="Uploaded Photo"
            />
          </div>
        )}
        <hr className="border-t-2 border-mainTl mt-2" />
        <h1 className="text-lg mt-4  text-left self-center font-primary pb-2 text-mainT">
          Write down your baby's diary:
        </h1>{" "}
        <textarea
          type="text"
          id="diary"
          value={diary}
          onChange={(e) => setDiary(e.target.value)}
          placeholder="Let's write down your baby's day!!"
          className="p-2 pb-10 w-72 mx-auto rounded-xl mb-4 border-4 border-mainT2d bg-mainT2 text-mainTl placeholder-mainTl font-secondary font-bold"
        />
        <hr className="border-t-2 border-mainTl mt-2" />
      </div>

      <ToDoList />
      <button className="mt-4 font-primary rounded-xl border-4 border-mainT2 p-1 px-2 mb-1 bg-mainT2d text-mainTl cursor-pointer hover:bg-mainTl hover:text-mainT2d">
        Save
      </button>
    </div>
  );
};

export default DailyEntry;
