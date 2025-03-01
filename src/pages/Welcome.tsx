import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
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

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        私とデートしませんか? 💖
      </motion.h1>

      <motion.img
        width={300}
        height={300}
        src="/cat1.png"
        alt="cute illustration"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <Button onClick={() => navigate("/date")}>次へ➡️</Button>
    </Container>
  );
}
