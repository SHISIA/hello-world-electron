// PricingSection.tsx
import React from 'react';
import AppLogo from "../assets/AppLogo.png";
import LibraryIcon from "../assets/folderIcons/zenClutterLibraryIcon.png"
import stackIcon from "../assets/folderIcons/stackIcon.png";
import BlueFolder from "../assets/folderIcons/projectsFolderIcon.png";
import GreenFolder from "../assets/folderIcons/areasPara.png";
import RedFolder from "../assets/folderIcons/paraResources.png";
import GreyFolder from "../assets/folderIcons/archivesPara.png";
import IdealIcon from "../assets/folderIcons/idealIcon.png";
import IntuitiveIcon from "../assets/folderIcons/intuitiveIcon.png";
import Streamlinedicon from "../assets/folderIcons/streamlinedOrganization.png";
import Flexible from "../assets/folderIcons/flexible.png";
import Clear from "../assets/folderIcons/clearDistinctionIcon.png";
import Focus from "../assets/folderIcons/filter_tilt_shift.png";
import Reduced from "../assets/folderIcons/reduce_capacity.png";
import {useNavigate} from "react-router-dom";

const FolderSection: React.FC = () => {

    const  navigate = useNavigate();

    const handlePARADashboardClick = () => {
        navigate("/main");
    }
    return (
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 my-6">
            <div className={"flex flex-row items-center justify-center "}>
                <img src={AppLogo} alt="App Logo" className={"w-10 h-8"}/>
                <p className={"text-xl text-red-500 font-bold"}>&nbsp;Clutter</p>
            </div>
            <div className={"flex flex-col items-center justify-center py-2 px-16"}>
                <p className="text-slate-700 font-bold text-lg ">Welcome to Zen Clutter</p>
                <p className="text-slate-700 font-bold text-lg">Your ultimate File Management Solution!</p>
                <p className="text-sm text-slate-700 font-normal">Organizing your digital files is crucial for
                    productivity and ease of access. We offer two powerful methods to structure your folders. Single
                    Root Folder and PARA Method. Let's explore both options:</p>
            </div>
            {/* Container for folder cards */}
            <div className="flex justify-center space-x-2">
                {/*SRF*/}
                <div className="shadow-md w-[450px] bg-white items-center justify-center p-6 rounded-md">
                    <div className="justify-end items-end flex space-x-36 w-full bg-gray-600 p-1 rounded-md px-3">
                        <div className="inline-flex items-center justify-center">
                            <img src={LibraryIcon} alt="shelf icon" className={"w-6 h-5"}/>
                            <p className="text-xs text-white">&nbsp;My Zen Clutter</p>
                        </div>
                        <img src={stackIcon} className={"w-5 h-5"} alt="stack icon"/>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 space-x-3">
                        <div
                            className="bg-blue-800 text-white font-bold rounded-md w-56 justify-start items-center flex space-x-3">
                            <img src={BlueFolder} alt="App Logo" className={"w-6 h-6"}/>
                            <p className="text-xs font-thin">Personal</p>
                        </div>
                        <div
                            className="bg-green-800 text-white font-bold rounded-md w-56 justify-start flex space-x-3  items-center">
                            <img src={GreenFolder} alt="App Logo" className={"w-6 h-6"}/>
                            <p className="text-xs font-thin">Business</p>
                        </div>
                        <div
                            className="bg-red-700 text-white font-bold rounded-md w-56 justify-start flex space-x-3  items-center">
                            <img src={RedFolder} alt="App Logo" className={"w-6 h-6"}/>
                            <p className="text-xs font-thin">Media</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2 space-x-3">
                        <p className="font-medium text-lg mb-2">Single Root Folder &nbsp; <a className="font-thin">(Simplicity
                            Meets Efficiency)</a></p>
                        <p className="font-normal italic text-slate-600">"With the Single Root Folder Method , all your
                            files are organized under one primary folder. This approach is straightforward and easy to
                            manage, ensuring quick access to your files."</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-500 mt-2">Benefits</p>
                        <div className="flex text-sm space-x-3 justify-start items-center p-1">
                            <img src={Streamlinedicon} alt="streamline"/>
                            <p>Streamlined organization.</p>
                        </div>
                        <div className="flex text-sm space-x-3 justify-start items-center p-1">
                            <img src={IntuitiveIcon} alt="intuitive"/>
                            <p>Intuitive navigation.</p>
                        </div>
                        <div className="flex text-sm space-x-3 justify-start items-center p-1">
                            <img src={IdealIcon} alt="ideal"/>
                            <p>Ideal for users who prefer a minimalist approach.</p>
                        </div>
                    </div>
                </div>
                {/*PARA*/}
                <div className="shadow-md w-[450px] bg-white p-6 rounded-md">
                    <div className="justify-end items-end flex space-x-36 w-full bg-gray-600 p-1 rounded-md px-3">
                        <div className="inline-flex items-center justify-center">
                            <img src={LibraryIcon} alt="shelf icon" className={"w-6 h-5"}/>
                            <p className="text-xs text-white">&nbsp;My Zen Clutter</p>
                        </div>
                        <img src={stackIcon} className={"w-5 h-5"} alt="stack icon"/>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 space-x-3">
                        <div
                            className="bg-blue-800 text-white font-bold rounded-md w-56 justify-start flex space-x-3  items-center">
                            <img src={BlueFolder} alt="App Logo" className={"w-6 h-6"}/>
                            <p className="text-xs font-thin">Projects</p>
                        </div>
                        <div
                            className="bg-green-800 text-white font-bold rounded-md w-56 justify-start flex space-x-3  items-center">
                            <img src={GreenFolder} alt="App Logo" className={"w-6 h-6"}/>
                            <p className="text-xs font-thin">Areas</p>
                        </div>
                        <div
                            className="bg-red-700 text-white font-bold rounded-md w-56 justify-start flex space-x-3  items-center">
                            <img src={RedFolder} alt="App Logo" className={"w-6 h-6"}/>
                            <p className="text-xs font-thin">Resources</p>
                        </div>
                        <div
                            className="bg-gray-600 text-white font-bold rounded-md w-56 justify-start flex space-x-3  items-center">
                            <img src={GreyFolder} alt="App Logo" className={"w-6 h-6"}/>
                            <p className="text-xs font-thin">Archives</p>
                        </div>
                    </div>

                    {/*    PARA wordings*/}
                    <div className="flex flex-col items-center justify-center pt-2 space-x-3">
                        <p className="font-medium text-lg mb-2">PARA Method&nbsp; <a
                            className="font-thin">(Projects/Areas/Resources/Archives)</a></p>
                        <p className="font-normal italic text-slate-600">"The PARA method is a system for organizing
                            digital files and information into four categories:"</p>
                        <ul className="list-decimal list-inside space-y-2 pt-2">
                            <li className="flex items-start justify-start">
                                <p className="font-medium text-slate-700">✅Projects</p>
                                <p className="italic text-sm text-gray-500">&nbsp;&nbsp;:active tasks or goals you're
                                    currently working on.</p>
                            </li>
                            <li className="flex items-start  justify-start">
                                <p className="font-medium text-slate-700">✅Areas</p>
                                <p className="italic text-sm text-gray-500">&nbsp;&nbsp;:ongoing responsibilities or
                                    interests, like Health or Finances.</p>
                            </li>
                            <li className="flex items-start justify-start">
                                <p className="font-medium text-slate-700">✅Resources</p>
                                <p className="italic text-sm text-gray-500">&nbsp;&nbsp;:reference materials or content
                                    you might need in future, like articles or templates.</p>
                            </li>
                            <li className="flex items-start justify-start">
                                <p className="font-medium text-slate-700">✅Archives</p>
                                <p className="italic text-sm text-gray-500">&nbsp;&nbsp;:inactive items from Projects,
                                    Areas, or Resources that you want to keep but don't need frequently.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-gray-500 mt-2">Benefits</p>
                        <div className="flex text-sm space-x-3 justify-start items-center p-1">
                            <img src={Clear} alt="streamline"/>
                            <p>Clear structure: makes it easy to find and manage files.</p>
                        </div>
                        <div className="flex text-sm space-x-3 justify-start items-center p-1">
                            <img src={Focus} alt="intuitive"/>
                            <p>Focus: helps you prioritize active projects.</p>
                        </div>
                        <div className="flex text-sm space-x-3 justify-start items-center p-1">
                            <img src={Flexible} alt="ideal"/>
                            <p>Flexibility: works for any type of digital content.</p>
                        </div>
                        <div className="flex text-sm space-x-3 justify-start items-center p-1">
                            <img src={Reduced} alt="ideal"/>
                            <p>Reduced clutter: Archives keep your workspace clean.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-32 w-fit justify-center items-center mx-36 rounded-md bg-white shadow-md p-6 m-2">
                <p className="font-bold text-gray-500 mt-2">How to Choose</p>
                <p className="italic text-sm text-gray-500">Consider your workflow, the volume of files you handle,
                    and your personal preference Both methods have their strengths. Ready to optimize your file
                    management? Select your preferred method and let's get started!</p>
            </div>
            <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 px-4 py-3 flex justify-center space-x-40 ">
                <button className="bg-red-700 text-white px-6 py-2 h-11  hover:bg-transparent hover:border-green-500 hover:border-2 hover:text-slate-700 transition rounded-full w-96">
                    Select Single Root Folder
                </button>
                <button className="bg-blue-700 text-white px-6 py-2 h-11 hover:bg-transparent hover:border-green-500 hover:border-2 hover:text-slate-700 transition rounded-full w-96"
                 onClick={handlePARADashboardClick}>
                    Select PARA Method
                </button>
            </div>

        </div>
    );
};


export default FolderSection;
