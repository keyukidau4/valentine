import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dateInformation } from "../store";

const CalendarClass = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  background-color: #ff7eb3;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ff4f91;
  }
`;

const minDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

export default function SelectDate() {
  const [date, setDate] = useState(minDate);
  const navigate = useNavigate();

  const handleNext = () => {
    if (date === null) {
      alert("日付を選択してください");
      return;
    }

    dateInformation("selectedDate", date.toString());

    navigate("/food");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h2>デート日を選択💖</h2>
      <CalendarClass>
        <Calendar
          minDate={minDate}
          formatDay={(locale, date) => date.getDate().toString()}
          formatMonth={(locale, date) => date.getMonth().toString()}
          formatYear={(locale, date) => date.getFullYear().toString()}
          onChange={(value) => setDate(value as Date)}
          locale="ja-JP"
          value={date}
        />
      </CalendarClass>
      {date && (
        <p>
          {date.getFullYear()}年{date.getMonth() + 1}月{date.getDate()}日
        </p>
      )}
      <Button onClick={handleNext} style={{ marginTop: "20px" }}>
        次へ➡️
      </Button>
    </motion.div>
  );
}
