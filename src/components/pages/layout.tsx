import { InfiniteMovingCardsDemo } from "../acetrnity-ui/infinityScroll/infiniteMovingComponent";
import Profile from "../acetrnity-ui/profile/profile";
import { CanvasRevealEffectDemo } from "../acetrnity-ui/service-cards/reveal-card-component";
import { SparklesPreview } from "../acetrnity-ui/sparkles/sparkles-compoent";
import { StickyScrollRevealDemo } from "../acetrnity-ui/sticky-scroll/stick-scroll-componet";
import { WobbleCardDemo } from "../acetrnity-ui/wobble-cards/wobble-cards-components";

const Layout = () => {
  return (
    <div>
      <SparklesPreview />
      <CanvasRevealEffectDemo />
      <WobbleCardDemo />
      <StickyScrollRevealDemo />
      <Profile />
      <InfiniteMovingCardsDemo />
    </div>
  );
};
export default Layout;
