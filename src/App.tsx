import { BrowserRouter } from "react-router-dom";
import Routers from "./config/routers";
import './App.scss';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}
export default App;
