import { Popover } from '@headlessui/react';

import { TriggerButton } from '~/components/TriggerButton';

export function App() {
  return (
    <Popover className="absolute bottom-6 right-6">
      <Popover.Panel className="mb-4 rounded bg-black p-3">
        <span className="text-white">Hello, there!</span>
      </Popover.Panel>

      <TriggerButton />
    </Popover>
  );
}
