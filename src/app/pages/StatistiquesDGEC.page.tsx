"use client";

import React from "react";
import IframeResizer from "@iframe-resizer/react";

type StatistiquesDGECPageProps = {
  dashboardIframeUrl: string;
};

export default function StatistiquesDGECPage({
  dashboardIframeUrl,
}: StatistiquesDGECPageProps) {
  return (
    <>
      <h1
        className={`mt-15 text-3xl text-center leading-8 font-bold text-[#000091]`}
      >
        Tableau de bord Potentiel
      </h1>
      <div className="my-10">
        <IframeResizer
          license="GPLv3"
          src={dashboardIframeUrl}
          style={{ width: "100%", height: "auto" }}
          className="mt-15"
        />
      </div>
    </>
  );
}
