const Footer: React.FC = () => {
return (
<footer className="bg-gray-50 border-t mt-12">
<div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600">
<div className="flex flex-col md:flex-row md:justify-between">
<div>
<h4 className="font-semibold">AlxListing</h4>
<p className="mt-1">© {new Date().getFullYear()} AlxListing. All rights reserved.</p>
</div>
<div className="mt-4 md:mt-0">
<p>Built with Tailwind CSS • Next.js</p>
</div>
</div>
</div>
</footer>
);
};


export default Footer;