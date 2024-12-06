import React from 'react';

const DashBoardComponent = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <!-- Header -->
            <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </header>

            <!-- Quick Stats Section -->
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <!-- Card 1 -->
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-gray-700 font-semibold">Tasks Completed</h2>
                    <p className="text-2xl font-bold text-blue-500">45</p>
                </div>
                <!-- Card 2 -->
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-gray-700 font-semibold">Pending Tasks</h2>
                    <p className="text-2xl font-bold text-yellow-500">12</p>
                </div>
                <!-- Card 3 -->
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-gray-700 font-semibold">Notifications</h2>
                    <p className="text-2xl font-bold text-red-500">8</p>
                </div>
                <!-- Card 4 -->
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-gray-700 font-semibold">Total Projects</h2>
                    <p className="text-2xl font-bold text-green-500">10</p>
                </div>
            </div>

            <!-- Main Section -->
            <div className="mt-8">
                <h2 className="text-lg font-bold text-gray-700 mb-4">Recent Activities</h2>
                <ul className="space-y-4">
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-gray-800">Complete Task: Design Homepage</h3>
                        <p className="text-sm text-gray-600">Due: Today</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-gray-800">Review Project Proposal</h3>
                        <p className="text-sm text-gray-600">Due: Tomorrow</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-gray-800">Team Meeting</h3>
                        <p className="text-sm text-gray-600">Scheduled: 3 PM</p>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default DashBoardComponent;