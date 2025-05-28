import React from 'react';
import dayjs from 'dayjs';

interface WeekViewProps {
    startDate: Date,
    selectedDate?: Date,
    darkMode?: boolean
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const WeekView: React.FC<WeekViewProps> = ({startDate, selectedDate, darkMode}) => {
    const start = dayjs(startDate);
    const weekDates = Array.from({length: 7}, (_, i) => start.add(i, 'day'));

    return (
        <div className="h-screen bg-white py-2 items-start flex">
            <div
                className="flex bg-white shadow-md justify-start md:justify-center rounded-md overflow-x-auto py-5 px-2 h-40 w-full space-x-8">
                {weekDates.map((date, index) => {
                    const isToday = dayjs().isSame(date, 'day');
                    return (
                        <div
                            key={index}
                            className={`flex group  ${
                                isToday ? 'bg-slate-800 shadow-lg' : 'hover:bg-green-200 hover:border-[1px] hover:shadow-lg'
                            } rounded-lg transition-all duration-300 cursor-pointer justify-center w-16 relative`}
                        >
                            {isToday && (
                                <span className="flex h-3 w-3 absolute -top-1 -right-1">
                  <span
                      className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-black"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                            )}
                            <div className="flex items-center px-4 py-4">
                                <div className="text-center">
                                    <p
                                        className={`text-sm transition-all duration-300 ${
                                            isToday ? 'text-gray-100' : 'text-gray-900 group-hover:text-slate-800'
                                        }`}
                                    >
                                        {daysOfWeek[date.day()]}
                                    </p>
                                    <p
                                        className={`mt-3 font-medium transition-all duration-300 ${
                                            isToday ? 'text-white font-bold' : 'text-gray-900 group-hover:text-slate-800 group-hover:font-bold'
                                        }`}
                                    >
                                        {date.date()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};