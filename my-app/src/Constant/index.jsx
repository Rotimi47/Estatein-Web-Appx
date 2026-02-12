import buildingOne from '../assets/buildingOne.png';
import buildingTwo from '../assets/buildingTwo.png';
import buildingThree from '../assets/buildingThree.png';
import buildingFour from '../assets/buildingFour.jpg';
import buildingFive from '../assets/buildingFive.jpg';
import buildingSix from '../assets/buildingSix.jpg';
import bedroomIcon from '../assets/bedroomIcon.svg';
import bathroomIcon from '../assets/bathroomIcon.svg';
import villaIcon from '../assets/villaIcon.svg';
import ClientOne from '../assets/ClientOne.png';
import ClientTwo from '../assets/ClientTwo.png';
import ClientThree from '../assets/ClientThree.png';
import ratingsImage from '../assets/ratingsImage.png';
//import {MapPin} from "lucide-react";
import House1a from "../assets/House1a.jpg";
import House1b from "../assets/House1b.jpg";
import House1c from "../assets/House1c.jpg";
import House1d from "../assets/House1d.jpg";
import House1e from "../assets/House1e.jpg";
import House1f from "../assets/House1f.jpg";
import House1g from "../assets/House1g.jpg";
import House1h from "../assets/House1h.png";
import House2a from "../assets/House2a.jpg";
import House2b from "../assets/House2b.jpg";
import House2c from "../assets/House2c.jpg";
import House2d from "../assets/House2d.jpg";
import House2e from "../assets/House2e.jpg";
import House2f from "../assets/House2f.jpg";
import House3a from "../assets/House3a.png";
import House3b from "../assets/House3b.jpg";
import House3c from "../assets/House3c.png";
import House3d from "../assets/House3d.jpg";
import House3e from "../assets/House3e.jpg";
import House3f from "../assets/House3f.jpg";
import House3g from "../assets/House3g.jpg";
import House4a from "../assets/House4a.jpg";
import House4b from "../assets/House4b.jpg";
import House4c from "../assets/House4c.jpg";
import House4d from "../assets/House4d.jpg";
import House4e from "../assets/House4e.jpg";
import House4f from "../assets/House4f.jpg";
import House4g from "../assets/House4g.jpg";
import House5a from "../assets/House5a.jpg";
import House5b from "../assets/House5b.jpg";
import House5c from "../assets/House5c.jpg";
import House5d from "../assets/House5d.jpg";
import House5e from "../assets/House5e.jpg";
import House5f from "../assets/House5f.jpg";
import House5g from "../assets/House5g.jpg";
import House6a from "../assets/House6a.jpg";
import House6b from "../assets/House6b.jpg";
import House6c from "../assets/House6c.jpg";
import House6d from "../assets/House6d.jpg";
import House6e from "../assets/House6e.jpg";
import House6f from "../assets/House6f.jpg";
import House6g from "../assets/House6g.jpg";
import strikeicon from "../assets/strikeIcon.svg";








export const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Properties", to: "/properties" },
  { label: "Contacts", to: "/contact" },
];

