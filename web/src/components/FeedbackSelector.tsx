import { CloseButton } from '~/components/CloseButton';

export interface FeedbackOption {
  title: string;
  desc: string;
  icon: string;
  onClick?: () => void;
}

export interface FeedbackSelectorProps {
  options: { [type: string]: FeedbackOption };
  onSelect?: (type: string) => void;
}

export function FeedbackSelector({ options, onSelect }: FeedbackSelectorProps) {
  function handleClick(type: string) {
    type in options && options[type].onClick?.();
    onSelect?.(type);
  }

  return (
    <>
      <header>
        <h2 className="text-2xl leading-6">Deixe seu feedback</h2>

        <CloseButton />
      </header>

      <main className="grid grid-cols-3 gap-2 h-[112px] w-full my-10">
        {Object.entries(options).map(([type, { desc, icon, title }]) => (
          <button
            key={type}
            className="flex flex-col items-center justify-center gap-2 border-2 border-transparent focus:border-brand-500 focus:outline-none hover:border-brand-500 rounded-lg bg-zinc-800"
            title={desc}
            type="button"
            onClick={() => handleClick(type)}
          >
            <img className="h-5 w-auto object-contain" alt={desc} src={icon} />
            <span className="text-sm font-medium">{title}</span>
          </button>
        ))}
      </main>
    </>
  );
}
