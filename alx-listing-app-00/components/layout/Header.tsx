import Link from "next/link";
import { useState } from "react";


const Header: React.FC = () => {
const [query, setQuery] = useState("");


return (
<header className="bg-white shadow-sm sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-4">
<Link href="/">
<a className="font-bold text-xl">AlxListing</a>
</Link>


<nav className="hidden md:flex items-center gap-2 text-sm text-gray-600">
<Link href="#"><a className="py-1 px-2 hover:text-gray-900">Rooms</a></Link>
<Link href="#"><a className="py-1 px-2 hover:text-gray-900">Villas</a></Link>
<Link href="#"><a className="py-1 px-2 hover:text-gray-900">Countryside</a></Link>
<Link href="#"><a className="py-1 px-2 hover:text-gray-900">Mansions</a></Link>
</nav>
</div>


<div className="flex-1 px-4">
<div className="max-w-xl mx-auto">
<label className="relative block">
<input
value={query}
onChange={(e) => setQuery(e.target.value)}
className="w-full border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
placeholder="Search destination, property or city"
/>
</label>
</div>
</div>


<div className="flex items-center gap-4">
<Link href="#"><a className="text-sm">Sign in</a></Link>
<Link href="#"><a className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">Sign up</a></Link>
</div>
</div>
</div>
</header>
);
};


export default Header;