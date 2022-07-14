
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import HistoryPage from "./components/HistoryPage";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home
              skintalkphLogo="/img/skintalkph-logo@2x.png"
              login="Login"
              text1="SkinTalk Philippines"
              text2="TeleDermatology for Private Practice"
              image="/img/dashboard---results-page-1@1x.png"
            />
          </Route>
          <Route path="/:path(|history-page)">
            <HistoryPage
              dashboard="History"
              history="July 6, 2022"
              title="July 5, 2022"
              date1="July 4, 2022"
              date2="July 3, 2022"
              headerProps={historyPageData.headerProps}
              headerProps2={historyPageData.headerProps2}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard {...dashboardData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const headerData = {
    skintalkPhLogo: "/img/skintalk-ph-logo@2x.png",
    dashboard: "Dashboard",
    history: "History",
};

const footer2Data = {
    className: "footer-1",
};

const historyPageData = {
    dashboard: "History",
    history: "July 6, 2022",
    title: "July 5, 2022",
    date1: "July 4, 2022",
    date2: "July 3, 2022",
    headerProps: headerData,
    headerProps2: footer2Data,
};

const header2Data = {
    skintalkPhLogo: "/img/skintalk-ph-logo@2x.png",
    dashboard: "Dashboard",
    history: "History",
};

const footer3Data = {
    className: "footer-2",
};

const dashboardData = {
    skintalkPhLogo: "/img/image@2x.png",
    dashboard: "Upload File",
    text2: "Sensitivity (0.01 - 0.99 default: 0.60):",
    text1: "0.60",
    text3: "Results",
    valuecode: "Acne Grade:",
    acne_Grade_Api: "-",
    comedone_Api: "-",
    text5: "Comedone",
    papulopustular_Api: "-",
    text6: "Papulopustular",
    text4: "-",
    history: "Nodulocystic",
    nodulocystic_Api: "-",
    text7: "Scar",
    headerProps: header2Data,
    headerProps2: footer3Data,
};

