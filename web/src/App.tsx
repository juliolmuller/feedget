import { Popover } from '@headlessui/react';
import { useState } from 'react';

import bugIcon from '~/asseets/bug.svg';
import ideaIcon from '~/asseets/idea.svg';
import otherIcon from '~/asseets/thought.svg';
import {
  FeedbackOption,
  FeedbackSelector,
} from '~/components/FeedbackSelector';
import { TriggerButton } from '~/components/TriggerButton';

const feedbackTypes: Record<string, FeedbackOption> = {
  bug: {
    title: 'Problema',
    desc: 'Reportar problemas ou erros',
    icon: bugIcon,
  },
  idea: {
    title: 'Ideia',
    desc: 'Enviar sugestões para melhorias',
    icon: ideaIcon,
  },
  other: {
    title: 'Outro',
    desc: 'Enviar dúvidas ou outros tipos de feedback',
    icon: otherIcon,
  },
};

export function App() {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);

  console.log(feedbackType);

  return (
    <Popover className="absolute bottom-8 right-8 flex flex-col items-end">
      <Popover.Panel className="w-[calc(100vw-3rem)] md:w-[336px]">
        <FeedbackSelector options={feedbackTypes} onClick={setFeedbackType} />
      </Popover.Panel>

      <TriggerButton />
    </Popover>
  );
}
