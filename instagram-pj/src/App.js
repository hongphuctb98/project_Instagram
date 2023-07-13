import LoginPage from "./pages/LoginPage/LoginPage";

import Layout from "./pages/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ReelsPage from "./pages/ReelsPages/ReelsPage";
import ProfilePages from "./pages/ProfilePages/ProfilePages";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import { useEffect, useState } from "react";

function App() {
  const [userLogin, setUserLogin] = useState();

  useEffect(() => {
    setUserLogin(
      JSON.parse(localStorage.getItem("userLogin")) > 0 ? true : false
    );
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            userLogin ? (
              <Navigate to="/" />
            ) : (
              <LoginPage setUserLogin={setUserLogin} />
            )
          }
        ></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            userLogin ? (
              <Layout setUserLogin={setUserLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
          // element={<Layout />}
        >
          <Route index element={<HomePage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/profile" element={<ProfilePages />} />
          <Route path="/profile/:id" element={<ProfilePages />} />

          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
