import api from "./axiosInstance";

export const makePayment = async (payload) => {
  try {
    const res = await api.post("/payment", payload);
    return res.data;
  } catch (err) {
    throw new Error("Payment failed. Please try again.");
  }
};
