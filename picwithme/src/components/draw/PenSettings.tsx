import ColorPicker from '@/components/ui/ColorPicker';
import Slider from '@/components/ui/Slider';

interface PenSettingsProps {
  onColorChange: (colorHex: string) => void;
  onWidthChange: (value: number[]) => void;
}

const PenSettings: React.FC<PenSettingsProps> = ({ onColorChange, onWidthChange }) => {
  return (
    <section className='flex h-60 flex-col'>
      <div className='py-6'>
        <h2 className='text-detail pb-4 pl-4'>색상 선택</h2>
        <ColorPicker onSelectColor={onColorChange} />
      </div>
      <div className='py-6'>
        <h2 className='text-detail pb-4 pl-4'>굵기 조절</h2>
        <Slider onChange={onWidthChange} className='px-4' />
      </div>
    </section>
  );
};

export default PenSettings;
