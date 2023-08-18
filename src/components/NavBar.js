import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let myATags = links.map((link) => <a href={"#" + link} key={link}>{link}</a>);

  return <nav>
    {myATags}
  </nav>;
}

export default NavBar;
