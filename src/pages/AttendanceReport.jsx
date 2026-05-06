import React, { useState, useEffect } from "react";

const API_BASE = "https://medical-backend-tfk0.onrender.com/api";

const AttendanceReport = ({ currentUser }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [attendance, setAttendance] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("");

    // set default month
    useEffect(() => {
        const now = new Date();
        setSelectedMonth(now.toISOString().slice(0, 7));
    }, []);

    // load users
    useEffect(() => {
        fetch(`${API_BASE}/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // load attendance
    useEffect(() => {
        loadAttendance();
    }, [selectedUser, selectedMonth]);

    // generate full month dates (SAME AS ATTENDANCE)
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

    const loadAttendance = () => {
        if (!selectedUser || !selectedMonth) return;

        fetch(`${API_BASE}/attendance/${selectedUser}/${selectedMonth}`)
            .then(res => res.json())
            .then(data => setAttendance(data));
    };

    // FULL DATA (IMPORTANT)
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

    // SUMMARY (same logic)
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

    // EDIT FUNCTION
    const editRow = async (row) => {
        const newIn = prompt("Edit Sign In", row.signIn || "");
        const newOut = prompt("Edit Sign Out", row.signOut || "");

        await fetch(`${API_BASE}/attendance/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: selectedUser,
                date: row.date,
                signIn: newIn,
                signOut: newOut,
                location: row.location,
                editedBy: currentUser.name
            })
        });

        loadAttendance(); // 🔥 refresh data instantly
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl font-bold">📊 Attendance Report</h2>
                <p className="text-gray-500">{selectedMonth}</p>
            </div>

            {/* FILTERS */}
            <div className="flex gap-4 mb-6">

                {/* USER SELECT */}
                <select
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="">Select User</option>
                    {users.map(u => (
                        <option key={u.username} value={u.username}>
                            {u.username}
                        </option>
                    ))}
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
                            <th className="p-2">Edited By</th>
                            <th className="p-2">Edit</th>
                        </tr>
                    </thead>


                    <tbody>
                        {fullData.map(row => {

                            let workingHours = "-";
                            if (row.signIn && row.signOut) {
                                const start = new Date(`1970-01-01T${row.signIn}`);
                                const end = new Date(`1970-01-01T${row.signOut}`);
                                workingHours = ((end - start) / (1000 * 60 * 60)).toFixed(2);
                            }

                            return (
                                <tr
                                    key={row.date}
                                    className={`text-center border-b ${row.status === "Leave"
                                        ? "bg-red-100"
                                        : !row.signIn
                                            ? "bg-white"
                                            : ""
                                        }`}
                                >
                                    <td className="p-2">{row.date}</td>
                                    <td className="p-2">8:30 - 17:00</td>
                                    <td className="p-2">{row.signIn || "-"}</td>
                                    <td className="p-2">{row.signOut ? row.date : "-"}</td>
                                    <td className="p-2">{row.signOut || "-"}</td>
                                    <td className="p-2">{row.location || "-"}</td>

                                    <td className="p-2">
                                        {row.status === "Leave"
                                            ? "Leave"
                                            : row.signIn
                                                ? "Working Day"
                                                : "Absent"}
                                    </td>

                                    <td className="p-2">{workingHours}</td>

                                    <td className="p-2">{row.revisedBy || "-"}</td>

                                    <td className="p-2">
                                        <button
                                            onClick={() => editRow(row)}
                                            className="bg-indigo-600 text-white px-2 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AttendanceReport;