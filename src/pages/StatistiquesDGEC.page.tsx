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
    <h1
      className={`mt-15 text-3xl text-center leading-8 font-bold text-[#000091]`}
    >
      Potentiel en chiffres - Dashboard DGEC
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
