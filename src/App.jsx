import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import QuestionView from "./pages/QuestionView";
import YesView from "./pages/YesView";

export default function App() {
  const [answer, setAnswer] = useState(null);

  return (
    <AnimatePresence mode="wait">
      {answer === "yes" ? (
        <YesView key="yes" />
      ) : (
        <QuestionView key="question" setAnswer={setAnswer} />
      )}
    </AnimatePresence>
  );
}