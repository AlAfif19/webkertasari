"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  buttonLabel: string;
  initialValue?: string;
  multiline?: boolean;
  onSubmit: (value: string) => void;
};

export function ChatbotLeadForm({
  label,
  buttonLabel,
  initialValue = "",
  multiline = false,
  onSubmit,
}: Props) {
  const [value, setValue] = useState(initialValue);
  const id = label.toLowerCase().replace(/\s+/g, "-");
  const fieldClass =
    "min-h-11 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600";

  return (
    <form
      className="grid gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        const cleaned = value.trim();
        if (cleaned) onSubmit(cleaned);
      }}
    >
      <label htmlFor={id} className="text-sm font-semibold text-slate-800">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          rows={3}
          className={fieldClass}
        />
      ) : (
        <input
          id={id}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={fieldClass}
        />
      )}
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
}
