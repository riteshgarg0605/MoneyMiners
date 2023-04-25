import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import LoginPage from "./components/common/login/LoginPage";
import Profile from "./login_info/Profile";
import TradingView from "./components/Widget/Trading-View";
import MinersCoin from "./components/MinersCoins/MinersCoins";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/journal" component={Blog} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/Trading-View" component={TradingView} />
          <Route exact path="/Miner's Coin" component={MinersCoin} />
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/submit" component={Profile}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
