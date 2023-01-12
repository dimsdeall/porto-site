import "./App.css";
import { LoadingCowardly } from "./components/atoms";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-background">
      <LoadingCowardly />
      <p className="App-link">Website is under construction</p>
      {/* <Button color=''>Test</Button> */}
    </div>
  );
}

export default App;
