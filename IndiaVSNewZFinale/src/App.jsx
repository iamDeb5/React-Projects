import React from "react";
import "./App.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-brand display-text">THE DUALITY</div>
    <div className="nav-links display-text">
      <a href="#" className="nav-link active">
        MOMENTS
      </a>
      <a href="#" className="nav-link">
        STATS
      </a>
      <a href="#" className="nav-link">
        ARCHIVE
      </a>
    </div>
  </nav>
);

const PlayerCard = ({ name, team, role, score, imageSrc, theme }) => (
  <div className={`player-card ${theme}`}>
    <div className="role-badge display-text">{role}</div>
    <div className="image-container">
      <img src={imageSrc} alt={name} className="player-image" />
      <div className="image-overlay"></div>
    </div>

    <div className="player-data">
      <div className="player-meta">
        <span className="player-team display-text">{team}</span>
        <span className="player-name display-text">{name}</span>
      </div>
      <div className="player-score display-text">{score}</div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <div className="bg-typography">FINALE</div>

        <header className="hero-header">
          <div className="hero-subtitle display-text">
            ICC T20 WORLD CUP / FINAL
          </div>
          <h1 className="hero-title body-text">
            CLASH OF <span>TITANS</span>
          </h1>
        </header>

        <div className="editorial-duel">
          <PlayerCard
            name="SAMSON"
            team="INDIA"
            role="WICKETKEEPER-BATTER"
            score="97"
            imageSrc="/assets/samson_custom.webp"
            theme="ind-theme"
          />

          <div className="divider-line">
            <div className="line"></div>
            <div className="vs-text display-text">VS</div>
            <div className="line"></div>
          </div>

          <PlayerCard
            name="ALLEN"
            team="NEW ZEALAND"
            role="TOP-ORDER BATTER"
            score="100"
            imageSrc="/assets/allen_custom.webp"
            theme="nz-theme"
          />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-text display-text">
          2026 ICC MEN'S T20 WORLD CUP • Narendra Modi Stadium, Ahmedabad
        </div>
      </footer>
    </div>
  );
};

export default App;
