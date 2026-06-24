import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/recommended/", "/api/"],
      },
    ],
    sitemap: "https://www.grannydovieheals.com/sitemap.xml",
  }
}
