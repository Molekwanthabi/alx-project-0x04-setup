import type { PropertyProps } from "@/interfaces";


const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
const { name, price, rating, image, address, discount } = property;


return (
<article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
<div className="h-44 bg-gray-100 flex items-center justify-center">
<img src={image} alt={name} className="w-full h-full object-cover" />
</div>
<div className="p-3">
<div className="flex items-start justify-between">
<h3 className="font-semibold text-sm">{name}</h3>
<div className="text-sm font-medium">${price}</div>
</div>
<p className="text-xs text-gray-500 mt-1">{address.city}, {address.country}</p>
<div className="flex items-center justify-between mt-3">
<div className="text-xs text-gray-600">⭐ {rating.toFixed(2)}</div>
{discount ? <div className="text-xs text-green-600">{discount}% off</div> : null}
</div>
</div>
</article>
);
};


export default PropertyCard;