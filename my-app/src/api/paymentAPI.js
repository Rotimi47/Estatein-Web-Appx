
import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const makePayment = async ({ amount, email }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/payments/pay`,
       { amount, email }
    );
    return response.data;
  } catch (error) {
    console.error("Payment failed:", error);
    return { status: "failed", error: error.message };
  }
};
