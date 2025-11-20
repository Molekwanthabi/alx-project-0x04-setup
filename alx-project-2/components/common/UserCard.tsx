import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-700 mb-1">📧 {email}</p>
      <p className="text-sm text-gray-500">
        🏠 {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
