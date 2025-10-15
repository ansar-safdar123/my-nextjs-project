import { useState } from "react";
import FairnessCard from "./FairnessCard";

const Pokemon = ({ data }) => {
  const [activeId, setActiveId] = useState(null);
  
  return (
    <div className="flex w-full justify-center">
      <div className="grid gap-5 justify-items-center sm:grid-cols-2 md:grid-cols-2">
        {data.map((card) => (
          <FairnessCard key={card.id} {...card} isActive={activeId === card.id} onClick={() => setActiveId(activeId === card.id ? null : card.id)} />
        ))}
      </div>
    </div>
  )
}

export default Pokemon