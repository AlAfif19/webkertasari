import { Button } from "@/components/ui/button";

export function ChatbotQuickReplies({
  choices,
  onChoose,
}: {
  choices: string[];
  onChoose: (choice: string) => void;
}) {
  return (
    <div className="grid gap-2">
      {choices.map((choice) => (
        <Button
          key={choice}
          type="button"
          variant="outline"
          className="justify-start whitespace-normal text-left"
          onClick={() => onChoose(choice)}
        >
          {choice}
        </Button>
      ))}
    </div>
  );
}
