import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "@page/auth/Login";
import AuthLayout from "@components/Layouts/AuthLayout";
import FindId from "./pages/auth/FindId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="/findId" element={<FindId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
