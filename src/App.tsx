import { BrowserRouter } from "react-router-dom";
import Routers from "./config/routers";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}
export default App;
