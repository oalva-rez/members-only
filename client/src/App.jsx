import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AllBoards from "./pages/AllBoards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/boards" element={<AllBoards isAdmin={false} />} />
      <Route path="/admin/boards" element={<AllBoards isAdmin={true} />} />
    </Routes>
  );
}

export default App;
