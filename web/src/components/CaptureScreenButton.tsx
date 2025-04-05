import html2canvas from 'html2canvas-pro';
import { Camera, CircleNotch, Trash } from 'phosphor-react';
import { useState } from 'react';

export interface CaptureScreenButtonProps {
  onCapture: (imageBase64: string) => void;
  onDiscard: () => void;
}

export function CaptureScreenButton({ onCapture, onDiscard }: CaptureScreenButtonProps) {
  const [isCapturingScreen, setCapturingScreen] = useState(false);
  const [screenshot, setScreenshot] = useState<null | string>(null);

  async function handleCaptureScreen() {
    setCapturingScreen(true);
    const htmlEl = document.querySelector('html')!;
    const canvas = await html2canvas(htmlEl);
    const base64 = canvas.toDataURL('image/png');

    setCapturingScreen(false);
    setScreenshot(base64);
    onCapture(base64);
  }

  function handleDiscardScreenshot() {
    setScreenshot(null);
    onDiscard();
  }

  if (screenshot) {
    return (
      <button
        className="flex items-end justify-end outline-hidden rounded-sm p-1 text-zinc-400 transition-colo hover:text-zinc-100 focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 focus:ring-offset-zinc-900"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
        title="Descartar captura de tela"
        type="button"
        onClick={handleDiscardScreenshot}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      className="flex items-center justify-center outline-hidden rounded-sm bg-zinc-800 transition-colo hover:bg-zinc-700 disabled:opacity-50 focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 focus:ring-offset-zinc-900"
      disabled={isCapturingScreen}
      title="Capturar tela atual"
      type="button"
      onClick={handleCaptureScreen}
    >
      {isCapturingScreen ? (
        <CircleNotch className="h-4 w-4 animate-spin" weight="bold" />
      ) : (
        <Camera className="h-6 w-6" />
      )}
    </button>
  );
}
