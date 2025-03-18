import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import ChatPage from "./pages/ChatPage/";

function App(): any {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat/" element={<ChatPage />} />
        <Route path="/chat/:roomId" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
