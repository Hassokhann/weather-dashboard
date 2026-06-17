import ThemeToggle from "@/components/ui/ThemeToggle";


export default function Navbar() {
  return (
    <div className="bg-white shadow-sm p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Weather Dashboard
      </h1>

     
      <ThemeToggle />
    </div>
  );
}