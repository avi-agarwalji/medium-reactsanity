import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: "xqd83ecq", 
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-04-17"
};

export const sClient = sanityClient(config);
export const urlFor = (source) => imageUrlBuilder(config).image(source);