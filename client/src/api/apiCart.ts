import axios, { AxiosInstance } from "axios";
import { Item } from "~/types";
import { Invoice } from "~/types";

export const getCart = async (token: string, instance: AxiosInstance) => {
  try {
    const res = await instance.get("/api/protected/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });
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

export const updateCartItem = async (
  token: string,
  instance: AxiosInstance,
  item: Item
) => {
  try {
    const res = await instance.put(`/api/protected/cart/update_cart`, item, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Update OK!");
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

export const removeCartItem = async (
  token: string,
  instance: AxiosInstance,
  id: string,
  size: string
) => {
  try {
    await instance.delete(
      `/api/protected/cart/item?product_id=${id}&variant=${size}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
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

export const addCartItem = async (
  token: string,
  instance: AxiosInstance,
  item: Item
) => {
  try {
    const res = await instance.post("/api/protected/cart/additem", item, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res.data);
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

export const createOrder = async (
  token: string,
  instance: AxiosInstance,
  invoice: Invoice
) => {
  try {
    const res = await instance.post("/api/protected/order", invoice, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
