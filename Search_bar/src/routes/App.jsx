import { Outlet } from "react-router-dom";
import Permanents from "../components/Permanents";
import { ApiListProvider } from "../Store/api-list-store";

function App() {
  return (
    <ApiListProvider>
      <div>
        <Permanents />
        <Outlet />
      </div>
    </ApiListProvider>
  );
}

export default App;
