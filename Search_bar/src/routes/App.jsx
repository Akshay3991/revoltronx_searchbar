import { Outlet } from "react-router-dom";
import Permanents from "../components/Permanents";
function App() {
  return (
    <div>
      <Permanents />
      <Outlet />
    </div>
  );
}

export default App;
