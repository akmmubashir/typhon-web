export const navigation = (location?: string) => [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: `/${location || "location"}/services` },
  { title: "Products", url: `/${location || "location"}/products` },
  { title: "Contact", url: "/contact" },
];
