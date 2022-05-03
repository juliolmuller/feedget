import { ChatTeardropDots } from 'phosphor-react';

export interface TriggerButtonProps {
  onClick: () => void;
}

export function TriggerButton({ onClick }: TriggerButtonProps) {
  return (
    <button
      className="group flex justify-center items-center h-12 bg-brand-500 rounded-full p-3"
      type="button"
      onClick={onClick}
    >
      <ChatTeardropDots className="h-6 w-6 text-white" />
      <span className="overflow-hidden max-w-0 pl-0 text-white group-hover:max-w-xl transition-all duration-700 ease-linear">
        Feedback
      </span>
    </button>
  );
}
