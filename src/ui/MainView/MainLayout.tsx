// MenuLayout.tsx
import React, {useState} from "react";
import MenuButton from "./MenuButton";
import Dashboard from "../FileManager/Dashboard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faCirclePlus, faSliders} from "@fortawesome/free-solid-svg-icons";
import SpeechBubble from "./SpeechBubble.tsx";
import Home from "../Home/Home.tsx";

type View = "File Manager" | "Home" | "Settings" | "Help";

const MenuLayout: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>("Home");

    const renderView = () => {
        switch (currentView) {
            case "File Manager":
                return <Dashboard/>;
            case "Home":
                return <Home/>;
            case "Settings":
                return <div className="text-2xl font-bold">Adjust Settings</div>;
            case "Help":
                return <div className="text-2xl font-bold">Need Help?</div>;
            default:
                return null;
        }
    };

    const views: View[] = [ "File Manager" , "Home" , "Settings", "Help"];

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <div className="w-16 bg-white text-white flex flex-col items-center space-y-28 py-6 pt-10">
                {views.map((view) => (
                    <MenuButton
                        key={view}
                        label={view}
                        isActive={currentView === view}
                        onClick={() => setCurrentView(view)}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-8 bg-white w-1/2">{renderView()}</div>
            {/*<div className="bg-white h-auto ">*/}
            {/*AI Side bar*/}
                <div className="flex flex-col items-center p-6 w-fit h-fit shadow-xl bg-white overflow-y-auto">
                    <div
                        className="flex flex-row items-center p-1 px-3 w-fit space-x-5 border-[0px] border-gray-200 rounded-2xl ">
                        <div className="w-12 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                <radialGradient id="oDvWy9qKGfkbPZViUk7TCa" cx="-670.437" cy="617.13" r=".041"
                                                gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
                                                gradientUnits="userSpaceOnUse">
                                    <stop offset="0"stopColor="#1ba1e3"/>
                                    <stop offset="0"stopColor="#1ba1e3"/>
                                    <stop offset=".3"stopColor="#5489d6"/>
                                    <stop offset=".545"stopColor="#9b72cb"/>
                                    <stop offset=".825"stopColor="#d96570"/>
                                    <stop offset="1"stopColor="#f49c46"/>
                                </radialGradient>
                                <path fill="url(#oDvWy9qKGfkbPZViUk7TCa)"
                                      d="M22.882,31.557l-1.757,4.024c-0.675,1.547-2.816,1.547-3.491,0l-1.757-4.024	c-1.564-3.581-4.378-6.432-7.888-7.99l-4.836-2.147c-1.538-0.682-1.538-2.919,0-3.602l4.685-2.08	c3.601-1.598,6.465-4.554,8.002-8.258l1.78-4.288c0.66-1.591,2.859-1.591,3.52,0l1.78,4.288c1.537,3.703,4.402,6.659,8.002,8.258	l4.685,2.08c1.538,0.682,1.538,2.919,0,3.602l-4.836,2.147C27.26,25.126,24.446,27.976,22.882,31.557z"/>
                                <radialGradient id="oDvWy9qKGfkbPZViUk7TCb" cx="-670.437" cy="617.13" r=".041"
                                                gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
                                                gradientUnits="userSpaceOnUse">
                                    <stop offset="0"stopColor="#1ba1e3"/>
                                    <stop offset="0"stopColor="#1ba1e3"/>
                                    <stop offset=".3"stopColor="#5489d6"/>
                                    <stop offset=".545"stopColor="#9b72cb"/>
                                    <stop offset=".825"stopColor="#d96570"/>
                                    <stop offset="1"stopColor="#f49c46"/>
                                </radialGradient>
                                <path fill="url(#oDvWy9qKGfkbPZViUk7TCb)"
                                      d="M39.21,44.246l-0.494,1.132	c-0.362,0.829-1.51,0.829-1.871,0l-0.494-1.132c-0.881-2.019-2.467-3.627-4.447-4.506l-1.522-0.676	c-0.823-0.366-0.823-1.562,0-1.928l1.437-0.639c2.03-0.902,3.645-2.569,4.511-4.657l0.507-1.224c0.354-0.853,1.533-0.853,1.886,0	l0.507,1.224c0.866,2.088,2.481,3.755,4.511,4.657l1.437,0.639c0.823,0.366,0.823,1.562,0,1.928l-1.522,0.676	C41.677,40.619,40.091,42.227,39.21,44.246z"/>
                            </svg>
                        </div>
                        {/*<p>HI, I AM YOUR AI ASSISTANT.</p>*/}

                    </div>
                    <p className="font-light text-md my-3 italic ">"How can our AI transform your experience?"</p>
                    {/*AI side Search bar */}
                    <div className="flex flex-row items-center p-6 w-fit space-x-3">
                        <div className="w-8">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512">
                                <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                            </svg>
                        </div>
                        <input className="border-slate-700 border-[1px] rounded-xl text-sm p-2 w-full" type={"text"}
                               alt="prompt input" placeholder="Enter your prompt here"/>
                        <div className="w-12 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                                 fill="#000000">
                                <path
                                    d="M476 3.2c-1.2-.7-2.5-1.1-3.8-1.2-1.3-.1-2.7.1-4 .5L12.3 157.6c-5.7 1.9-9.5 7.1-9.3 13.1s4.2 11 10.1 12.5l180.1 44.5 44.5 180.1c1.5 5.9 6.9 10.1 12.9 10.1h.3c6-0.1 11.2-3.8 13.1-9.3L509.6 43.8c.4-1.3.6-2.6.5-3.9-.2-1.4-.6-2.7-1.3-3.9s-1.8-2.3-2.9-3.2c-1.1-.9-2.4-1.7-3.9-2.2zM230.6 305.4l-24.3-98.5 185.2-140.4L230.6 305.4z"/>
                            </svg>
                        </div>
                    </div>
                    {/*AI Card*/}
                    {/*<div*/}
                    {/*    className="rounded-xl border-[1px] shadow-md p-10 px-12 mx-2 flex flex-col items-center justify-center text-center">*/}
                    {/*    <FontAwesomeIcon icon={faSearch} className="w-6 h-6 mb-2"/>*/}
                    {/*    <p>Real-time search</p>*/}
                    {/*    <p className="italic text-sm text-gray-500">"Summarize the latest news on AI"</p>*/}
                    {/*</div>*/}
                    {/*AI answer and question*/}
                    <SpeechBubble/>
                    {/*Tabs*/}
                    <div className="flex-row grid grid-rows-2 grid-cols-2 gap-4 p-3">
                        {/*Manage tab buttons*/}
                        <button className="bg-slate-700 rounded-md text-white p-2">
                            <FontAwesomeIcon className="px-1" icon={faSliders}/>
                            Manage Tabs
                        </button>
                        {/* Add tab button*/}
                        <button className="bg-slate-700 rounded-md text-white p-2">
                            <FontAwesomeIcon className="px-1" icon={faAdd}/>
                            Add Tab
                        </button>

                    </div>
                    {/*Favorites div*/}
                    <div className="flex flex-col items-start justify-start text-start w-full space-y-2">
                        <div className="p-2 bg-white shadow-md w-full mb-2">
                            <p className="text-slate-700 text-lg ">Favorites</p>
                        </div>
                        <button title="Add Favorites">
                            <FontAwesomeIcon icon={faCirclePlus} className="w-12 h-12 mb-2"/>
                        </button>
                    </div>
                </div>
            {/*</div>*/}
        </div>
    );
};

export default MenuLayout;
