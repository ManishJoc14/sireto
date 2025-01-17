import React from "react";
import { Metadata } from "next";
import { TeamsHero } from "../../../components/TeamsHero";
import TeamsTable from "../../../components/team";

export const metadata: Metadata = {
  title: "Teams",
};

export default function Teams() {
  return (
    <>
      <TeamsHero />
      <TeamsTable />
    </>
  );
}
