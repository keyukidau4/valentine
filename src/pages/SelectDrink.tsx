import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { dateInformation } from "../store";

const drinks = ["タピオカ 🧋", "カクテル 🍸", "カフェ ☕", "ビール 🍺"];

const CenterClass = styled.div`
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

export default function SelectDrink() {
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedDrink === null) {
      alert("お気に入りのドリンクを選択してください");
      return;
    }

    dateInformation("selectedDrink", selectedDrink);

    navigate("/confirm");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>お気に入りのドリンクをお選びしてね。🥤</h2>
      <CenterClass>
        {drinks.map((drink, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedDrink(drink)}
            style={{
              cursor: "pointer",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
              background: selectedDrink === drink ? "#ff7eb3" : "#f0f0f0",
            }}
          >
            {drink}
          </motion.div>
        ))}
      </CenterClass>
      <Button onClick={handleNext} disabled={!selectedDrink}>
        次へ ➡️
      </Button>
    </div>
  );
}
