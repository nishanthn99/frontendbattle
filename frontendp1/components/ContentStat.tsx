// app/page.tsx

import StatCard from "@/components/StatCard";

export default function ContentStats() {
  return (
    <main className="min-h-screen bg-[#fffaf9] p-6 md:p-12">
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard
          title="Managed portfolio carbon footprint"
          unit="tCO₂e"
          value={45048}
          percentageChange={16}
          direction="up"
          bars={[
            { year: 2022, value: 45048 },
            { year: 2021, value: 14111 },
            { year: 2020, value: 32813 },
            { year: 2019, value: 38673 },
          ]}
        />
        <StatCard
          title="Managed portfolio energy intensity"
          unit="kWh/m²"
          value={123}
          percentageChange={22}
          direction="down"
          bars={[
            { year: 2022, value: 123 },
            { year: 2021, value: 128 },
            { year: 2020, value: 135 },
            { year: 2019, value: 157 },
          ]}
        />
        <StatCard
          title="Managed portfolio energy consumption"
          unit="kWh"
          value={47790662}
          percentageChange={27}
          direction="down"
          bars={[
            { year: 2022, value: 47790662 },
            { year: 2021, value: 49324077 },
            { year: 2020, value: 48784205 },
            { year: 2019, value: 65198706 },
          ]}
        />
      </div>
    </main>
  );
}
