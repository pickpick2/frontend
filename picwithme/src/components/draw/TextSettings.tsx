import Button from '@/components/ui/Button';
import Slider from '@/components/ui/Slider';

import { useState } from 'react';

interface TextSettingsProps {
  onAddText: (fontSize: number) => void;
}

const TextSettings: React.FC<TextSettingsProps> = ({ onAddText }) => {
  const [fontSize, setFontSize] = useState<number>(20);

  return (
    <section className='flex h-60 flex-col gap-8 px-4 py-6'>
      <Button onClick={() => onAddText(fontSize)}>텍스트 추가</Button>

      <div>
        <h2 className='text-detail pb-4'>크기 조절</h2>
        <Slider
          defaultValue={fontSize}
          max={40}
          min={10}
          step={2}
          onChange={(value) => {
            setFontSize(value[0]);
          }}
        />
      </div>
    </section>
  );
};

export default TextSettings;
