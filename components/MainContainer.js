import React from "react";
import A from "./A";
import Head from "next/head";

function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={"aim, nextjs" + keywords}></meta>
      </Head>
      <div className="navbar">
        <A href="/" text="Main"></A>
        <A href="/users" text="Users"></A>
      </div>
      <div>{children}</div>
    </>
  );
}

export default MainContainer;
