import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ContextAPIProvider } from "./context/contextAPI";

const App = () => {
  return (
    <>
      <ContextAPIProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </ContextAPIProvider>
    </>
  );
};

export default App;