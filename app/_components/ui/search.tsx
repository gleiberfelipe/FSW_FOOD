import { Input } from "@/app/_lib/ui/input";
import { Button } from "@/app/_lib/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Buscar restaurantes" className="border-none" />
      <Button size="icon">
        <SearchIcon size={18} />
      </Button>
    </div>
  );
};

export default Search;
