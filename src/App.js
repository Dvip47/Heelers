import "./App.css";
import Login from "./Component/Form/Login";
import Registation from "./Component/Form/Registation";
import Index from "./Component/Index";
import { Route, Routes } from "react-router-dom";
import Chat from "./Component/Chat-Call/Chat";
import Home from "./Component/Form/Dynamic Form/Home";

function App() {
  return (
    <>
      <Routes>
        {/* <Route exact path="/login" element={<Login />} /> */}
        {/* <Route exact path="/registation" element={<Registation />} /> */}
        <Route exact path="/" element={<Index />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/call" element={<Chat />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
