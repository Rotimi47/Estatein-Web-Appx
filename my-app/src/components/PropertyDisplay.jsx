import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

import PropertyGallery from "./Hooks/PropertyGallery";
import { propertyImages } from "../Constant";
import { Amenities } from "../Constant";
import bedroomIcon from '../assets/bedroomIcon.svg';
import bathroomIcon from '../assets/bathroomIcon.svg';
import squarefeetIcon from '../assets/squarefeetIcon.svg';

const PropertyDisplay = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const docRef = doc(db, "properties", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProperty(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20">Loading property...</p>;
  }

  if (!property) {
    return <p className="text-center mt-20">Property not found</p>;
  }

  const images = propertyImages[id] || [];

  return (
    <div className="w-full mx-auto mt-10 px-4 max-w-7xl flex flex-col gap-4">
      
      {/* TITLE */}
      <h1 className="text-3xl font-semibold">
        {property.title}
      </h1>

      {/* META */}
      <div className="flex gap-5 items-center">
        <div className="border border-neutral-700 px-3 py-2 rounded-md">
          {property.city}
        </div>

        <h2 className="text-xl font-medium">
          Price: ₦{property.price}
        </h2>
      </div>

      {/* GALLERY */}
      <PropertyGallery images={images} />


      <div className="flex flex-col gap-5 lg:flex-row"> 
        <div className="w-full flex flex-col gap-5 border border-neutral-800 rounded-lg py-5 px-5  lg:h-70">
          <div>
            <h1 className="font-semibold text-2xl">Decription</h1>
            <p className="text-sm font-medium text-neutral-400">{property.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 border-t pt-5 border-neutral-800">
            <div>
               <div className="flex gap-1"> <img src={bedroomIcon} alt="bedroom icon" /> <p>Bedrooms</p> </div>
              <p>{property.bedrooms}</p>
            </div>
            <div className="border-l border-neutral-800 pl-5 ">
               <div className="flex gap-1"> <img src={bathroomIcon} alt="bathroom icon"  /> <p>Bathrooms</p> </div>
              <p>{property.bathrooms}</p>
            </div>
            <div className="  border-t lg:border-t-0 lg:border-l lg:pl-5 border-neutral-800">
              <div className="flex gap-1"> <img src={squarefeetIcon} alt="squarefeet icon" /> <p>Area</p> </div>
              <p>{property.sizeSqm}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 py-5 px-5 rounded-lg border border-neutral-800 ">
          <div>
            <h1 className="font-semibold text-2xl">
              Key Features and Amenities
            </h1>
          </div>
          <div className="flex flex-col gap-4.5 ">
            {Amenities.map((item, index) => (
              <div key = {index} className="flex gap-2.5 px-3 py-2.5 bg-neutral-900 border-l border-[#703BF7]">
                <img src={item.icon} alt="lightening icon" />
                <p>{item.text}</p>

              </div>
            
              


            ))}

          </div>
        </div>
      </div>


    </div>
    

  );
};

export default PropertyDisplay;

