import { LoadingCowardly } from "../../components/atoms";
import Header from "./render/Header";
import TechStack from "./render/TechStack";

function HomePage() {
  return (
    <div className="h-auto">
      <Header />
      <TechStack />

      <div className="border border-info flex justify-center items-center mx-40 gap-y-10 flex-col mb-10 bg-background bg-opacity-70 rounded-lg mt-32">
        <LoadingCowardly />
        <div className="text-rainbow mb-10 text-3xl">Website is under construction</div>
      </div>
    </div>
  );
}

export default HomePage;
