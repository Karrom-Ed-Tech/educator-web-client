import { useState } from "react";
import RegistrationInput from "../../RegisterPage/components/RegistrationInput";

interface Timing {
  day: string;
  startTime: string;
  endTime: string;
}

const data: Timing[] = [
  {
    day: "Monday",
    startTime: "10:00PM",
    endTime: "11:00PM",
  },
  {
    day: "Tuesday",
    startTime: "10:00PM",
    endTime: "11:00PM",
  },
  {
    day: "Wednesday",
    startTime: "10:00PM",
    endTime: "11:00PM",
  },
  {
    day: "Thursday",
    startTime: "10:00PM",
    endTime: "11:00PM",
  },
  {
    day: "Friday",
    startTime: "10:00PM",
    endTime: "11:00PM",
  },
  {
    day: "Saturday",
    startTime: "10:00PM",
    endTime: "11:00PM",
  },
  {
    day: "Sunday",
    startTime: "10:00PM",
    endTime: "11:00PM",
  },
];
const constraints = {
  pattern: "\\b(?:[01]\\d|2[0-3]):[0-5]\\d\\b",
};

export default function AddTeacherSchedule() {
  const [schedule, setSchedule] = useState<Timing[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [error, setError] = useState<Boolean>(false);

  const handleAddTiming = () => {
    setError(false);
    if(!selectedDay || !selectedStartTime || !selectedEndTime){
      setError(true);
      return;
    };
      const existingDayIndex = schedule.findIndex((timing) => timing.day === selectedDay);
      if (existingDayIndex >= 0) {
        const updatedSchedule = [...schedule];
        updatedSchedule[existingDayIndex] = {
          day: selectedDay,
          startTime: selectedStartTime,
          endTime: selectedEndTime,
        };
        setSchedule(updatedSchedule);
      } else {
        const newTiming: Timing = {
          day: selectedDay,
          startTime: selectedStartTime,
          endTime: selectedEndTime,
        };
        setSchedule((prevSchedule) => [...prevSchedule, newTiming]);
      }
  };

  const handleRemoveTiming = (day: string) => {
    const updatedSchedule = schedule.filter((timing) => timing.day !== day);
    setSchedule(updatedSchedule);
  };

  const handleDropdownChange = (selectedValue: string) => {
    setSelectedDay(selectedValue);
  };


  return (
    <div>
      <RegistrationInput
        name="day"
        type="dropdown"
        title="Schedule : Select a day"
        placeholder="Select from the below dropdown"
        dropdown={[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ]}
        value={selectedDay}
        onSelectionChange={handleDropdownChange}
      />
      <div>
        <RegistrationInput
          name="startTime"
          title="Start time"
          placeholder="Enter start time for the given date eg: 07:00 , 18:00"
          value={selectedStartTime}
          onChange={(e) => setSelectedStartTime(e.target.value)}
          constraints={constraints}
          lengthHalf={true}
        />
        <RegistrationInput
          name="endTime"
          title="End time"
          placeholder="Enter end time for the given date eg: 07:00 , 18:00"
          value={selectedEndTime}
          onChange={(e) => setSelectedEndTime(e.target.value)}
          constraints={constraints}
          lengthHalf={true}
        />
      </div>
      <button
        onClick={handleAddTiming}
        className="my-5 px-3 py-2 bg-front text-back rounded-lg"
      >
        Add Timing
      </button>
      {
        error && 
        <span className="ml-5 text-red-400">*Enter all the details for the schedule</span>
      }
      <div>
        {schedule.map((timing, index) => (
          <div key={index}>
            <strong>{timing.day}</strong>:
            {` ${timing.startTime} - ${timing.endTime}`}
          </div>
        ))}
      </div>
    </div>
  );
}
