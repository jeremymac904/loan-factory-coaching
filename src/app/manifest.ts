import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Loan Factory Paid Coaching Platform",
    short_name: "LF Coaching",
    description:
      "Loan Factory paid coaching platform for LO Mastery and Loan Factory Alliance.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
