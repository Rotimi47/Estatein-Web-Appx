import { useParams } from "react-router-dom";
import FaqSection from "../components/FaqSection";
import PropertyDisplay from "../components/PropertyDisplay";
import PropPricing from "../components/PropPricing";
import usePropertyDetails from "../components/Hooks/usePropertyDetails";
import BookingCard from "../components/BookingCard";

const ViewProperty = () => {
  const { id } = useParams();
  const { property, loading, error } = usePropertyDetails(id);

  if (loading) return <p className="text-center mt-20">Loading property...</p>;
  if (error) return <p className="text-center mt-20">{error}</p>;

  return (
    <>
      <PropertyDisplay  />
      <PropPricing 
      title={property.title}
      price={property.price} 
      />
      <BookingCard 
      pricePerNight={property.price} 
      propertyId={property.id}/>
      <FaqSection />
    </>
  );
};

export default ViewProperty;
