import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #6E10EE;
    --secondary: #00F0FF;
    --accent: #FF3864;
    --background: #0A0A14;
    --surface: #14142B;
    --surface-light: #282858;
    --text-primary: #FFFFFF;
    --text-secondary: #B7B7D9;
    --text-disabled: #6B6B8E;
    --glow-primary: 0 0 10px rgba(110, 16, 238, 0.7);
    --glow-secondary: 0 0 10px rgba(0, 240, 255, 0.7);
    --glow-accent: 0 0 10px rgba(255, 56, 100, 0.7);
    --font-heading: 'Orbitron', sans-serif;
    --font-body: 'Exo', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--background);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--surface);
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: var(--surface);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 6px;
    border: 3px solid var(--surface);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--secondary);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    color: var(--primary);
    text-shadow: var(--glow-secondary);
  }

  button {
    font-family: var(--font-heading);
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: var(--primary);
    color: var(--text-primary);
  }
`;

export default GlobalStyles; 