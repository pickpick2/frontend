import { cn } from '@/utils/cn';
import { useState } from 'react';

// TODO: 추후 상수 파일로 분리
const COLORS = [
  { name: '빨강', hex: '#FF0000' },
  { name: '주황', hex: '#FF9900' },
  { name: '노랑', hex: '#FFE500' },
  { name: '초록', hex: '#27E43A' },
  { name: '파랑', hex: '#3300FF' },
  { name: '남색', hex: '#281086' },
  { name: '보라', hex: '#CC00FF' },
  { name: '검정', hex: '#000000' },
];

interface ColorPickerProps {
  onSelectColor?: (colorHex: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState<string>('#000000');

  const handleSelect = (colorHex: string) => {
    setSelectedColor(colorHex);
    if (onSelectColor) onSelectColor(colorHex);
  };

  return (
    <div className='flex items-center justify-evenly'>
      {COLORS.map(({ name, hex }) => (
        <button
          key={hex}
          onClick={() => handleSelect(hex)}
          aria-label={name}
          className={cn(
            'h-8 w-8 cursor-pointer rounded-full',
            selectedColor === hex && 'ring-2 ring-gray-800 ring-offset-2'
          )}
          style={{
            backgroundColor: hex,
          }}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
