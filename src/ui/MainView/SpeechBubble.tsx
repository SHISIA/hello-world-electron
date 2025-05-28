import React from "react";

type SpeechBubbleProps = {
    message: string;
    username: string;
    index: number;
};

const borderColors = [
    "border-green-500",
    "border-teal-500",
    "border-purple-400",
    "border-orange-400",
];

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ message, username, index }) => {
    const isEven = index % 2 === 0;
    const borderColor = borderColors[index % 4];

    return (
        <div
            className={`relative text-sm leading-7 px-6 py-4 mt-4 mb-20 bg-green-200 text-[#9fa2a7] rounded-md ${
                isEven ? "border-l-4" : "border-r-4"
            } ${borderColor}`}
        >
            <p className="relative text-slate-700">
                <span className="text-xl font-serif leading-3 mr-1 text-slate-800">“</span>
                {message}
                <span className="text-xl font-serif leading-3 mr-1 text-slate-800">"</span>

                <span className="italic float-right text-black font-medium">- {username}</span>
            </p>
            {/*lowest triangle in chat bubble*/}
            <div
                className={`absolute w-0 h-0 border-solid  ${
                    isEven
                        ? "border-t-[45px] border-l-[40px] border-t-[#BBF7D0] border-l-transparent left-2 -bottom-11"
                        : "border-t-[45px] border-r-[40px] border-t-[#BBF7D0] border-r-transparent right-2 -bottom-11"
                }`}
            />
        </div>
    );
};

const AlternatingSpeechBubbles: React.FC = () => {
    const messages = new Array(2).fill(
        "So I created this thread to see if anyone wants to work on creating an N Wheeled class vehicle with me, as opposed to a bunch of people banging their heads against the wall separately."
    );

    return (
        <div className="mt-4 text-center overflow-y-auto bg-white max-w-80 max-h-96 m-2 justify-start items-start w-full px-3">
            <h1 className="uppercase text-sm text-start">AI Chat</h1>
            {messages.map((msg, idx) => (
                <SpeechBubble
                    key={idx}
                    message={msg}
                    username="Feuern_D"
                    index={idx}
                />
            ))}
        </div>
    );
};

export default AlternatingSpeechBubbles;