import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { addTeamData } from "./features/teams/teamSlice";
import { addTournamentData } from "./features/tournaments/tournamentSlice";
import { addUserData } from "./features/user/userSlice";
import PublicLayout from "./layouts/public/public";
import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";
import ProfilePage from "./pages/profilePage";
import TeamPage from "./pages/teamPage";
import TournamentByIdPage from "./pages/tournamentByIdPage";
import TournamentPage from "./pages/tournamentPage";
import { useEffect } from "react";

import { fetchIsValidToken } from "./services/auth/auth";
import { getCookie } from "./services/cookies";
import { fetchAllTeam } from "./services/team/team";
import { fetchAllTournament } from "./services/tournament/tournament";
import TeamByIdPage from "./pages/teamByIdPage";

function App() {
  const value = `; ${document.cookie}`;
  const token: any = getCookie("token", value);
  const dispatch = useDispatch();

  if (token) {
    fetchIsValidToken(token).then((data) => dispatch(addUserData(data)));
  }

  useEffect(() => {
    fetchAllTournament().then((data) => dispatch(addTournamentData(data)));
    fetchAllTeam().then((data) => dispatch(addTeamData(data)));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tournament" element={<TournamentPage />} />
        <Route
          path="/tournament/:tournamentId"
          element={<TournamentByIdPage />}
        />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:teamId" element={<TeamByIdPage />} />
      </Route>

      <Route path="/profile">
        <Route index element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
