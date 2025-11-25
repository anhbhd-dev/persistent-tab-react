import { X } from 'lucide-react';
import { useTabContext } from '@/contexts/TabContext';

export function TabBar() {
  const { tabs, activeTab, setActiveTab, closeTab } = useTabContext();

  if (tabs.length === 0) return null;

  return (
    <div className="bg-background border-b border-tab-border flex items-center gap-1 px-2 h-12 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        
        return (
          <div
            key={tab.id}
            className={`group flex items-center gap-2 px-4 py-2 rounded-t-lg border-b-2 transition-all min-w-fit cursor-pointer ${
              isActive
                ? 'bg-tab-active text-tab-active-foreground border-tab-active'
                : 'bg-tab hover:bg-tab-hover text-foreground border-transparent hover:border-tab-border'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-sm font-medium whitespace-nowrap">{tab.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              className={`p-1 rounded hover:bg-background/20 transition-colors ${
                isActive ? 'text-tab-active-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
