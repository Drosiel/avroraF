import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { addUserData } from "./features/user/userSlice";
import PublicLayout from "./layouts/public/public";
import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";
import ProfilePage from "./pages/profilePage";
import TeamPage from "./pages/teamPage";
import TournamentPage from "./pages/tournamentPage";
import { fetchIsValidToken } from "./services/auth/auth";
import { getCookie } from "./services/cookies";

function App() {
  const value = `; ${document.cookie}`;
  const token: any = getCookie("token", value);
  const dispatch = useDispatch();

  if (token) {
    fetchIsValidToken(token).then((data) => dispatch(addUserData(data)));
  }

  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tournament" element={<MainPage />} />
        <Route path="/tournament/:tournamentId" element={<TournamentPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Route>

      <Route path="/profile">
        <Route index element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
