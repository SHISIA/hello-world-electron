import LibraryIcon from "../assets/folderIcons/zenClutterLibraryIcon.png";
import stackIcon from "../assets/folderIcons/stackIcon.png";
import BlueFolder from "../assets/folderIcons/projectsFolderIcon.png";
import GreenFolder from "../assets/folderIcons/areasPara.png";
import RedFolder from "../assets/folderIcons/paraResources.png";
import GreyFolder from "../assets/folderIcons/archivesPara.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import CustomStyling from "./CustomTreeItem.tsx";

function Dashboard() {
    return (
        <>
            <div className="w-full">
                <div className="relative w-full bg-white p-1 rounded-md px-3 h-8 my-2">
                    {/* Centered Name + Icon */}
                    <div
                        className="absolute left-14 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex  space-x-2">
                        <p className="text-xl">Dashboard</p>
                    </div>

                    {/* Right-aligned Library Icon */}
                    <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 inline-flex items-center space-x-4">
                        <div className="cursor-pointer">
                            <FontAwesomeIcon icon={faPlus} className=" text-slate-800 border-[2px] rounded-md p-2"/>
                        </div>
                        <div className="cursor-pointer">
                            <FontAwesomeIcon icon={faTrash}
                                             className="bg-white text-slate-800 border-[2px] rounded-md p-2"/>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-gray-300 p-1 rounded-md px-3 h-8 border-[1px] border-slate-600">
                    {/* Centered Name + Icon */}
                    <div
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center space-x-2">
                        <img src={LibraryIcon} className="w-5 h-5 ml-2" alt="stack icon"/>
                        <p className="text-xs text-slate-700">My Zen Clutter</p>
                    </div>

                    {/* Right-aligned Library Icon */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 inline-flex items-center">
                        <img src={stackIcon} alt="shelf icon" className="w-6 h-5"/>
                    </div>
                </div>

                {/*Folders div*/}
                <div className="w-full h-full overflow-hidden p-2">
                    <div className="flex flex-row justify-center items-start gap-4 w-full">
                        {[
                            { title: "Projects", icon: BlueFolder, color: "bg-blue-800" },
                            { title: "Areas", icon: GreenFolder, color: "bg-green-800" },
                            { title: "Resources", icon: RedFolder, color: "bg-red-700" },
                            { title: "Archives", icon: GreyFolder, color: "bg-gray-600" }
                        ].map(({ title, icon, color }) => (
                            <div
                                key={title}
                                className="flex flex-col items-start w-44 min-h-[250px] bg-white "
                            >
                                {/* Header bar */}
                                <div className={`w-full ${color} text-white font-bold rounded-md flex items-center px-0  space-x-3`}>
                                    <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
                                    <p className="text-xs font-thin">{title}</p>
                                </div>

                                {/* Content area */}
                                <div className="flex-1 w-full p-2 overflow-y-auto">
                                    {/* Replace with actual content or leave empty */}
                                    {/* Optional placeholder when there's no content */}
                                    {/* <p className="text-sm text-slate-400 italic">No content</p> */}
                                    <CustomStyling />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </>
    )
}

export default Dashboard;


