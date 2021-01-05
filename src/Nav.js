import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Search } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { stateValueProvider } from "./StateProvider";
import { actionType } from "./reducer";
function Nav() {
  const [inputcari, setInputcari] = useState("");
  const [{ movie }, dispatch] = stateValueProvider();
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
  const handleButton = (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.SET_SEARCH_MOVIE,
      movie: inputcari,
    });
  };
  return (
    <div className={`nav ${nav && "navbar__black"}`}>
      <img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="your logo img"
        className="logo"
      />
      <form>
        <input
          onChange={(e) => setInputcari(e.target.value)}
          type="text"
          placeholder="Search Your Favorite Movie Here"
        />
        <IconButton
          type="submit"
          className="button__search"
          onClick={handleButton}
        >
          <Search />
        </IconButton>
      </form>
      <img
        src="https://avatars1.githubusercontent.com/u/59042228?s=460&u=179c37452e143a3f4c663f6db3c5744698ed11aa&v=4"
        alt="your avatar img"
        className="avatar"
      />
    </div>
  );
}

export default Nav;
