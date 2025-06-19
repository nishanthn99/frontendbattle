import AnimatedCard from "@/components/AnimatedCard";

const cards = [
  {
    title: "Tranquil Lake",
    description: "A peaceful lake surrounded by misty mountains.",
    img1: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    img2: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    title: "Urban Lights",
    description: "City streets glowing under the evening sky.",
    img1: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
    img2: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Ocean Calm",
    description: "Gentle waves crash along a serene shore.",
    img1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    img2: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Mountain Majesty",
    description: "Snow-capped peaks rise above pine forests.",
    img1: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    img2: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e",
  },
  {
    title: "Desert Dream",
    description: "Golden sands under a blazing sky.",
    img1: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7",
    img2: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e",
  },
  {
    title: "Forest Trail",
    description: "A path winding through a lush green forest.",
    img1: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    img2: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10">Explore the Visual World</h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {cards.map((card, index) => (
          <AnimatedCard key={index} {...card} />
        ))}
      </div>
    </main>
  );
}
