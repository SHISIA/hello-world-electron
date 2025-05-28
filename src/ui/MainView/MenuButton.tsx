// MenuButton.tsx
import React from "react";

type MenuButtonProps = {
    label: string;
    isActive?: boolean;
    onClick: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`h-10 w-36 px-6 py-2 text-center  rounded-t-3xl -rotate-90 ${
                isActive ? "bg-white text-slate-800" : "text-gray-200 bg-slate-900 hover:bg-gray-700"
            }`}
        >
            {label}
        </button>
    );
};

export default MenuButton;
