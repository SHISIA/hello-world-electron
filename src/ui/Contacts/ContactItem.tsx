// components/ContactItem.tsx

import React from "react";

import temp from "../assets/templates/img.png";
/**
 * Props for the ContactItem component.
 */
interface ContactItemProps {
    name: string;
    email: string;
    phone: string;
}

/**
 * A presentational component that displays individual contact details.
 */
const ContactItem: React.FC<ContactItemProps> = ({ name, email, phone }) => {
    return (
        <div className="flex items-center justify-start space-x-5 p-4 bg-white rounded-xl shadow hover:shadow-md transition-all">
            <img
                loading="lazy"
                src={temp}
                alt={name}
                className="w-16 h-16 rounded-md object-cover"
            />
            <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-600">{email}</p>
                <p className="text-sm text-gray-600">{phone}</p>
            </div>
            <button
                className="text-blue-600 hover:underline text-sm font-medium"
                onClick={() => alert(`Edit ${name}`)}
            >
                Edit
            </button>
        </div>
    );
};

export default ContactItem;
