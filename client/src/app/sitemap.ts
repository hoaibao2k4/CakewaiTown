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
  const detailedRoutes = [
    '/detailed/672ed3d6fdcaaf8a91f8d564?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672e8bb85fc5fc6266bd9036?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed329fdcaaf8a91f8d562?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672e8d035fc5fc6266bd9039?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed0b2fdcaaf8a91f8d55c?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed1f7fdcaaf8a91f8d55f?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed25dfdcaaf8a91f8d560?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed39efdcaaf8a91f8d563?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672e8cd75fc5fc6266bd9038?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672e8d2b5fc5fc6266bd903a?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672e8d6f5fc5fc6266bd903b?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed11cfdcaaf8a91f8d55d?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed17bfdcaaf8a91f8d55e?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed2e2fdcaaf8a91f8d561?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672e8c855fc5fc6266bd9037?category=B%C3%A1nh+sinh+nh%E1%BA%ADt',
    '/detailed/672ed496fdcaaf8a91f8d565?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed5c3fdcaaf8a91f8d56a?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed51afdcaaf8a91f8d567?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed568fdcaaf8a91f8d568?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed64bfdcaaf8a91f8d56d?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed67afdcaaf8a91f8d56e?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed7c6fdcaaf8a91f8d572?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed6e0fdcaaf8a91f8d570?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed722fdcaaf8a91f8d571?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed7ecfdcaaf8a91f8d573?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed4c3fdcaaf8a91f8d566?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed590fdcaaf8a91f8d569?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed5eefdcaaf8a91f8d56b?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed623fdcaaf8a91f8d56c?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed6b4fdcaaf8a91f8d56f?category=B%C3%A1nh+truy%E1%BB%81n+th%E1%BB%91ng',
    '/detailed/672ed8e3fdcaaf8a91f8d575?category=Cookies+and+Mini+Cakes',
    '/detailed/672e841c5fc5fc6266bd901a?category=Cookies+and+Mini+Cakes',
    '/detailed/672e86345fc5fc6266bd9021?category=Cookies+and+Mini+Cakes',
    '/detailed/672e87155fc5fc6266bd9025?category=Cookies+and+Mini+Cakes',
    '/detailed/672ed8b3fdcaaf8a91f8d574?category=Cookies+and+Mini+Cakes',
    '/detailed/672e831c5fc5fc6266bd9019?category=Cookies+and+Mini+Cakes',
    '/detailed/672e85265fc5fc6266bd901c?category=Cookies+and+Mini+Cakes',
    '/detailed/672e85de5fc5fc6266bd901f?category=Cookies+and+Mini+Cakes',
    '/detailed/672e86a15fc5fc6266bd9023?category=Cookies+and+Mini+Cakes',
    '/detailed/672ed908fdcaaf8a91f8d576?category=Cookies+and+Mini+Cakes',
    '/detailed/672e84675fc5fc6266bd901b?category=Cookies+and+Mini+Cakes',
    '/detailed/672e855f5fc5fc6266bd901d?category=Cookies+and+Mini+Cakes',
    '/detailed/672e86045fc5fc6266bd9020?category=Cookies+and+Mini+Cakes',
    '/detailed/672e86695fc5fc6266bd9022?category=Cookies+and+Mini+Cakes',
    '/detailed/672e86df5fc5fc6266bd9024?category=Cookies+and+Mini+Cakes',
    '/detailed/672e874e5fc5fc6266bd9026?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e87b35fc5fc6266bd9028?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e88315fc5fc6266bd902b?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e889d5fc5fc6266bd902e?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e88ca5fc5fc6266bd902f?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e89a05fc5fc6266bd9032?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e89ee5fc5fc6266bd9033?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e88095fc5fc6266bd902a?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e88765fc5fc6266bd902d?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e8a2f5fc5fc6266bd9034?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e87dc5fc5fc6266bd9029?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e88f35fc5fc6266bd9030?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e88545fc5fc6266bd902c?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e89625fc5fc6266bd9031?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
    '/detailed/672e8a525fc5fc6266bd9035?category=B%C3%A1nh+m%C3%AC+v%C3%A0+b%C3%A1nh+m%E1%BA%B7n',
  ]
  const category = ["all", "birthday", "tradition", "cookie", "bread"];
  const newsRoutes = newsfeedData.map((news) => `/blogs/${toSlug(news.title)}`);
  const categoryRoutes = category.map((type) => `/category/${type}`);
  // const res = await fetch("https://cakewaibackend.id.vn/api/public/products/")
  // const cakes = await res.json()
  // const newCakeId = cakes.map((cake) => `/detailed/${cake.id}`)
  
  const allRoutes = [...staticRoutes, ...newsRoutes, ...categoryRoutes,...detailedRoutes];
  return allRoutes.map((route) => ({
    url: `https://cakewaitown.com${route}`,
    lastModified: new Date(),
  }));
}
