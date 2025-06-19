// components/StatBar.tsx

type StatBarProps = {
  year: number;
  value: number;
  max: number;
};

export default function StatBar({ year, value, max }: StatBarProps) {
  const percent = (value / max) * 100;

  return (
    <div>
      <div className="flex justify-between text-sm text-gray-700 mb-1">
        <span>{year}</span>
        <span>{value.toLocaleString("en-US")}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-[#864a4a] rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
