// components/common/UserModal.tsx
import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter full name"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter phone"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Website</label>
            <input
              type="text"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter website"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
