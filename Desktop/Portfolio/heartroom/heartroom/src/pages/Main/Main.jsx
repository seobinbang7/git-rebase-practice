import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <header></header>
      <main>
        <FontAwesomeIcon icon={faHeart} className="heart animate-heartbeat" />
        <div>
          <a href="#" className="bookmark"></a>
          <a href="#" className="bookmark"></a>
          <a href="#" className="bookmark"></a>
        </div>
      </main>
    </div>
  );
}
