import type { Tab } from '@/types/common';
import { cn } from '@/utils/cn';
import { useState } from 'react';

interface TabsProps {
  tabList: Tab[];
  tabPanels: React.ReactNode[];
  onTabChange?: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabList, tabPanels, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>(tabList[0].tabId);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);

    if (typeof onTabChange === 'function') {
      onTabChange(tabId);
    }
  };

  return (
    <>
      <div className='border-border flex w-full border-b'>
        {tabList.map(({ tabId, icon: Icon }) => (
          <button
            key={tabId}
            onClick={() => handleTabChange(tabId)}
            className='hover:text-primary-default flex flex-1 cursor-pointer items-center justify-center p-4 transition-colors'
          >
            <Icon className={cn(activeTab === tabId && 'text-primary-default')} />
          </button>
        ))}
      </div>

      {tabPanels.find((_, idx) => tabList[idx].tabId === activeTab)}
    </>
  );
};

export default Tabs;
