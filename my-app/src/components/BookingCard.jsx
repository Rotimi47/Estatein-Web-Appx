import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "./Hooks/Dropdown";

const BookingCard = ({ pricePerNight }) => {
  const { id: propertyId } = useParams(); // 👈 source of truth
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  // Calculate nights
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end - start;

    return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
  }, [checkIn, checkOut]);

  const totalPrice = nights * pricePerNight;

  const handleReserve = (e) => {
    e.preventDefault();

    // 🔍 Hard validation (with visibility)
    if (!checkIn || !checkOut || !guests || nights === 0) {
      alert("Please select dates and number of guests");
      return;
    }

    navigate(`/booking/${propertyId}`, {
      state: {
        propertyId,
        checkIn,
        checkOut,
        guests,
        nights,
        pricePerNight,
        totalPrice,
      },
    });
  };

  return (
    <div className="w-full mx-auto mt-10 px-4 max-w-7xl">
      <div className="border rounded-2xl p-6 shadow-sm max-w-md border-neutral-700">
        <h2 className="text-xl font-semibold mb-4">
          ₦{pricePerNight}{" "}
          <span className="text-sm font-normal">per night</span>
        </h2>

        <form className="space-y-4" onSubmit={handleReserve}>
          {/* Dates */}
          <div className="grid grid-cols-2 border rounded-xl overflow-hidden border-neutral-700">
            <div className="p-3 border-r border-neutral-700">
              <label className="text-xs font-medium">CHECK-IN</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full outline-none"
              />
            </div>

            <div className="p-3">
              <label className="text-xs font-medium">CHECK-OUT</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="border rounded-xl p-3 border-neutral-700">
            <label className="text-xs font-medium block">GUESTS</label>

            <Dropdown
              placeholder="Select guests"
              options={["2 Adults", "3 Adults", "4 Adults", "5 Adults", "6 Adults", "7 Adults"]}
              onSelect={setGuests}
            />

            {/* Debug visibility */}
            <p className="text-xs mt-1 text-gray-400">
              Selected guests: {guests || "none"}
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#703BF7] text-white py-3 rounded-full font-semibold"
          >
            Reserve
          </button>
        </form>

        {/* Summary */}
        {nights > 0 && (
          <div className="mt-4 text-sm text-gray-600">
            <p>
              {nights} night{nights > 1 && "s"}
            </p>
            <p className="font-medium text-white">
              Total: ₦{totalPrice}
            </p>
            <p className="text-base mt-1 text-white text-center">
              You won’t be charged yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCard;

