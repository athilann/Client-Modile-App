//import Components from "../views/Components/Components.jsx";
//import LandingPage from "../views/LandingPage/LandingPage.jsx";
//import ProfilePage from "../views/ProfilePage/ProfilePage.jsx";
import LoginPage from "../views/LoginPage/LoginPage.jsx";
import App from "../main/app";

var indexRoutes = [
 // { path: "/landing-page", name: "LandingPage", component: LandingPage },
 // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/app", name: "APP", component: App },
  { path: "/", name: "LoginPage", component: LoginPage }
];

export default indexRoutes;