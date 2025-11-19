import { Input } from "@/app/_lib/ui/input";
import { Button } from "@/app/_lib/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <>
      <Input placeholder="Buscar restaurantes" className="border-none" />
      <Button size="icon" type="submit">
        <SearchIcon size={20} />
      </Button>
    </>
  );
};

export default Search;
