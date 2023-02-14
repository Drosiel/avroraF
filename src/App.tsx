import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { addTeamData } from "./redux/slices/teams/teamSlice";

import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";
import ProfilePage from "./pages/profilePage";
import TournamentByIdPage from "./pages/tournamentByIdPage";
import TournamentPage from "./pages/tournamentPage";
import { useEffect } from "react";
import { fetchIsValidToken } from "./services/auth/auth";
import { getCookie } from "./services/cookies";
import { fetchAllTeam } from "./services/team/team";
import { fetchAllTournament } from "./services/tournament/tournament";
import TeamByIdPage from "./pages/teamByIdPage";
import { addUserData } from "./redux/slices/user/userSlice";
import { addTournamentData } from "./redux/slices/tournaments/tournamentSlice";
import UserPage from "./pages/userPage";
import SearchPage from "./pages/searchPage";
import AdminPage from "./pages/adminPage";
import PublicLayout from "./layouts/publicLayouts/publicLayouts";
import NewsPage from "./pages/newsPage";
import NewsByIdPage from "./pages/newsByIdPage";

function App() {
  const value = `; ${document.cookie}`;
  const token: any = getCookie("token", value);
  const dispatch = useDispatch();

  if (token) {
    fetchIsValidToken(token).then((data) => dispatch(addUserData(data)));
  }

  useEffect(() => {
    fetchAllTournament(token).then((data) => dispatch(addTournamentData(data)));
    fetchAllTeam().then((data) => dispatch(addTeamData(data)));
  }, [dispatch, token]);

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

        <Route path="/:userId" element={<UserPage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/team/:teamId" element={<TeamByIdPage />} />

        <Route path="/faq" element={<MainPage />} />

        <Route path="/about" element={<MainPage />} />

        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:newsId" element={<NewsByIdPage />} />

        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="/profile">
        <Route index element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
