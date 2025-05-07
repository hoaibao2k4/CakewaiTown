import { MetadataRoute } from "next";
import { newsfeedData, toSlug } from "./blogs/[slug]/page";

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
  const detailedCakes = [
    "banh-kem-nhan-thom",
    "banh-kem-nhan-dau",
    "banh-tiramisu-mam-xoi",
    "banh-op-la",
    "banh-kem-6-lop-chuoi",
    "banh-kem-hat-phi",
    "banh-kem-tra-xanh-dau-latte",
    "banh-kem-tra-ba-tuoc-qua-ly-chua-en",
    "banh-kem-dau-va-vani",
    "madeira-cake",
    "hummingbird-cake",
    "whole-orange-cakee",
    "doreen-s-sultana-cake",
    "rose-and-vanilla-cake",
    "devil-s-food-cake",
    "devil-s-food-cake",
    "passionfruit-sponge-cake",
    "lemon-semolina-cake",
    "apple-and-vanilla-tea-cake",
    "apple-and-raspberry-crumble-tea-cake",
    "easiest-ever-mandarin-and-almond-syrup-cake",
    "carrot-and-walnut-cake",
    "chocolate-brownie-slab-cake",
    "rich-black-forest-cake",
    "su-kem-hat-phi",
    "banh-gio-quyt",
    "banh-kem-chuoi-va-dua",
    "banh-kem-dau-va-vani",
    "banh-kisses-tra-ba-tuoc-va-viet-quat",
    "banh-op-la-cheesecake",
    "banh-tiramisu-lava",
    "grain-seaweed-cookie",
    "spicy-meat-floss-cookie",
    "passion-fruit-cookie",
    "cream-cheese-cookie",
    "fruits-and-nuts-biscotti",
    "seaweed-snack",
    "banh-macaron-caramen",
    "banh-macaron-ly-chua-en-oai-huong",
    "high-fiber-bread",
    "whole-wheat-pita-bread",
    "whole-wheat-english-muffins",
    "croissant",
    "pate-chaud",
    "banh-croissant-oreo-pho-mai",
    "banh-mi-brioche-tran-chau-caramen",
    "banh-tra-xanh-dau-latte-croissant",
    "banh-croissant-trung-muoi",
    "berry-cream-cheese-bun",
    "orange-chocolate-croissant",
    "banh-mi-sua-kieu-phap",
    "banh-chuoi-so-co-la",
    "bong-lan-trung-muoi",
    "banh-mi-cuon-nho-que",
    "banh-kem-cam-sua-chua-mat-ong",
    "banh-kem-tiramisu",
    "banh-passion-mousse-cheesecake",
    "banh-red-velvet-mousse-cheesecake",
    "banh-chocolate-mousse-cheesecake",
    "banh-chocolate-mousse-cheesecake"
]
  const category = ["all", "birthday", "tradition", "cookie", "bread"];
  const newsRoutes = newsfeedData.map((news) => `/blogs/${toSlug(news.title)}`);
  const categoryRoutes = category.map((type) => `/category/${type}`);
  const detailedRoutes = detailedCakes.map((cake) => `/detailed/${cake}`)
  // const res = await fetch("https://cakewaibackend.id.vn/api/public/products/")
  // const cakes = await res.json()
  // const newCakeId = cakes.map((cake) => `/detailed/${cake.id}`)
  
  const allRoutes = [...staticRoutes, ...newsRoutes, ...categoryRoutes,...detailedRoutes];
  return allRoutes.map((route) => ({
    url: `https://cakewaitown.com${route}`,
    lastModified: new Date(),
  }));
}
