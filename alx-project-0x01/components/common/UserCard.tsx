import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4 border-b pb-2">
        <h2 className="text-xl font-semibold text-blue-600">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      <div className="text-gray-700 space-y-1">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p className="text-sm text-gray-600">{company.name}</p>
        <p className="italic text-sm text-gray-500">“{company.catchPhrase}”</p>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <p>{address.suite}, {address.street}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>

      <div className="mt-4 text-xs text-gray-400">
        User ID: {id}
      </div>
    </div>
  );
};

export default UserCard;
