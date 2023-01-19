import "./App.css";
import { LoadingCowardly } from "./components/atoms";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center background-layer">
      <div className="flex justify-center flex-col items-center bg-background p-3 border border-1 border-yellow rounded-lg opacity-90">
        <LoadingCowardly />
        <p className="App-link">Website is under construction</p>
      </div>
    </div>
  );
}
export default App;
