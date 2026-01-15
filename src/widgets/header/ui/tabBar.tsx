import { Button } from "@/shared/ui/button";
import { HeartIcon, LibraryIcon, MoreIcon, ProfileIcon } from "@/shared/icons";

type TabBarProps = {
  favoritesCount: number;
  libraryCount: number;
};

export function TabBar({ favoritesCount, libraryCount }: TabBarProps) {
  return (
    <div className="flex items-center gap-5">
      <Button variant="secondary" size="icon-w-count">
        <HeartIcon />
        {favoritesCount > 0 && <span className="mr-1.5">{favoritesCount}</span>}
      </Button>
      <Button variant="secondary" size="icon-w-count">
        <LibraryIcon />
        {libraryCount > 0 && <span className="mr-1.5">{libraryCount}</span>}
      </Button>
      <Button variant="secondary" size="icon-w-count">
        <ProfileIcon />
      </Button>
      <Button variant="secondary" size="icon-w-count">
        <MoreIcon />
      </Button>
    </div>
  );
}
