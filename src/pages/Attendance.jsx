import React, { useState, useEffect } from "react";

const API_BASE = "https://medical-backend-tfk0.onrender.com/api";

const Attendance = ({ currentUser }) => {
    const [selectedMonth, setSelectedMonth] = useState("");
    const [attendance, setAttendance] = useState([]);
    const [location, setLocation] = useState("Office");
    const [locationMap, setLocationMap] = useState({});

    // set current month
    useEffect(() => {
        const now = new Date();
        const month = now.toISOString().slice(0, 7);
        setSelectedMonth(month);
    }, []);

    // fetch attendance
    useEffect(() => {
        if (!selectedMonth) return;

        fetch(`${API_BASE}/attendance/${currentUser.name}/${selectedMonth}`)
            .then(res => res.json())
            .then(data => setAttendance(data))
            .catch(err => console.error(err));

    }, [selectedMonth]);

    // generate full month
    const generateMonthDates = (monthStr) => {
        const [year, month] = monthStr.split("-");
        const daysInMonth = new Date(year, month, 0).getDate();

        const dates = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const date = `${year}-${month}-${String(i).padStart(2, "0")}`;
            dates.push(date);
        }

        return dates;
    };

    // merge data
    const fullData = selectedMonth
        ? generateMonthDates(selectedMonth).map(date => {
            const record = attendance.find(a => a.date === date);

            return record || {
                date,
                signIn: null,
                signOut: null,
                status: "Absent"
            };
        })
        : [];

    console.log("attendance:", attendance);
    console.log("fullData:", fullData);
    console.log("currentUser:", currentUser);

    const today = new Date().toISOString().split("T")[0];
    const isToday = (date) => date === today;

    // refresh
    const refresh = () => {
        fetch(`${API_BASE}/attendance/${currentUser.name}/${selectedMonth}`)
            .then(res => res.json())
            .then(data => setAttendance(data));
    };

    // sign in
    const signIn = async () => {
        await fetch(`${API_BASE}/attendance/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: currentUser.name,
                location: locationMap[today] || "Office"
            })
        });

        refresh();
    };

    // sign out
    const signOut = async () => {
        await fetch(`${API_BASE}/attendance/signout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: currentUser.name
            })
        });

        refresh();
    };

    const totalWorkDays = attendance.filter(a => a.signIn).length;

    const totalLeaves = attendance.filter(a => a.status === "Leave").length;

    const totalHours = attendance.reduce((sum, a) => {
        if (a.signIn && a.signOut) {
            const s = new Date(`1970-01-01T${a.signIn}`);
            const e = new Date(`1970-01-01T${a.signOut}`);
            return sum + (e - s) / (1000 * 60 * 60);
        }
        return sum;
    }, 0).toFixed(2);

    const markLeave = async (date) => {
        await fetch(`${API_BASE}/attendance/leave`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: currentUser.name,
                date: date
            })
        });

        refresh();
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl font-bold">📅 Time Sheet</h2>
                <p className="text-gray-500">
                    {selectedMonth}
                </p>
            </div>

            {/* FILTERS */}
            <div className="flex gap-4 mb-6">

                {/* YEAR */}
                <select className="border p-2 rounded w-32">
                    <option>2026</option>
                </select>

                {/* MONTH */}
                <input
                    type="month"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border p-2 rounded"
                />

                {/* ROSTER */}
                <div className="bg-gray-100 px-4 py-2 rounded font-semibold">
                    Help Desk
                </div>

            </div>

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-3 gap-6 mb-6">

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p>Total Work Hours</p>
                    <h2 className="text-2xl text-blue-600">{totalHours}</h2>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p>Total Work Days</p>
                    <h2 className="text-2xl text-green-600">{totalWorkDays}</h2>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p>Total Leaves</p>
                    <h2 className="text-2xl text-red-600">{totalLeaves}</h2>
                </div>

            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm border">

                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="p-2">Date</th>
                            <th className="p-2">Shift</th>
                            <th className="p-2">In Time</th>
                            <th className="p-2">Out Date</th>
                            <th className="p-2">Out Time</th>
                            <th className="p-2">Location</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Working Hrs</th>
                        </tr>
                    </thead>

                    <tbody>
                        {fullData.map(row => {

                            const inTime = row.signIn || "-";
                            const outTime = row.signOut || "-";

                            let workingHours = "-";
                            if (row.signIn && row.signOut) {
                                const start = new Date(`1970-01-01T${row.signIn}`);
                                const end = new Date(`1970-01-01T${row.signOut}`);
                                const diff = (end - start) / (1000 * 60 * 60);
                                workingHours = diff.toFixed(2);
                            }

                            const day = new Date(row.date).getDay();


                            return (
                                <tr
                                    key={row.date}
                                    className={`text-center border-b ${row.status === "Leave"
                                        ? "bg-red-100"
                                        : !row.signIn
                                            ? "bg-white"
                                            : row.signIn
                                                ? "bg-blue-50"
                                                : ""
                                        }`}
                                >
                                    <td className="p-2">{row.date}</td>

                                    <td className="p-2">8:30 - 17:00</td>

                                    <td className="p-2">
                                        {isToday(row.date) && !row.signIn && row.status !== "Leave" ? (
                                            <div className="flex gap-2 justify-center">
                                                <button
                                                    onClick={signIn}
                                                    className="bg-green-500 text-white px-2 py-1 rounded"
                                                >
                                                    Sign In
                                                </button>

                                                <button
                                                    onClick={() => markLeave(row.date)}
                                                    className="bg-orange-500 text-white px-2 py-1 rounded"
                                                >
                                                    Leave
                                                </button>
                                            </div>
                                        ) : (
                                            inTime
                                        )}
                                    </td>

                                    <td className="p-2">
                                        {row.signOut ? row.date : "-"}
                                    </td>

                                    <td className="p-2">
                                        {isToday(row.date) && row.signIn && !row.signOut && row.status !== "Leave" ? (
                                            <button
                                                onClick={signOut}
                                                className="bg-red-500 text-white px-2 py-1 rounded"
                                            >
                                                Sign Out
                                            </button>
                                        ) : (
                                            outTime
                                        )}
                                    </td>

                                    <td className="p-2">
                                        <select
                                            disabled={row.signIn}
                                            value={locationMap[row.date] || "Office"}
                                            onChange={(e) => {
                                                locationMap[row.date] = e.target.value;
                                                setLocationMap(locationMap);
                                                setAttendance([...attendance]);
                                            }}
                                            className="border p-1 rounded"
                                        >
                                            <option value="Office">Office</option>
                                            <option value="WFH">WFH</option>
                                        </select>
                                    </td>

                                    <td className="p-2">
                                        {row.status === "Leave"
                                            ? "Leave"
                                            : row.signIn
                                                ? "Working Day"
                                                : "Absent"}
                                    </td>

                                    <td className="p-2">{workingHours}</td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Attendance;