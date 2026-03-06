import {  useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "./Hooks/Dropdown";
import { useForm, Controller } from "react-hook-form";

const BookingCard = ({ pricePerNight }) => {
  const { id: propertyId } = useParams(); // 👈 source of truth
  const navigate = useNavigate();

    const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  // Watch form values
  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");
  const guests = watch("guests");

  // Calculate nights
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end - start;

    return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;

  }, [checkIn, checkOut]);

  const totalPrice = nights * pricePerNight;

  const onSubmit = (data) => {

    if (nights === 0) {
      alert("Check-out must be after check-in");
      return;
    }

    navigate(`/booking/${propertyId}`, {
      state: {
        propertyId,
        ...data,
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

        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
          {/* Dates */}
          <div className="grid grid-cols-2 border rounded-xl overflow-hidden border-neutral-700">
            
            <div className="p-3 border-r border-neutral-700">
              <label className="text-xs font-medium">CHECK-IN</label>
              <input
                type="date"
                className="w-full outline-none"
                 {...register("checkIn", {
              required: "check-in  is required"
            })}
              />
              {errors.checkIn && (
                    <p className="text-red-400 text-xs">
                    {errors.checkIn.message}
                    </p>
                )}
            </div>

            <div className="p-3">
              <label className="text-xs font-medium">CHECK-OUT</label>
              <input
                type="date"
              
                className="w-full outline-none"
                {...register("checkOut", {
              required: "check-out  is required"
            })}
              />
              {errors.checkOut && (
                    <p className="text-red-400 text-xs">
                    {errors.checkOut.message}
                    </p>
                )}
            </div>
          </div>

          {/* Guests */}
          <div className="border rounded-xl p-3 border-neutral-700">
            <label className="text-xs font-medium block">GUESTS</label>
            <Controller
              name="guests"
              control={control}
              rules={{ required: "Please select a Budget" }}
              render={({ field }) => (
                <Dropdown
                {...field} 
                  placeholder="Select guests"
                  options={["2 Adults", "3 Adults", "4 Adults", "5 Adults", "6 Adults", "7 Adults"]}
                  
                />
               )}
            />
            {errors.guests && (
                <p className="text-red-400 text-xs">{errors.guests.message}</p>
            )}

            {/* Debug visibility */}
            <p className="text-xs mt-1 text-gray-400">
              Selected guests: {guests || "none"}
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#703BF7] py-3 rounded-full font-semibold text-white transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:from-[#7C4DFF] hover:to-[#9B6BFF] hover:shadow-lg hover:shadow-[#703BF7]/50 hover:-translate-y-0.5 hover:scale-[1.03]"
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

