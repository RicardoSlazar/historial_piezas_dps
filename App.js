import React from "react";
import { PiezasProvider } from "./src/context/PiezasContext";
import Navigation from "./src/navigation"; // o como lo tengas

export default function App() {
  return (
    <PiezasProvider>
      <Navigation />
    </PiezasProvider>
  );
}