export const features = [
  {
    id: "AcoB2GbDhIpr1S7utBXC",
    image:buildingOne,
    name:'Seaside Serenity Villa',
    description: 'A stunning 4-bedroom 3-bathroom villa in a peaceful suburban neighborhood...Read More',
    price:'NGN 300,000',
    icon: [  
      { src: villaIcon, label: "Villa" },
      { src: bedroomIcon, label: "4-Bedroom" },
      { src: bathroomIcon, label: "3-Bathroom" },
    ]
  },
  {
    id: "Vn6LIX2wqdrckakbKzlS",
    image:buildingFour,
    name:'Moyosore Villa',
    description: 'A chic and fully furnished 2-bedroom apartment with panoramic city views...Read More',
    price:'NGN 200,000',
    icon: [  
      { src: villaIcon, label: "Villa" },
      { src: bedroomIcon, label: "4-Bedroom" },
      { src: bathroomIcon, label: "3-Bathroom" },
    ]
  },
  {
    id: "fy7vI5E4xaTonjwddFcz",
    image:buildingSix,
    name:'Metropolitan Haven',
    description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community ... Read More',
    price:'NGN 500,000',
     icon: [  
      { src: villaIcon, label: "Villa" },
      { src: bedroomIcon, label: "4-Bedroom" },
      { src: bathroomIcon, label: "3-Bathroom" },
    ]
  },
    {
    id: "mvSKphM7zGWIvK1ORPoY",
    image:buildingTwo,
    name:'Oreolinear Towers',
    description: 'A stunning 4-bedroom 3-bathroom villa in a peaceful suburban neighborhood...Read More',
    price:'NGN 1,000,000',
     icon: [  
      { src: villaIcon, label: "Villa" },
      { src: bedroomIcon, label: "4-Bedroom" },
      { src: bathroomIcon, label: "3-Bathroom" },
    ]
  },
    {
    id: "v5jf1MegQiH3MntDRkB3",
    image:buildingFive,
    name:'Uptown Lofty Heights',
    description: 'A chic and fully furnished 2-bedroom apartment with panoramic city views...Read More',
    price:'NGN 150,000',
     icon: [  
      { src: villaIcon, label: "Villa" },
      { src: bedroomIcon, label: "4-Bedroom" },
      { src: bathroomIcon, label: "3-Bathroom" },
    ]
  },
    {
    id: "w14HqV7nfUfyMRRsvecE",
    image:buildingThree,
    name:'Rustic Retreat Condo',
    description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community ... Read More',
    price:'NGN 200,000',
     icon: [  
      { src: villaIcon, label: "Villa" },
      { src: bedroomIcon, label: "4-Bedroom" },
      { src: bathroomIcon, label: "3-Bathroom" },
    ]
  },

]

export const testimonials = [
  {
    icon:ratingsImage,
    image:ClientOne,
    name: 'Ola Aina',
    location:'Abuja, Nigeria',
    title:'Exceptional Service!',
    review:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly Recommended! "

  },
  {
    icon:ratingsImage,
    image:ClientTwo,
    name: 'Funmi Olaleye',
    location:'Lagos, Nigeria',
    title:'Effiecient and Reliable',
    review: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results. "

  },
  {
    icon:ratingsImage,
    image:ClientThree,
    name: 'Sose Ibesanmi',
    location:'Ogun, Nigeria',
    title:'Trusted Advisors',
    review: "The Estatein guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support! "

  },
  {
    icon:ratingsImage,
    image:ClientOne,
    name: 'Ola Aina',
    location:'Abuja, Nigeria',
    title:'Exceptional Service!',
    review:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly Recommended! "

  },
  {
    icon:ratingsImage,
    image:ClientTwo,
    name: 'Funmi Olaleye',
    location:'Lagos, Nigeria',
    title:'Effiecient and Reliable',
    review: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results. "

  },
  {
    icon:ratingsImage,
    image:ClientThree,
    name: 'Sose Ibesanmi',
    location:'Ogun, Nigeria',
    title:'Trusted Advisors',
    review: "The Estatein guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support! "

  },

]

