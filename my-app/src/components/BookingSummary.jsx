import React from 'react'

const BookingSummary = ({ property, booking }) => {
  return (
    <div>
        <div className="space-y-6 ">
          <div className="border rounded-2xl p-6 border-neutral-700  bg-neutral-900">
            <div className=" border-b pb-2.5 border-neutral-700">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="flex text-xl font-semibold">Luxurious, Exquisite and Spacious.</p>
              <p className="text-neutral-400 text-sm lg:text-base ">Cancel before check-in for a partial refund.</p>
            </div>


              <div className="flex flex-col gap-2 border-b py-2.5 border-neutral-700">
                <h1 className="text-xl font-semibold">Dates</h1>
                <div>
                  <p className="text-neutral-400">Check-in: {booking.checkIn}</p>
                   <p className="text-neutral-400">Check-out: {booking.checkOut}</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 pt-2.5 ">
                <h1 className="text-xl font-semibold">Guests</h1>
                <div>
                  <p className="text-neutral-400">{booking.guests}</p>
                  <p className="text-neutral-400">{booking.nights} night(s)</p>
                </div>
              </div>
              

            <div className="mt-4 border-t pt-4 flex justify-between font-semibold border-neutral-700">
              <span>Total</span>
              <span>₦{booking.totalPrice}</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BookingSummary