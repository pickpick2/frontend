import { stickerData } from '@/mocks/data/sticker';

interface StickerSettingsProps {
  onAddSticker: (stickerSrc: string) => void;
}

const StickerSettings: React.FC<StickerSettingsProps> = ({ onAddSticker }) => {
  return (
    <section className='mx-auto h-60 overflow-y-auto'>
      <div className='grid grid-cols-2 gap-12 py-8 sm:grid-cols-3 lg:grid-cols-4'>
        {stickerData.map((stickerSrc, index) => (
          <img
            key={stickerSrc + index}
            src={stickerSrc}
            alt='스티커'
            className='h-18 w-18 cursor-pointer object-contain'
            onClick={() => onAddSticker(stickerSrc)}
          />
        ))}
      </div>
    </section>
  );
};

export default StickerSettings;
