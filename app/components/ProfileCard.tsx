// app/components/ProfileCard.tsx
type AthleteStats = {
    name: string;
    imageUrl: string;
    age: number;
    position: string;
    speed: number;
    verticalJump: number;
    agility: number;
    stamina: number;
    strength: number;
  };
  
  export default function ProfileCard({
    name,
    imageUrl,
    age,
    position,
    speed,
    verticalJump,
    agility,
    stamina,
    strength,
  }: AthleteStats) {
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white text-gray-900">
        <img
          className="w-full h-60 object-cover rounded-xl mb-4"
          src={imageUrl}
          alt={name}
        />
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-center text-gray-700 text-sm mb-4">
          Age: {age} | Position: {position}
        </p>
        
        {/* Modern Table for Stats */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              {/* <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Stat
                </th>
                <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">
                  Value
                </th>
              </tr> */}
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 text-sm text-gray-600">💨 Speed</td>
                <td className="px-4 py-2 text-sm text-gray-800 text-right">
                  {speed} m/s
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-600">
                  🦘 Vertical Jump
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 text-right">
                  {verticalJump} cm
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-600">🌀 Agility</td>
                <td className="px-4 py-2 text-sm text-gray-800 text-right">
                  {agility}/10
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-600">🏃 Stamina</td>
                <td className="px-4 py-2 text-sm text-gray-800 text-right">
                  {stamina}/10
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-600">💪 Strength</td>
                <td className="px-4 py-2 text-sm text-gray-800 text-right">
                  {strength}/10
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  