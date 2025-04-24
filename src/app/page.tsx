import { Metadata } from "next";
import { z } from "zod";

import StatistiquesDGECPage from "@/app/pages/StatistiquesDGEC.page";

export const metadata: Metadata = {
  title: "Statistiques DGEC - Potentiel",
};

const schema = z.object({
  METABASE_URL: z.string(),
  METABASE_DASHBOARD_TOKEN: z.string(),
});

export default async function Page() {
  const { METABASE_URL, METABASE_DASHBOARD_TOKEN } = schema.parse(process.env);

  const dashboardIframeUrl = new URL(
    `${METABASE_URL}/${METABASE_DASHBOARD_TOKEN}`
  );

  return (
    <StatistiquesDGECPage dashboardIframeUrl={dashboardIframeUrl.toString()} />
  );
}
