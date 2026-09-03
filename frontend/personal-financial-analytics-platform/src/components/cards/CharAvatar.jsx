import React from "react";

const CharAvatar = ({ fullName, width, height, style }) => {

    const getInitials = (name) => {
        if (!name) return "";

        const words = name.trim().split(" ");

        if (words.length === 1) {
            return words[0].charAt(0).toUpperCase();
        }

        return (
            words[0].charAt(0) +
            words[words.length - 1].charAt(0)
        ).toUpperCase();
    };

    return (
        <div
            className={`${width || "w-12"} ${height || "h-12"} ${
                style || ""
            } flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100`}
        >
            {getInitials(fullName || "")}
        </div>
    );
};

export default CharAvatar;