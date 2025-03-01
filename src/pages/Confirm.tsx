import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getDateInformation } from "../store";
import styled from "styled-components";

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

export default function Confirm() {
  const navigate = useNavigate();

  const confirmData = getDateInformation();

  if (!confirmData) {
    navigate("/date");
    return null;
  }

  const selectedDate = confirmData?.selectedDate;
  const dateTime = new Date(selectedDate);
  const selectedFood = confirmData?.selectedFood;
  const selectedDrink = confirmData?.selectedDrink;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: "center" }}
    >
      <h2>予約情報 ✅</h2>
      <p>
        日付:{" "}
        {`${dateTime.getFullYear()}年${
          dateTime.getMonth() + 1
        }月${dateTime.getDate()}日`}
      </p>
      <p>料理: {selectedFood}</p>
      <p>ドリンク: {selectedDrink}</p>
      <Button onClick={() => navigate("/thank-you")}>確認✅</Button>
    </motion.div>
  );
}
