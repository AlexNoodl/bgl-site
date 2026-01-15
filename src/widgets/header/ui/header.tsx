"use client";

import { useState } from "react";
import { Logo } from "@/widgets/header/ui/logo";
import { TabBar } from "@/widgets/header/ui/tabBar";
import { LogIn } from "@/widgets/header/ui/log-in";
import { SearchInput } from "@/widgets/header/ui/search-input";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="flex max-h-23 items-center justify-between py-5">
      <Logo />
      <SearchInput />
      <div>
        {isLoggedIn ? (
          <TabBar favoritesCount={32} libraryCount={185} />
        ) : (
          <LogIn />
        )}
      </div>
    </header>
  );
}
