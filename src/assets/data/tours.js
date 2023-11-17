import { supabaseUrl } from "../../services/supabase";
const imageUrl = `${supabaseUrl}/storage/v1/object/public/tours-imgs/`;

export const tours = [
  {
    name: "The Pride Explorer",
    duration: 3,
    group: 30,
    guides: 3,
    accomodation: "Sleep in cozy hotels",
    level: "Easy",
    price: 599,
    img: imageUrl + "tour-1.webp",
  },
  {
    name: "The Tribesman",
    duration: 10,
    group: 30,
    guides: 3,
    accomodation: "Sleep in a tribe hut",
    level: "Medium",
    price: 799,
    img: imageUrl + "tour-2.webp",
  },
  {
    name: "The Extreme Lover",
    duration: 20,
    group: 10,
    guides: 4,
    accomodation: "Sleep in a tent",
    level: "Extreme",
    price: 999,
    img: imageUrl + "tour-3.webp",
  },
];
