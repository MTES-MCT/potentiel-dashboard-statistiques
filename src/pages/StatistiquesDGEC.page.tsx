"use client";

import React, { FC } from "react";
import IframeResizer from "@iframe-resizer/react";

type StatistiquesDGECPageProps = {
  dashboardIframeUrl: string;
};

export const StatistiquesDGECPage: FC<StatistiquesDGECPageProps> = ({
  dashboardIframeUrl,
}) => (
  <>
    <h1 className={`my-5 text-3xl text-center leading-8 font-bold`}>
      Potentiel en chiffres - Dashboard DGEC
    </h1>
    <div className="fr-container my-10">
      <IframeResizer
        license="GPLv3"
        src={dashboardIframeUrl}
        style={{ width: "100%", height: "auto" }}
        className="mt-10"
      />
    </div>
  </>
);
