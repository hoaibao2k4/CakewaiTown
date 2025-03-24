import axios, { AxiosInstance } from "axios";
import { response } from "~/services/axios";
import { ProductVariant } from "./apiCakes";

export const getListOrders = async (token: string, instance: AxiosInstance) => {
  try {
    const res = await instance.get("/api/protected/orders", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Response từ API:", res.data);
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

export const deleteOrders = async (
  token: string,
  id: string,
  instance: AxiosInstance
) => {
  try {
    const res = await instance.delete(`/api/protected/order/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Xóa thành công:", res.data);
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

export const OrderStatus = async (
  token: string,
  id: string,
  newStatus: number,
  instance: AxiosInstance
) => {
  try {
    const res = await instance.patch(
      `/api/protected/order/order_status/${id}`,
      { order_status: newStatus },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Cập nhật trạng thái thành công:", res.data);
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

export const DeliveryStatus = async (
  token: string,
  id: string,
  newStatus: number,
  instance: AxiosInstance
) => {
  try {
    const res = await instance.patch(
      `/api/protected/order/deliverystatus/${id}`,
      { shipping_status: newStatus },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Cập nhật trạng thái thành công:", res.data);
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

export const PaymentStatus = async (
  token: string,
  id: string,
  newStatus: number,
  instance: AxiosInstance
) => {
  try {
    const res = await instance.patch(
      `/api/protected/order/status/paid/${id}`,
      {
        payment_info: {
          is_paid: newStatus,
        },
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Cập nhật trạng thái thành công:", res.data);
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

export const getListOrdersByUserId = async (
  token: string,
  instance: AxiosInstance,
  id: string
) => {
  try {
    const res = await instance.get(
      `/api/protected/order/cus?customer_id=${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Response từ API:", res.data);
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

export const createOrders = async (
  token: string,
  instance: AxiosInstance,
  name: string,
  phone: string,
  product_type_id: string,
  product_variant: ProductVariant,
  payment_info: number,
  total_price: number
) => {
  try {
    const res = await instance.post(`/api/protected/order`, {
      name: name,
      phone: phone,
      product_type_id: product_type_id,
      product_variant: Array.isArray(product_variant)
        ? product_variant
        : [product_variant],
      payment_info: payment_info,
      total_price: total_price,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Response từ API:", res.data);
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

export const getProductsByType = async (typeId: string) => {
  try {
    const res = await response.get(`/api/public/products/${typeId}`);
    console.log("Products by type:", res.data);
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
