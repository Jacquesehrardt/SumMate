import { pricingPlans } from "@/utils/constants";
import { getDbConnection } from "./db";
import { getUserUploadCount } from "./summaries";

export async function getPriceId(email: string) {
   const sql = await getDbConnection();
   const query = await sql`SELECT price_id FROM users WHERE email = ${email} AND status = 'active'`;
   console.log(query);

   return query?.[0]?.price_id || null;
}

export async function hasActivePlan(email: string) {
   const sql = await getDbConnection();
   const query = await sql`SELECT price_id, status FROM users WHERE email = ${email} AND status = 'active' AND price_id IS NOT NULL`;
   console.log(query);

   return query && query.length > 0;
}

export async function hasReachedUploadLimit(userId: string, email: string) {
   const uploadCount = await getUserUploadCount(userId);
   const priceId = await getPriceId(email);

   const isPro = 
      pricingPlans.find((plan) => plan.priceId === priceId)?.id === "pro";

   const uploadLimit: number = isPro ? 1000 : 5;

   return {hasReachedLimit: uploadCount >= uploadLimit, uploadLimit}
}