import React, {type FC, type JSX, useState} from "react";
import {WeekView} from "./Weekview.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarWeek} from "@fortawesome/free-solid-svg-icons/faCalendarWeek";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import MonthTab from "./MonthTab.tsx";
import dayjs from "dayjs";
import {DateCalendar, DayCalendarSkeleton, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Box, Grid, Typography} from "@mui/material";

const initialValue = dayjs('2022-04-17');
const MonthListView = () => <div><MonthTab /></div>;
const months = Array.from({ length: 12 }, (_, i) => dayjs().month(i));
const YearView = () => <div><LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box p={2}>
        <Typography variant="h4" gutterBottom>
            Year View – {dayjs().year()}
        </Typography>
        <Grid container spacing={2}>
            {months.map((month, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Typography variant="h6" align="center">
                        {month.format("MMMM")}
                    </Typography>
                    <DateCalendar
                        defaultValue={month.startOf("month")}
                        views={["day"]}
                        readOnly
                        sx={{
                            "& .MuiPickersDay-root": {
                                aspectRatio: "1 / 1",
                                borderRadius: "50%",
                                "&:hover": {
                                    backgroundColor: "#e3f2fd",
                                },
                                "&.Mui-selected": {
                                    backgroundColor: "#1976d2",
                                    color: "#fff",
                                },
                            },
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    </Box>
</LocalizationProvider></div>;

const App: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState("Week"); // Track which tab is active
    const startOfWeek = new Date(); // For WeekView

    type Tab = {
        label: string;
        icon: JSX.Element;
        disabled?: boolean;
    };

    const tabs: Tab[] = [
        {
            label: "Week",
            icon: <FontAwesomeIcon icon={faCalendarWeek} className="mr-2" />,
        },
        {
            label: "Month",
            icon: <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />,
        },
        {
            label: "Month List",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 mr-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                    />
                </svg>
            ),
        },
        {
            label: "Year",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 mr-2"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ];

    // Renders the view based on active tab
    const renderActiveView = () => {
        switch (activeTab) {
            case "Week":
                return (
                    <WeekView startDate={startOfWeek} selectedDate={selectedDate} darkMode={false} />
                );
            case "Month":
                return <div className="w-full bg-slate-400"><LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        defaultValue={initialValue}
                        renderLoading={() => <DayCalendarSkeleton />}
                        sx={{
                            width: '100%',
                            backgroundColor: 'white',
                            '& .MuiDayCalendar-header': {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(7, 1fr)', // 7 equal columns
                                justifyItems: 'center',
                            },
                            '& .MuiDayCalendar-weekContainer': {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(7, 1fr)', // 7 days per week
                            },
                            '& .MuiPickersDay-root': {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 0,
                                aspectRatio: '1 / 1',       // make it square
                                width: '100%',              // take full width of cell
                                maxWidth: '100%',           // no restriction
                                padding: 0,                 // remove extra padding
                                '&.Mui-selected': {
                                    borderRadius: '4%',
                                    backgroundColor: '#BBF7D0',
                                    border: '1.5px solid #BBF7D0',
                                    color: 'black',
                                },
                                '&:hover': {
                                    borderRadius: '4%',
                                    backgroundColor: 'transparent',
                                    border: '1px solid gray',

                                },
                            },
                        }}
                    />


                </LocalizationProvider></div>;
            case "Month List":
                return <MonthListView />;
            case "Year":
                return <YearView />;
            default:
                return null;
        }
    };

    // Tab list component
    const Tabs: FC = () => {
        return (
            <div className="border-b border-gray-200 dark:border-gray-300">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {tabs.map((tab, idx) => (
                        <li key={idx} className="me-2 cursor-pointer">
                            {tab.disabled ? (
                                <span className="inline-flex items-center p-4 text-gray-400 cursor-not-allowed">
                  {tab.icon}
                                    {tab.label}
                </span>
                            ) : (
                                <a
                                    onClick={() => setActiveTab(tab.label)}
                                    className={`inline-flex items-center p-4 rounded-t-lg border-b-2 group
                    ${activeTab === tab.label
                                        ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    }`}
                                >
                  <span
                      className={`group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 ${activeTab === tab.label ? "text-blue-600 dark:text-blue-500" : "text-gray-400"
                      }`}
                  >
                    {tab.icon}
                  </span>
                                    {tab.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white p-2">
            <Tabs />
            <div className="mt-4">
                {renderActiveView()}
            </div>
        </div>
    );
};

export default App;
