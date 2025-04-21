import { MetadataRoute } from "next";
import { newsfeedData } from "./news/[id]/page";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "/about",
    "/account",
    "/authentic/recovery_email",
    "/authentic/sent_email",
    "/authentic/signin",
    "/authentic/signup",
    "/cart",
    "/claandcons",
    "/compolicy/delivery",
    "/compolicy/general",
    "/compolicy/payment",
    "/compolicy/return",
    "/compolicy/security",
    "/generator",
  ];
  const category = ["all", "birthday", "tradition", "cookie", "bread"];
  const newsRoutes = newsfeedData.map((news) => `/news/${news.id}`);
  const categoryRoutes = category.map((type) => `/category/${type}`);


  
  const allRoutes = [...staticRoutes, ...newsRoutes, ...categoryRoutes];
  return allRoutes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_FE_BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
