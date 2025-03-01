import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import { motion } from "framer-motion";
import SelectDate from "./pages/SelectDate";
import SelectFood from "./pages/SelectedFood";
import SelectDrink from "./pages/SelectDrink";
import Confirm from "./pages/Confirm";
import ThankYou from "./pages/Thankyou";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //  check if DOM element referenced by ref has been mounted
    const handlePointerMove = (event: PointerEvent) => {
      if (ref.current) {
        const element = ref.current;
        // calculate x and y coordinates
        const x = event.clientX + 5;
        const y = event.clientY + 5;
        // update state
        setCoordinates({ x, y });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        className="heart"
        animate={{ x: coordinates.x, y: coordinates.y }}
        transition={{
          type: "spring",
        }}
      />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/date" element={<SelectDate />} />
        <Route path="/food" element={<SelectFood />} />
        <Route path="/drink" element={<SelectDrink />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
