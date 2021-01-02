import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${nav && "navbar__black"}`}>
      <img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="your logo img"
        className="logo"
      />
      <img
        src="https://avatars1.githubusercontent.com/u/59042228?s=460&u=179c37452e143a3f4c663f6db3c5744698ed11aa&v=4"
        alt="your avatar img"
        className="avatar"
      />
    </div>
  );
}

export default Nav;
