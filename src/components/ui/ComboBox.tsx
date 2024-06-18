"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/Command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  buttonText: string;
  placeholder: string;
  notFoundMessage: string;
  value: string;
  defaultValue?: string;
  onChange: (value: string) => void;
}

export function Combobox({
  options,
  buttonText,
  placeholder,
  notFoundMessage,
  value,
  defaultValue = "",
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleSelect = (newValue: string) => {
    console.log(newValue);
    onChange(newValue === value ? defaultValue : newValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full min-w-52 justify-between", {
            "w-fit": !value,
          })}
        >
          {value ? options.find((option) => option.value === value)?.label : buttonText}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-52 p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty className="p-4 text-sm text-center">{notFoundMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    handleSelect(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 size-4", value === option.value ? "opacity-100" : "opacity-0")} />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
