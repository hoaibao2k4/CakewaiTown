import axios from "axios";
import { response } from "~/services/axios";

import { ProductVariant, CreateCake } from "~/types";
export const getCake = (typeId: string) => {
  return response.get(`/api/public/products/${typeId}`);
};

export const getCakeById = (id: string) => {
  return response.get(`/api/public/product/${id}`);
};

export const getCakeBySlug = async (slug :string) => {
  try {
    const res = await response.get(`/api/public/product/detail/${slug}`)
    return res.data
  }
  catch (err: unknown) {
    if (axios.isAxiosError(err)){
      return err.message || err.code
    }
  }
}

export const getAllCakes = () => {
  return response.get("/api/public/products/");
};

export const createCake = (
  product_name: string,
  image_link: string,
  description: string,
  product_type_id: string,
  product_variant: ProductVariant[],
  slug: string
) => {
  const data: CreateCake = {
    product_name: product_name,
    image_link: image_link,
    description: description,
    product_type_id: product_type_id,
    product_variant: Array.isArray(product_variant)
      ? product_variant
      : [product_variant],
    slug: slug
  };
  return response.post("/api/public/product", data);
};

export const deleteCake = (id: string) => {
  return response.delete(`/api/public/product/${id}`);
};

export const updateCake = (
  _id: string,
  product_name: string,
  image_link: string,
  description: string,
  product_type_id: string,
  product_variant: ProductVariant[],
  slug: string
) => {
  const data: CreateCake = {
    _id,
    product_name,
    image_link,
    description,
    product_type_id,
    product_variant: product_variant,
    slug: slug
  };
  return response.put(`/api/public/product/${_id}`, data);
};

export const fetchBestSeller = () => {
  return response.get("/api/public/products/");
};

export const sortCakes = async (order: string) => {
  try {
    const res = await response.get(
      `/api/public/products/sort?field=variant.price&order=${order}`
    );
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};

export const searchCakes = async (query: string) => {
  try {
    const res = await response.get(`/api/public/product/search?query=${query}`);
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};
