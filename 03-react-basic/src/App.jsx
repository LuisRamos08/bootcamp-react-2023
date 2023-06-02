import "./App.css";
import { CustomCard } from "./CustomCard";

function App() {
  return (
    <div>
      <CustomCard cardText="Texto 1" buttonLabel="Click Me!" />
      <CustomCard cardText="Texto 2" buttonLabel="Ver Más" />
      <CustomCard cardText="Texto 3" buttonLabel="Show Info" />
    </div>
  );
}

export default App;
