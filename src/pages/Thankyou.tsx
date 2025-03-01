import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: "center" }}
    >
      <h2>同意していただきありがとうね! 🎉</h2>
      <p>当日お会いしましょうね! ❤️</p>
      <motion.img
        layout="position"
        src="/thankyou.gif"
        alt="Thank you"
      ></motion.img>
    </motion.div>
  );
}
