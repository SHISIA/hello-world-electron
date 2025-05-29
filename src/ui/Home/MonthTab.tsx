// DashboardSection.tsx

import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import dayjs from "dayjs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
const DashboardSection: React.FC = () => {
;
    const [value, setValue] = useState({
        startDate: dayjs().format("YYYY-MM-DD"),
        endDate: dayjs().format("YYYY-MM-DD"),
    });


    // @ts-ignore
    return (
        // Section with padding and background color
        <section className="">
            <div className="w-fit max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto">
                <div className="flex flex-col md:flex-row max-md:gap-3 items-start justify-start mb-5">
                    <div className="flex flex-row items-center justify-start text-start w-64 gap-4">

                        <Datepicker
                            value={value}
                            onChange={setValue}
                            useRange={false}
                            showShortcuts={false}
                            asSingle={true}
                            primaryColor="blue"
                            clearIcon={null}
                            inputClassName="bg-transparent border border-transparent rounded-lg w-fit h-12 px-2  text-transparent cursor-pointer
                            focus:ring-2 focus:ring-transparent focus:outline-none text-sm placeholder:text-transparent placeholder:italic "
                            inputProps={{
                                readOnly: true,
                            }}
                        />

                        {/* h6 acts as the open trigger */}
                        <div
                            className="text-xl flex-row flex justify-start items-center font-semibold text-gray-900 leading-6 cursor-pointer -ml-[250px] pointer-events-none bg-white w-72 z-10"
                            // className="text-xl font-semibold text-gray-900 leading-6 cursor-pointer absolute -top-6 -left-72 z-10"

                        >
                            <p>Today, January 2024</p>
                            <button className="border-gray-300 border-[0px] items-center justify-center w-6 h-6 m-2 rounded-sm">
                                <FontAwesomeIcon icon={faCaretDown} color="gray" size="lg"  />
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" relative">
                    <div className="grid grid-cols-7 border-t border-gray-200 sticky top-0 left-0 w-full">
                        <div
                            className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900"></div>
                        <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">Jan
                            7
                        </div>
                        <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">Jan
                            8
                        </div>
                        <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-indigo-600">Jan
                            9
                        </div>
                        <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">Jan
                            10
                        </div>
                        <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">Jan
                            11
                        </div>
                        <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">Jan
                            12
                        </div>
                    </div>
                    <div className="hidden grid-cols-7 sm:grid w-full overflow-x-auto">
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
                            <span className="text-xs font-semibold text-gray-400">07:00 am</span>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-purple-600 bg-purple-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">Pickup the grandmother</p>
                                <p className="text-xs font-semibold text-purple-600">06:00 - 07:30</p>
                            </div>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-green-600 bg-green-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">Workout and Yoga Session</p>
                                <p className="text-xs font-semibold text-green-600">06:00 - 07:55</p>
                            </div>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t  border-gray-200 transition-all hover:bg-stone-100"></div>

                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
                            <span className="text-xs font-semibold text-gray-400">08:00 am</span>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-blue-600 bg-blue-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">Project Task Review</p>
                                <p className="text-xs font-semibold text-blue-600">08:00 - 08:25</p>
                            </div>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100"></div>

                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
                            <span className="text-xs font-semibold text-gray-400">09:00 am</span>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-yellow-600 bg-yellow-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">Breakfast with Dhruv Patel</p>
                                <p className="text-xs font-semibold text-yellow-600">08:00 - 09:00</p>
                            </div>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100"></div>

                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
                            <span className="text-xs font-semibold text-gray-400">10:00 am</span>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-green-600 bg-green-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">Dancing Zumba class</p>
                                <p className="text-xs font-semibold text-green-600">09:30 - 10:00</p>
                            </div>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-purple-600 bg-purple-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">Doctor’s Appointment for
                                    Mother</p>
                                <p className="text-xs font-semibold text-purple-600">09:00 - 10:45</p>
                            </div>
                        </div>

                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
                            <span className="text-xs font-semibold text-gray-400">11:00 am</span>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-blue-600 bg-blue-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">Daily Standup Meeting</p>
                                <p className="text-xs font-semibold text-blue-600">10:00 - 11:00</p>
                            </div>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-yellow-600 bg-yellow-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">School Friend’s Birthday
                                    Party</p>
                                <p className="text-xs font-semibold text-yellow-600">10:00 - 11:45</p>
                            </div>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100"></div>

                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
                            <span className="text-xs font-semibold text-gray-400">12:00 pm</span>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
                            <div className="rounded p-1.5 border-l-2 border-blue-600 bg-blue-50">
                                <p className="text-xs font-normal text-gray-900 mb-px">Meeting with Project Manager </p>
                                <p className="text-xs font-semibold text-blue-600">11:00 - 12:30</p>
                            </div>
                        </div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100"></div>
                        <div
                            className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100"></div>
                    </div>
                    <div className="flex sm:hidden border-t border-gray-200 items-center w-full">
                        <div className="flex flex-col">
                            <div
                                className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">07:00
                                am
                            </div>
                            <div
                                className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">08:00
                                am
                            </div>
                            <div
                                className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">09:00
                                am
                            </div>
                            <div
                                className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">10:00
                                am
                            </div>
                            <div
                                className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">11:00
                                am
                            </div>
                            <div
                                className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">12:00
                                pm
                            </div>
                        </div>
                        <div className="grid grid-cols-1 w-full">
                            <div className="w-full h-20 border-b border-gray-200 p-1.5">
                                <div className="w-full h-full rounded p-1.5 border-l-2 border-purple-600 bg-purple-50">
                                    <p className="text-xs font-normal text-gray-900 mb-px">Pickup the grandmother</p>
                                    <p className="text-xs font-semibold text-purple-600">06:00 - 07:30</p>
                                </div>
                            </div>
                            <div className="w-full h-20 border-b border-gray-200 p-1.5"></div>
                            <div className="w-full h-20 border-b border-gray-200 p-1.5"></div>
                            <div className="w-full h-20 border-b border-gray-200 p-1.5"></div>
                            <div className="w-full h-20 border-b border-gray-200 p-1.5"></div>
                            <div className="w-full h-20 border-b border-gray-200 p-1.5">
                                <div className="w-full h-full rounded p-1.5 border-l-2 border-blue-600 bg-blue-50">
                                    <p className="text-xs font-normal text-gray-900 mb-px">Meeting with Project
                                        Manager </p>
                                    <p className="text-xs font-semibold text-blue-600">11:00 - 12:30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default DashboardSection;
