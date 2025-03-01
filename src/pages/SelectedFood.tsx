import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { dateInformation } from "../store";

const foods = ["Pizza 🍕", "寿司 🍣", "焼肉 🥓", "スパゲッティ 🍝"];

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

export default function SelectFood() {
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedFood === null) {
      alert("お気に入りの料理を選択してください");
      return;
    }

    dateInformation("selectedFood", selectedFood);

    navigate("/drink");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>お気に入りの料理をお選びしてね。 🍽️</h2>
      <CenterClass>
        {foods.map((food, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedFood(food)}
            style={{
              maxWidth: "200px",
              cursor: "pointer",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
              background: selectedFood === food ? "#ff7eb3" : "#f0f0f0",
              color: selectedFood === food ? "#fff" : "black",
            }}
          >
            {food}
          </motion.div>
        ))}
      </CenterClass>
      <Button onClick={handleNext} disabled={!selectedFood}>
        次へ ➡️
      </Button>
    </div>
  );
}
