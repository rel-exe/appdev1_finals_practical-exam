import React from "react";
import "../assets/corner.css";

function GitHubCorner({ url }) {
  return (
    <a href={url} className="github-corner" aria-label="View source on GitHub">
      <svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: "#151513", color: "#fff", position: "absolute", top: 0, border: 0, right: 0 }}>
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path className="octo-arm" d="M128 109c-15-20-30-30-30-30s0 0 0 0c0 0 10 10 30 30z"></path>
        <path className="octo-body" d="M115 115c-1-1-2-2-3-3 0 0 0 0 0 0 0 0 2 2 3 3z"></path>
      </svg>
    </a>
  );
}

export default GitHubCorner;