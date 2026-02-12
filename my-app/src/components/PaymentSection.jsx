import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, CreditCard } from "lucide-react";
import { makePayment } from "../api/paymentAPI";

const PaymentSection = ({ selectedProperty, user }) => {
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  const navigate = useNavigate();

  const handleMockPayment = async () => {
    try {
      setLoading(true);

      const amount = selectedProperty.price; // dynamic
      const email = user.email; // logged-in user

      const result = await makePayment({ amount, email });

      setPaymentResult(result);

       // ✅ Redirect back to property page after success
      if (result.status === "success") {
        setTimeout(() => {
          navigate(`/properties/${selectedProperty.id}`);
        }, 1500);
      }
      
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-semibold">Payment</h2>

      {/* Payment Method */}
      <div className="border rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CreditCard className="w-5 h-5 text-[#703BF7]" />
          <div>
            <p className="font-medium">Paystack</p>
            <p className="text-sm text-gray-500">
              Pay securely with card or bank transfer
            </p>
          </div>
        </div>

        <span className="text-xs bg-[#703BF7]/10 text-[#703BF7] px-3 py-1 rounded-full">
          Selected
        </span>
      </div>

      {/* Amount */}
      <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 text-sm">
        <p className="text-gray-400">
          Amount to pay:{" "}
          <span className="text-white font-semibold">
            ₦{selectedProperty.price.toLocaleString()}
          </span>
        </p>
      </div>

      {/* Pay Button */}
      <button
        onClick={handleMockPayment}
        disabled={loading}
        className="w-full bg-[#703BF7] hover:bg-[#5a2ee0] transition text-white py-4 rounded-full font-semibold disabled:opacity-60"
      >
        {loading ? "Processing payment..." : "Pay now"}
      </button>

      {/* Success Message */}
      {paymentResult?.status === "success" && (
        <div className="bg-green-900/30 border border-green-700 rounded-xl p-4 text-sm">
          <p className="text-green-400 font-medium">
            Payment successful!
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Reference: {paymentResult.reference}
          </p>
        </div>
      )}

      {/* Security */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <Lock className="w-4 h-4" />
        <span>Secure payment powered by Paystack</span>
      </div>

      {/* Portfolio disclaimer */}
      <p className="text-xs text-center text-gray-500">
        This is a demo payment interface for portfolio purposes.
        No real transactions are processed.
      </p>
    </div>
  );
};

export default PaymentSection;

