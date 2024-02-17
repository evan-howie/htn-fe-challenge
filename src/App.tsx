import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { AuthProvider } from "./contexts/AuthContext";
import EventPage from "./routes/EventPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/event/:id" element={<EventPage />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
