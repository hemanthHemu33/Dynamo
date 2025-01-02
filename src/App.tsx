import "./App.css";
// import { InfiniteMovingCardsDemo } from "./components/acetrnity-ui/infinityScroll/infiniteMovingComponent";
// import Profile from "./components/acetrnity-ui/profile/profile";
// import { CanvasRevealEffectDemo } from "./components/acetrnity-ui/service-cards/reveal-card-component";
// import { GridSmallBackgroundDemo } from "./components/acetrnity-ui/lines-bg/bg";
// import { ThreeDCardDemo } from "./components/acetrnity-ui/3d-card-component";
// import { PlaceholdersAndVanishInputDemo } from "./components/acetrnity-ui/vanishInput/vanishInputComponent";
// import { SparklesPreview } from "./components/acetrnity-ui/sparkles/sparkles-compoent";
// import { StickyScrollRevealDemo } from "./components/acetrnity-ui/sticky-scroll/stick-scroll-componet";
// import { WobbleCardDemo } from "./components/acetrnity-ui/wobble-cards/wobble-cards-components";
import Footer from "./reusable-components/footer";
import Header from "./reusable-components/header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/pages/layout";
import WebDevelop from "./components/pages/webDevelopment";
import AppDevelop from "./components/pages/appDevelopment";
import StaticDevelop from "./components/pages/staticDevelopment";

function App() {
  return (
    <>
      {/* <ThreeDCardDemo /> */}
      {/* <PlaceholdersAndVanishInputDemo /> */}
      {/* <GridSmallBackgroundDemo /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/webDevelop" element={<WebDevelop />}></Route>
          <Route path="/appDevelop" element={<AppDevelop />}></Route>
          <Route path="/staticDevelop" element={<StaticDevelop />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
