import type { PropertyProps } from "@/interfaces";


export const HERO_BACKGROUND = "https://images.unsplash.com/photo-1506674196210-6f3f8d2f9d6b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc";


export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
{
name: "Villa Ocean Breeze",
address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
rating: 4.89,
category: ["Luxury Villa", "Pool", "Free Parking"],
price: 3200,
offers: { bed: "3", shower: "3", occupants: "4-6" },
image: "https://example.com/image1.jpg",
discount: "",
},
{
name: "Mountain Escape Chalet",
address: { state: "Aspen", city: "Colorado", country: "USA" },
rating: 4.7,
category: ["Mountain View", "Fireplace", "Self Checkin"],
price: 1800,
offers: { bed: "4", shower: "2", occupants: "5-7" },
image: "https://example.com/image2.jpg",
discount: "30",
},
// ... include the rest of the 20 sample objects from the assignment here (omitted for brevity)
];


export const FILTER_LABELS = [
"Top Villa",
"Self Checkin",
"Beachfront",
"Mountain View",
"Pet Friendly",
"Free Parking",
"Pool",
];
