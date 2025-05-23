import { ArrowLeft, CircleNotch } from 'phosphor-react';
import { type FormEvent, useState } from 'react';

import { CaptureScreenButton } from '~/components/CaptureScreenButton';
import { CloseButton } from '~/components/CloseButton';
import { type FeedbackOption } from '~/components/FeedbackSelector';

export interface FeedbackFormProps {
  onReturn: () => void;
  onSubmit: (comment: string, screenshot?: string) => void;
  option: FeedbackOption;
}

export function FeedbackForm({ option, onReturn, onSubmit }: FeedbackFormProps) {
  const [comment, setComment] = useState('');
  const [screenshot, setScreenshot] = useState<null | string>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!comment) return;

    try {
      setSubmitting(true);
      await onSubmit(comment, screenshot || undefined);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <header className="flex gap-2">
        <img className="h-6 w-6" src={option.icon} alt={`ícone de ${option.title}`} />
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
            className="col-span-2 resize-none outline-hidden border-1 border-zinc-600 rounded-md bg-transparent text-zinc-100 text-sm focus:ring-1 focus:ring-brand-500 focus:border-brand-500 placeholder:text-zinc-400 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
            autoFocus
            disabled={isSubmitting}
            placeholder={option.desc}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />

          <CaptureScreenButton onCapture={setScreenshot} onDiscard={() => setScreenshot(null)} />

          <button
            className="flex justify-center items-center outline-hidden rounded-sm bg-brand-500 transition-colors hover:bg-brand-300 focus:ring-2 disabled:opacity-50 disabled:hover:bg-brand-500 focus:ring-brand-500 focus:ring-offset-1 focus:ring-offset-zinc-900"
            disabled={!comment || isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <CircleNotch className="h-4 w-4 animate-spin" weight="bold" />
            ) : (
              'Enviar feedback'
            )}
          </button>
        </form>
      </main>
    </>
  );
}
