import { Navigate, Route, Routes } from "react-router-dom";
import { BlankLayout, MainLayout } from "../../layout";
import { HomePage, MaintenancePage } from "../../pages";

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/maintenance" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/maintenance" replace />} />
      </Route>
      <Route path="/maintenance" element={<BlankLayout />}>
        <Route index element={<MaintenancePage />} />
      </Route>
    </Routes>
  );
}

export default Routers;
