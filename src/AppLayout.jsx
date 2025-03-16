import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

function AppLayout() {
  const location = useLocation();
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setOverlayOpacity(0);
        break;

      case "/how-to-play":
        setOverlayOpacity(0.8);
        break;

      case "/pick-a-category":
        setOverlayOpacity(0.7);
        break;
      case "/pick-a-category/:category":
        setOverlayOpacity(0.7);
        break;

      default:
        setOverlayOpacity(0);
        break;
    }
  }, [location.pathname]);
  return (
    <>
      <div
        className="overlay"
        style={{
          backgroundColor: `rgba(24, 23, 107, ${overlayOpacity})`, // Dark navy blue
          transition: "opacity 0.5s ease-in-out",
        }}
      ></div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
