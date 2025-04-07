"use client";
import React, { useState } from "react";

type AthleteStats = {
  name: string;
  imageUrl: string;
  age: number;
  position: string;
  // Group 1: Physical
  acceleration: number;
  agility: number;
  fitness: number;
  size: number;
  strength: number;
  // Group 2: Technical
  ballHandlingLeft: number;
  ballHandlingRight: number;
  footwork: number;
  shooting: number;
  technique: number;
  // Group 3: Mental
  decisions: number;
  influence: number;
  reading: number;
  teamwork: number;
  workrate: number;
  // Group 4: Tactical
  creativity: number;
  rebounding: number;
  defenceOnBall: number;
  defenceOffBall: number;
  offBallMoving: number;
};

export default function ProfileCard(props: AthleteStats) {
  const {
    name,
    imageUrl,
    age,
    position,
    acceleration,
    agility,
    fitness,
    size,
    strength,
    ballHandlingLeft,
    ballHandlingRight,
    footwork,
    shooting,
    technique,
    decisions,
    influence,
    reading,
    teamwork,
    workrate,
    creativity,
    rebounding,
    defenceOnBall,
    defenceOffBall,
    offBallMoving,
  } = props;

  // Compute overall average for the athlete (all 20 stats)
  const allStats = [
    acceleration, agility, fitness, size, strength,
    ballHandlingLeft, ballHandlingRight, footwork, shooting, technique,
    decisions, influence, reading, teamwork, workrate,
    creativity, rebounding, defenceOnBall, defenceOffBall, offBallMoving,
  ];
  const overallAvg =
    allStats.reduce((acc, val) => acc + val, 0) / allStats.length;

  // Define the stat groups with emojis in the labels
  const statGroups = [
    {
      groupName: "Physical",
      stats: [
        { label: "💨 Acceleration", value: acceleration },
        { label: "🤸 Agility", value: agility },
        { label: "💪 Fitness", value: fitness },
        { label: "📏 Size", value: size },
        { label: "🏋️ Strength", value: strength },
      ],
    },
    {
      groupName: "Technical",
      stats: [
        { label: "⚽ Ball handling (L)", value: ballHandlingLeft },
        { label: "⚽ Ball handling (R)", value: ballHandlingRight },
        { label: "👣 Footwork", value: footwork },
        { label: "🏀 Shooting", value: shooting },
        { label: "🛠 Technique", value: technique },
      ],
    },
    {
      groupName: "Mental",
      stats: [
        { label: "🤔 Decisions", value: decisions },
        { label: "💬 Influence", value: influence },
        { label: "📖 Reading", value: reading },
        { label: "🤝 Teamwork", value: teamwork },
        { label: "⏱ Workrate", value: workrate },
      ],
    },
    {
      groupName: "Tactical",
      stats: [
        { label: "🎨 Creativity", value: creativity },
        { label: "🏀 Rebounding", value: rebounding },
        { label: "🛡 Defence (On)", value: defenceOnBall },
        { label: "🚫 Defence (Off)", value: defenceOffBall },
        { label: "🏃 Off-ball moving", value: offBallMoving },
      ],
    },
  ];

  // State for the active group index
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  // Functions to navigate between groups
  const handlePrev = () => {
    setActiveGroupIndex((prevIndex) =>
      prevIndex === 0 ? statGroups.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveGroupIndex((prevIndex) =>
      prevIndex === statGroups.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeGroup = statGroups[activeGroupIndex];
  // Calculate the average for the active group
  const groupAvg =
    activeGroup.stats.reduce((acc, stat) => acc + stat.value, 0) /
    activeGroup.stats.length;

  return (
    <div className="max-w-md rounded-2xl overflow-hidden shadow-lg p-4 bg-white text-gray-900">
      <img
        className="w-full h-60 object-cover rounded-xl mb-4"
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-col items-center gap-2 mb-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <hr className="w-16 border-t-2 border-dashed border-blue-300" />
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
          Score: {overallAvg.toFixed(1)}
        </span>
      </div>
      <p className="text-center text-gray-700 text-sm mb-4">
        Age: {age} | Position: {position}
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
            <thead>
            <tr>
                <th className="w-48 px-4 py-2 text-left text-sm font-bold text-gray-700">
                {activeGroup.groupName}
                </th>
                <th className="px-4 py-2 text-center">
                <div className="inline-block transform translate-x-7">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {groupAvg.toFixed(1)}
                    </span>
                </div>
                </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
            {activeGroup.stats.map((stat) => (
                <tr key={stat.label}>
                <td className="w-48 px-4 py-2 text-left text-sm text-gray-600">
                    {stat.label}
                </td>
                <td className="px-4 py-2 text-center text-sm text-gray-800">
                    <div className="inline-block transform translate-x-7">
                    {stat.value}
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
      {/* Navigation buttons for sliding between groups */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-full shadow-sm hover:bg-gray-200 transition duration-200"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-full shadow-sm hover:bg-gray-200 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}
