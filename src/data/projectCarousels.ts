export type ProjectCard = {
  title: string;
  imageUrl: string;
  href: string | null;
};
const bucketPathBaseURL = "https://pub-4feb8073edd640a59a79a74dc0b70366.r2.dev/personal/portfolioassets/";
export const projectCarousels = {
  fullstack: [
    {
      title: "'NERD' Business Dashboard",
      imageUrl: `${bucketPathBaseURL}dash.png`,
      href: "https://spanish-business-dashboard-demo.vercel.app/",
    },
    {
      title: "AI Integration - LLM Engineering",
      imageUrl: `${bucketPathBaseURL}chatgptrainner.png`,
      href: "https://tinyfrankhorwitz.github.io/chatgptrainer/",
      
    },
    {
      title: "'PERN' File Delivery System - Shopify Custom App",
      imageUrl: `${bucketPathBaseURL}sample1.png`,
      href: "https://csa-file-delivery-service-banckend.onrender.com/",
    },
    {
      title: "Shopify Headless StoreFront",
      imageUrl: `${bucketPathBaseURL}f2.png`,
      href: "https://tinyfrankhorwitz.github.io/storefronts-samples/public/dragable/"
    }
  ],
  gamedev: [
    {
      title: "Roblox Game Development",
      imageUrl: `${bucketPathBaseURL}suika.jpg`,
      href: "https://www.roblox.com/games/15509059447/Suika-Fruit-Game",
    },
    {
      title: "Unity Game Development - C# Scripting",
      imageUrl: `${bucketPathBaseURL}b2.png`,
      href: "https://eltinydev.itch.io/senor-fiesta",
    },
    {
      title: "Luau Scripting for Game Mechanics & Robux Monetization System",
      imageUrl: `${bucketPathBaseURL}a1.png`,
      href: "https://www.roblox.com/games/14529132613/The-King-of-the-Hill",
    },
  ],
  multimedia: [
    {
      title: "3D Modeling, Texturing, Shading & UI Design",
      imageUrl: `${bucketPathBaseURL}b2.png`,
      href: null,
    },
    {
      title: "3D Retopology - Game Targeted",
      imageUrl: `${bucketPathBaseURL}3d.jpg`,
      href: null,
    },
    {
      title: "3D Retopology - Game Targeted",
      imageUrl: `${bucketPathBaseURL}3d2.jpg`,
      href: null,
    },
    {
      title: "3D Retopology - Game Targeted",
      imageUrl: `${bucketPathBaseURL}3d3.jpg`,
      href: null,
    },
    {
      title: "3D Retopology - Game Targeted",
      imageUrl: `${bucketPathBaseURL}3d4.jpg`,
      href: null,
    },
    {
      title: "3D Full Modeling & Texturing",
      imageUrl: `${bucketPathBaseURL}3d5.png`,
      href: null,
    },
    {
      title: "3D Full Modeling & Texturing",
      imageUrl: `${bucketPathBaseURL}3d6.jpg`,
      href: null,
    },
    {
      title: "Texturing",
      imageUrl: `${bucketPathBaseURL}texturing.png`,
      href: null,
    },
    {
      title: "3D GameParts Modeling",
      imageUrl: `${bucketPathBaseURL}a1.png`,
      href: null,
    },
    {
      title: "2D Concept Art",
      imageUrl: `${bucketPathBaseURL}noFilter.jpg`,
      href: null,
    },
    {
      title: "Texturing",
      imageUrl: `${bucketPathBaseURL}shading.jpg`,
      href: null,
    },
    {
      title: "3D Modeling & UI Design - Game Targeted",
      imageUrl: `${bucketPathBaseURL}suika.jpg`,
      href: null,
    },
    
  ],
} as const;
