import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Chloé Pelerin</p>
        <p className="footer-year">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
