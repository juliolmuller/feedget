import { PopoverButton } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <PopoverButton
      className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário de feedback"
    >
      <X className="h-4 w-4" weight="bold" />
    </PopoverButton>
  );
}