export const FAQ = [
  {
    question:'How do i search for questions on Estatein?',
    answer: 'Learn how to use our user friendly search tools to find properties that match your criteria.'
  },
  {
    question:'What documents do i need to sell my property through Estatein?',
    answer: 'Find out the necessary documentation for listing your property with us.'
  },
  {
    question:'How can i contact an Estatein agent?',
    answer: 'Discover the different ways you can get in touch with our experienced agents.'
  },
   {
    question:'How do i search for questions on Estatein?',
    answer: 'Learn how to use our user friendly search tools to find properties that match your criteria.'
  },
    {
    question:'What documents do i need to sell my property through Estatein?',
    answer: 'Find out the necessary documentation for listing your property with us.'
  },
    {
    question:'How can i contact an Estatein agent?',
    answer: 'Discover the different ways you can get in touch with our experienced agents.'
  }
]
/*export const PropDetails = [
  {
    id: "AcoB2GbDhIpr1S7utBXC",
    title: "Seaside Serenity Villa" ,
    price: "NGN 300,000",
    city :[
      { icon: <MapPin />, label: "Ikoyi, Lagos" }
    ],
    image: [House1a, House1b, House1c, House1d, House1e, House1f, House1g, House1h]
  },
   {
    id: "Vn6LIX2wqdrckakbKzlS",
    title: "Moyosore Inn" ,
    price: "NGN 200,000",
    city :[
      { icon: <MapPin />, label: "Ikeja, Lagos" }
    ],
    image: [House1a, House1b, House1c, House1d, House1e, House1f, House1g, House1h]
 
  },
   {
    id: "fy7vI5E4xaTonjwddFcz",
    title: "Metropolitan Haven" ,
    price: "NGN 500,000",
    city :[
      { icon: <MapPin />, label: "Lekki, Lagos" }
    ],
   image: [House1a, House1b, House1c, House1d, House1e, House1f, House1g, House1h]
    
  },
   {
    id: "mvSKphM7zGWIvK1ORPoY",
    title: "Oreolinear Towers" ,
    price: "NGN 1,000,000",
    city :[
      { icon: <MapPin />, label: "Banana Island, Lagos" }
    ],
   image: [House1a, House1b, House1c, House1d, House1e, House1f, House1g, House1h]
    
  },
   {
    id: "v5jf1MegQiH3MntDRkB3",
    title: "Uptown Lofty Heights" ,
    price: "NGN 150,000",
    city :[
      { icon: <MapPin />, label: "Ilupeju, Lagos" }
    ],
    image: [House1a, House1b, House1c, House1d, House1e, House1f, House1g, House1h]

    
  },
   {
    id: "w14HqV7nfUfyMRRsvecE",
    title: "Rustic Retreat Cottage" ,
    price: "NGN 200,000",
    city :[
      { icon: <MapPin />, label: "Epe, Lagos" }
    ],
    image: [House1a, House1b, House1c, House1d, House1e, House1f, House1g, House1h]


  }
]*/
export const propertyImages = {
  AcoB2GbDhIpr1S7utBXC: [
    { image: House1a },
    { image: House1b },
    { image: House1c },
    { image: House1d },
    { image: House1e },
    { image: House1f },
    { image: House1g },
    { image: House1h },
  ],
  Vn6LIX2wqdrckakbKzlS: [
    { image: House2a },
    { image: House2b },
    { image: House2c },
    { image: House2d },
    { image: House2e },
    { image: House2f },
    { image: House1g },
    { image: House1h },
  ],
  fy7vI5E4xaTonjwddFcz: [
    { image: House3a },
    { image: House3b },
    { image: House3c },
    { image: House3d },
    { image: House3e },
    { image: House3f },
    { image: House3g },
    { image: House1h },
  ],
  mvSKphM7zGWIvK1ORPoY: [
    { image: House4a },
    { image: House4b },
    { image: House4c },
    { image: House4d },
    { image: House4e },
    { image: House4f },
    { image: House4g },
    { image: House1h },
  ],
  v5jf1MegQiH3MntDRkB3: [
    { image: House5a },
    { image: House5b },
    { image: House5c },
    { image: House5d },
    { image: House5e },
    { image: House5f },
    { image: House5g },
    { image: House1h },
  ],
  w14HqV7nfUfyMRRsvecE: [
    { image: House6a },
    { image: House6b },
    { image: House6c },
    { image: House6d },
    { image: House6e },
    { image: House6f },
    { image: House6g },
    { image: House1h },
  ],
};

export const Amenities = [
  {
    icon: strikeicon,
    text: "Expansive oceanfront terrace for outdoor entertaining"
  },
  {
    icon: strikeicon,
    text: "Gournmet kitchen with top-of-the-line appliances"
  },
  {
    icon: strikeicon,
    text: "Private beach access for morning strolls and sunset views "
  },
  {
    icon: strikeicon,
    text: "Master suite with a spa-inspired bathroom and ocean facing balcony"
  },
  {
    icon: strikeicon,
    text: "Private gargae and ample storage space "
  }
]

