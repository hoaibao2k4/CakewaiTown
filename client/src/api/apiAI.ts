import axios, { AxiosInstance } from "axios";

export const generateImage = async (
  token: string,
  promt: string,
  instance: AxiosInstance
) => {
  try {
    const res = await instance.post(
      "/api/protected/generate-image",
      { user_input: promt },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error) {
      console.error("Request Err: ", err.message);
    } else {
      console.error("Unknown: ", err);
    }
  }
};
