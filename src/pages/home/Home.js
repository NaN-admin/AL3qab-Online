import React from "react";
import Container from "./js/Container";
import NavBar from "../NavBar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Container />
      </main>
    </>
  );
}
