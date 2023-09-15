import NavBar from "@/components/NavBar";
import BattleCard from "@/components/BattleCard";
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"


export default function Home() {
  const battleCards = [
    { title: "Battle Card 1" },
    { title: "Battle Card 2" },
  ].map((card) => <BattleCard></BattleCard>);
  return (
    <main>
      <NavBar />
      <div className="w-screen flex flex-row justify-end"><Button className="mr-4"><PlusCircle className="mr-2 h-4 w-4" /> Battle</Button></div>
      <div className="flex flex-row">{battleCards}</div>
    </main>
  );
}
