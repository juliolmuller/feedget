import { Popover } from '@headlessui/react';
import { useState } from 'react';

import bugIcon from '~/assets/bug.svg';
import ideaIcon from '~/assets/idea.svg';
import otherIcon from '~/assets/thought.svg';
import { FeedbackForm } from '~/components/FeedbackForm';
import {
  FeedbackOption,
  FeedbackSelector,
} from '~/components/FeedbackSelector';
import { TriggerButton } from '~/components/TriggerButton';

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
  const [feedbackType, setFeedbackType] = useState<string | null>(null);

  function handleReturn() {
    setFeedbackType(null);
  }

  function handleSubmit(message: string) {
    console.log('submitted:', message);
  }

  console.log(feedbackType);

  return (
    <Popover className="absolute bottom-8 right-8 flex flex-col items-end">
      <Popover.Panel className="w-[calc(100vw-3rem)] md:w-[336px]">
        <div className="relative flex flex-col items-center w-full mb-4 rounded-2xl bg-zinc-900 p-4 shadow-lg">
          {feedbackType === null ? (
            <FeedbackSelector
              options={feedbackTypes}
              onSelect={setFeedbackType}
            />
          ) : (
            <FeedbackForm
              option={feedbackTypes[feedbackType]}
              onReturn={handleReturn}
              onSubmit={handleSubmit}
            />
          )}

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
      </Popover.Panel>

      <TriggerButton />
    </Popover>
  );
}
