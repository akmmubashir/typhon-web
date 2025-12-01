import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductsList from "./components/productsList";
import ServiceList from "./components/serviceList";
import ProductDetails from "./components/productDetails";
import { productsData } from "../utils/data/products";
import { servicesData } from "../utils/data/services";
import ServiceDetails from "./components/serviceDetails";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const productExists = slug[2]
    ? productsData.some(
        (product) =>
          product.title.toLowerCase().replace(/\s+/g, "-") ===
          slug[2].toLowerCase()
      )
    : false;

  const currentProduct = productExists
    ? productsData.find(
        (product) =>
          product.title.toLowerCase().replace(/\s+/g, "-") ===
          slug[2].toLowerCase()
      )
    : null;

  const serviceExists = slug[2]
    ? servicesData.some(
        (service) =>
          service.title.toLowerCase().replace(/\s+/g, "-") ===
          slug[2].toLowerCase()
      )
    : false;

  const currentService = serviceExists
    ? servicesData.find(
        (service) =>
          service.title.toLowerCase().replace(/\s+/g, "-") ===
          slug[2].toLowerCase()
      )
    : null;

  // console.log("currentProduct", currentProduct);
  // console.log("currentService", currentService);
  return (
    <div className="bg-white w-full">
      <Header />

      {slug[1] === "products" && productExists && currentProduct ? (
        <ProductDetails
          details={currentProduct}
          location={slug[0]}
          type={slug[1]}
          product={slug[2]}
        />
      ) : slug[1] === "products" ? (
        <ProductsList location={slug[0]} />
      ) : null}
      {slug[1] === "services" && serviceExists && currentService ? (
        <ServiceDetails
          details={currentService}
          location={slug[0]}
          type={slug[1]}
          service={slug[2]}
        />
      ) : slug[1] === "services" ? (
        <ServiceList location={slug[0]} />
      ) : null}
      <Footer />
    </div>
  );
};

export default page;
