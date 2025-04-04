import { Popover, PopoverPanel } from '@headlessui/react';
import { useState } from 'react';

import bugIcon from '~/assets/bug.svg';
import ideaIcon from '~/assets/idea.svg';
import otherIcon from '~/assets/thought.svg';
import { FeedbackForm } from '~/components/FeedbackForm';
import { type FeedbackOption, FeedbackSelector } from '~/components/FeedbackSelector';
import { FeedbackSubmitted } from '~/components/FeedbackSubmitted';
import { TriggerButton } from '~/components/TriggerButton';

import api from './services/api';

const feedbackTypes: Record<string, FeedbackOption> = {
  bug: {
    title: 'Problema',
    desc: 'Algo não está funcionando bem? \nQueremos corrigir. Conte com detalhes o que está acontecendo...',
    icon: bugIcon,
  },
  idea: {
    title: 'Ideia',
    desc: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!',
    icon: ideaIcon,
  },
  other: {
    title: 'Outro',
    desc: 'Queremos te ouvir. \nO que você gostaria de nos dizer?',
    icon: otherIcon,
  },
};

export function App() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [feedbackType, setFeedbackType] = useState<null | string>(null);

  function handleSelectType(type: string) {
    setFeedbackType(type);
    setStep(2);
  }

  function handleReset() {
    setFeedbackType(null);
    setStep(1);
  }

  async function handleSubmit(comment: string, screenshot?: string) {
    if (!feedbackType) return;

    await api.create({ type: feedbackType, comment, screenshot });
    setStep(3);
  }

  return (
    <Popover className="absolute bottom-8 right-8 flex flex-col items-end">
      <PopoverPanel className="w-[calc(100vw-3rem)] md:w-[336px]">
        <div className="relative flex flex-col items-center h-[264px] w-full mb-4 rounded-2xl bg-zinc-900 p-4 shadow-lg">
          {step === 1 && <FeedbackSelector options={feedbackTypes} onSelect={handleSelectType} />}
          {step === 2 && feedbackType && (
            <FeedbackForm
              option={feedbackTypes[feedbackType]}
              onReturn={handleReset}
              onSubmit={handleSubmit}
            />
          )}
          {step === 3 && <FeedbackSubmitted onReset={handleReset} />}

          <footer className="text-xs text-neutral-400">
            Feito com ♥ por{' '}
            <a
              className="underline underline-offset-2"
              href="https://github.com/juliolmuller"
              rel="noreferrer"
              target="_blank"
            >
              Julio L. Muller
            </a>
          </footer>
        </div>
      </PopoverPanel>

      <TriggerButton />
    </Popover>
  );
}
