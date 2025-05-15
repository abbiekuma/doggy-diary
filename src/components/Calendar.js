//Components/Calendar.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calendar({ onDateSelect }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // Complete date
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //get the number of days per month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  //get the day of the week for the first day of the current month
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDate();
  };
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  // Month Change
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // if it's Jan make it last year Dec
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // if it's Dec, make it next year Jan
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };
  const navigate = useNavigate();
  const handleDateClick = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(day);
    if (onDateSelect) {
      onDateSelect(date); // pass the seleted complete date
    }
    navigate("/daily", { state: { selectedDate: date } });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Header: Month Change */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-3 py-1 bg-mainT2 rounded hover:bg-mainT2d mr-2 text-mainBg"
          onClick={handlePrevMonth}
        >
          Last Month
        </button>
        <div className="text-xl font-bold text-mainT">
          {currentYear} - {currentMonth + 1}
        </div>
        <button
          className="px-3 py-1 ml-2 bg-mainTl text-mainT2d rounded hover:bg-mainT hover:text-mainTl"
          onClick={handleNextMonth}
        >
          Next Month
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-2 text-center font-medium text-mainT2d">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 text-center mt-2">
        {Array(firstDay)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}

        {/* Show the date */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`rounded-lg p-2 cursor-pointer bg-mainTl  ${
              selectedDate === day
                ? "bg-blue-500 text-white"
                : "hover:bg-mainT hover:text-mainTl"
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
