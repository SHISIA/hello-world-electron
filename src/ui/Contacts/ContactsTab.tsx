// pages/ContactsTab.tsx

import React from "react";
import ContactItem from "./ContactItem";

/**
 * A single contact object shape.
 */
interface Contact {
    name: string;
    email: string;
    phone: string;
}

/**
 * Mock data for demonstration purposes.
 * In a real application, this could come from an API or database.
 */
const contacts: Contact[] = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    { name: "James Shisia", email: "shisia@prodevs.com", phone: "+254 700 000 000" },
];

/**
 * A container component that lists all contacts using ContactItem.
 */
const ContactsTab: React.FC = () => {
    return (
        <div className="p-6 bg-slate-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Contacts</h2>
            <div className="space-y-4">
                {contacts.map((contact, index) => (
                    <ContactItem key={index} {...contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactsTab;
