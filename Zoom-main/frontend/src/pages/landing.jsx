import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div
  className="landingPageContainer"
  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)` }}
>
      <div className="bgGlow bgGlow1" />
      <div className="bgGlow bgGlow2" />
      <div className="bgGlow bgGlow3" />

      <nav className="landingNav">
        <div className="navHeader">
          <h2>ChaiPeMeet</h2>
          <span>Meet. Chat. Connect.</span>
        </div>

        <div className="navlist">
          <button
            className="navBtn ghostBtn"
            onClick={() => router("/aljk23")}
          >
            Join as Guest
          </button>

          <button
            className="navBtn ghostBtn"
            onClick={() => router("/auth")}
          >
            Register
          </button>

          <button
            className="navBtn solidBtn"
            onClick={() => router("/auth")}
          >
            Login
          </button>
        </div>
      </nav>

      <main className="landingMainContainer">
        <div className="heroLeft">
          <div className="heroBadge">Video Meetings • Live Recording • Best Online Platform • Special GenZ features</div>

          <h1>
            <span>Yahan sirf baatein</span> nii yaadien banti hain
          </h1>

          <p>Dil ki baat, ek click ka saath — fast, simple aur clean meetings.</p>

          <div className="heroActions">
            <Link className="primaryBtn" to="/auth">
              Get Started
            </Link>
            <button className="secondaryBtn" onClick={() => router("/aljk23")}>
              Try Guest Mode
            </button>
          </div>

          <div className="miniStats">
            <div>
              <strong>HD</strong>
              <span>Video</span>
            </div>
            <div>
              <strong>Live</strong>
              <span>Chat</span>
            </div>
            <div>
              <strong>Easy</strong>
              <span>Join</span>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="imageCard">
            <div className="floatingCard card1">● Online</div>
            <div className="floatingCard card2">↗ Meet Now</div>

            <img src="/mobile.png" alt="App Preview" />
          </div>
        </div>
      </main>
    </div>
  );
}