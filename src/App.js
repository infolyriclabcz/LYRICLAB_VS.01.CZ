import { useState } from "react";
import BootScreen from "./components/BootScreen/BootScreen";

function App() {
  const [entered, setEntered] = useState(
    localStorage.getItem("enteredLab") === "true"
  );

  if (!entered) {
    return <BootScreen onEnter={() => setEntered(true)} />;
  }

  return (
    <div>
      {/* SEM POZDĚJI PŘIJDE HOME / NAVBAR / ROUTES */}
      HOME PAGE
    </div>
  );
}

export default App;
