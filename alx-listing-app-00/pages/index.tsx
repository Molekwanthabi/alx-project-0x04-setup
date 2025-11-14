import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { HERO_BACKGROUND, PROPERTYLISTINGSAMPLE, FILTER_LABELS } from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";


const Home: NextPage = () => {
const [activeFilter, setActiveFilter] = useState<string | null>(null);


const filtered = activeFilter
? PROPERTYLISTINGSAMPLE.filter((p) => p.category.some((c) => c.toLowerCase().includes(activeFilter.toLowerCase())))
: PROPERTYLISTINGSAMPLE;


return (
<>
<Head>
<title>AlxListing — Find your favorite place</title>
</Head>


<section
className="relative bg-cover bg-center"
style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
>
<div className="bg-black/40">
<div className="max-w-7xl mx-auto px-4 py-28 text-center text-white">
<h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
<p className="mt-3 text-sm md:text-lg">The best prices for over 2 million properties worldwide.</p>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-4 py-8">
<h2 className="text-lg font-semibold mb-3">Filters</h2>
<div className="flex flex-wrap gap-2">
{FILTER_LABELS.map((label) => (
<Pill
key={label}
label={label}
active={activeFilter === label}
onClick={() => setActiveFilter(activeFilter === label ? null : label)}
/>
))}
</div>
</section>


<section className="max-w-7xl mx-auto px-4 py-6">
<h2 className="text-lg font-semibold mb-4">Listings</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filtered.map((p) => (
<PropertyCard key={p.name} property={p} />
))}
</div>
</section>
</>
);
};


export default Home;