import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// const apitoken = "skzAxHIvVcZkg69Kr6aEPZGyNRpbyjjjQsCiDpU38hhBryDqaky8GZT1ob1dlGjdvjq88CuunDW7AfFFfHWU0Hgzqbz1w34ffi9WjkmctyaIc7vPnCd5o8AnbTe0DzoQlwYFfOTcCSY7DS1jqUGbOmrchGFGGVGHTxPPKDUyD5sVqDZeBvww"

export const config = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, 
  dataset: process.env.REACT_APP_SANITY_DATASET || "production",
  token: process.env.REACT_APP_SANITY_API_TOKEN,
  ignoreBrowserTokenWarning: true,
  apiVersion: "2022-04-17",
  useCdn: true
};

export const sClient = sanityClient(config);
export const urlFor = (source) => imageUrlBuilder(config).image(source);