"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">
        Settings ⚙️
      </h1>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">
          Appearance
        </h2>

        <ThemeToggle />
      </div>
    </div>
  );
}