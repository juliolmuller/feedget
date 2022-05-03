import { useState } from 'react';

import { TriggerButton } from '~/components/TriggerButton';

export function App() {
  const [isWidgetOpen, setWidgetOpen] = useState(false);

  function handleToggleWidget() {
    setWidgetOpen(!isWidgetOpen);
  }

  return (
    <div className="absolute bottom-6 right-6">
      {isWidgetOpen && (
        <div className="mb-4 rounded bg-black p-3">
          <span className="text-white">Hello, there!</span>
        </div>
      )}

      <TriggerButton onClick={handleToggleWidget} />
    </div>
  );
}
