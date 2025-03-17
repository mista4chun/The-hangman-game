import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

function AppLayout() {
  const location = useLocation();
  const { category } = useParams();
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const decodedPathname = decodeURIComponent(location.pathname);// Decode %20 to space
    
    switch (decodedPathname) {
      case "/":
        setOverlayOpacity(0);
        break;

      case "/how-to-play":
        setOverlayOpacity(0.8);
        break;

      case "/pick-a-category":
        setOverlayOpacity(0.7);
        break;

      // case `/pick-a-category/${category}`:
      //   setOverlayOpacity(0.7);
      //   break;

      default:
        if (decodedPathname.startsWith("/pick-a-category/")) {
          setOverlayOpacity(0.7);
        } else {
          setOverlayOpacity(0);
        }
        break;
    }
  }, [location.pathname, category]);
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
