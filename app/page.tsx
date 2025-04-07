import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <div className="mt-10 flex justify-center">
      <ProfileCard
        name="Εμ. Τσέι."
        imageUrl="/athlete.webp"
        age={24}
        position="Forward"
        acceleration={8}
        agility={9}
        fitness={7}
        size={6}
        strength={8}
        ballHandlingLeft={7}
        ballHandlingRight={7}
        footwork={9}
        shooting={8}
        technique={8}
        decisions={9}
        influence={8}
        reading={9}
        teamwork={10}
        workrate={9}
        creativity={7}
        rebounding={8}
        defenceOnBall={8}
        defenceOffBall={8}
        offBallMoving={9}
      />
    </div>
  );
}
