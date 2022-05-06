import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { CaptureScreenButton } from '~/components/CaptureScreenButton';
import { CloseButton } from '~/components/CloseButton';
import { FeedbackOption } from '~/components/FeedbackSelector';

export interface FeedbackFormProps {
  option: FeedbackOption;
  onReturn: () => void;
  onSubmit: (message: string, screenshot?: string) => void;
}

export function FeedbackForm({
  option,
  onReturn,
  onSubmit,
}: FeedbackFormProps) {
  const [message, setMessage] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    message && onSubmit(message, screenshot || undefined);
  }

  return (
    <>
      <header className="flex gap-2">
        <img
          className="h-6 w-6"
          src={option.icon}
          alt={`ícone de ${option.title}`}
        />
        <h2 className="text-2xl leading-6">{option.title}</h2>

        <CloseButton />
        <button
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          title="Retornar ao seletor de tipo de feedback"
          type="button"
          onClick={() => onReturn()}
        >
          <ArrowLeft className="h-4 w-4" weight="bold" />
        </button>
      </header>

      <main className="h-[160px] w-full my-4">
        <form
          className="grid grid-rows-[1fr_40px] grid-cols-[40px_1fr] gap-2 h-full"
          onSubmit={handleSubmit}
        >
          <textarea
            className="col-span-2 resize-none outline-none border-1 border-zinc-600 rounded-md bg-transparent text-zinc-100 text-sm focus:ring-1 focus:ring-brand-500 focus:border-brand-500 placeholder:text-zinc-400 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
            autoFocus
            placeholder={option.desc}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          <CaptureScreenButton
            onCapture={setScreenshot}
            onDiscard={() => setScreenshot(null)}
          />

          <button
            className="flex justify-center items-center outline-none rounded bg-brand-500 transition-colors hover:bg-brand-300 focus:ring-2 disabled:opacity-50 disabled:hover:bg-brand-500 focus:ring-brand-500 focus:ring-offset-1 focus:ring-offset-zinc-900"
            disabled={!message}
            type="submit"
          >
            Enviar feedback
          </button>
        </form>
      </main>
    </>
  );
}
