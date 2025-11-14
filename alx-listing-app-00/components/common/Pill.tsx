type PillProps = {
label: string;
onClick?: () => void;
active?: boolean;
};


const Pill: React.FC<PillProps> = ({ label, onClick, active = false }) => {
return (
<button
onClick={onClick}
className={`px-3 py-1 rounded-full text-sm border ${active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700"}`}
>
{label}
</button>
);
};


export default Pill;