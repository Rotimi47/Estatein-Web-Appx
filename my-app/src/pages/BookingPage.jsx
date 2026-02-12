import { useParams, useLocation, Navigate } from "react-router-dom";
import usePropertyDetails from "../components/Hooks/usePropertyDetails";
import BookingSummary from "../components/BookingSummary";
import PaymentSection from "../components/PaymentSection";
import { useAuth } from "../context/useAuth.js";

const BookingPage = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();
  const location = useLocation();
  const booking = location.state;

  const { property, loading, error } = usePropertyDetails(id);

  if (!booking) {
    return <Navigate to={`/properties/${id}`} replace />;
  }

  if (loading) {
    return <p className="text-center mt-20">Loading booking...</p>;
  }

  if (error) {
    return <p className="text-center mt-20">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-8">
        Confirm and Pay
      </h1>

      <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* LEFT — BOOKING SUMMARY */}
        <BookingSummary property={property} booking={booking} />

        {/* RIGHT — PAYMENT */}
        <PaymentSection 
        selectedProperty={property}
        user={currentUser}
        />

      </div>
    </div>
  );
};

export default BookingPage;

