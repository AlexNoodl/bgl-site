import { Field } from "@/shared/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group";
import { SearchIcon, SlashIcon } from "@/shared/icons";

export function SearchInput() {
  return (
    <form>
      <Field>
        <InputGroup className="bg-muted h-13 w-132! gap-3 rounded-2xl">
          <InputGroupInput placeholder="Поиск игр" className="p-0!" />
          <InputGroupAddon>
            <SearchIcon className="size-5" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <SlashIcon className="size-6" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  );
}
