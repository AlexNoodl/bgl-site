import { LogoIcon } from "@/shared/icons";

export function Logo() {
  return (
    <div className="flex items-center gap-5">
      <LogoIcon />
      <p className="text-[32px] font-semibold">bgl</p>
    </div>
  );
}
