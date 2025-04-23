import { Metadata } from "next";
import { SignJWT } from "jose";
import { z } from "zod";

import StatistiquesDGECPage from "@/pages/StatistiquesDGEC.page";

export const metadata: Metadata = {
  title: "Statistiques DGEC - Potentiel",
};

const schema = z.object({
  METABASE_URL: z.string(),
  METABASE_SECRET: z.string(),
  METABASE_DASHBOARD_ID: z.coerce.number(),
});

export default async function Page() {
  const { METABASE_URL, METABASE_SECRET, METABASE_DASHBOARD_ID } = schema.parse(
    process.env
  );

  const tokenForMainDashboard = await new SignJWT({
    resource: { dashboard: METABASE_DASHBOARD_ID },
    params: {},
  })
    .setIssuedAt()
    .setExpirationTime("10m")
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(METABASE_SECRET));

  const dashboardIframeUrl = new URL(
    `${METABASE_URL}/embed/dashboard/${tokenForMainDashboard}#bordered=false&titled=false`
  );

  return (
    <StatistiquesDGECPage dashboardIframeUrl={dashboardIframeUrl.toString()} />
  );
}
