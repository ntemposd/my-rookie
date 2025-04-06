import Image from "next/image";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <>
      {/* New Profile Card Section */}
      <div className="mt-10 flex justify-center">
        <ProfileCard
          name="Alex Johnson"
          imageUrl="/athlete.webp"
          age={24}
          position="Forward"
          speed={9.8}
          verticalJump={85}
          agility={9}
          stamina={8}
          strength={7}
        />
      </div>

      
    </>
  );
}
