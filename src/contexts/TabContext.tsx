import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAliveController } from 'react-activation';

export interface Tab {
  id: string;
  title: string;
  path: string;
}

interface TabContextType {
  tabs: Tab[];
  activeTab: string;
  openTab: (tab: Tab) => void;
  closeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTabState] = useState<string>('');
  const navigate = useNavigate();
  const { drop, getCachingNodes } = useAliveController();

  const openTab = useCallback((tab: Tab) => {
    setTabs((prev) => {
      const exists = prev.find((t) => t.id === tab.id);
      if (exists) {
        setActiveTabState(tab.id);
        navigate(tab.path);
        return prev;
      }
      setActiveTabState(tab.id);
      navigate(tab.path);
      return [...prev, tab];
    });
  }, [navigate]);

  const closeTab = useCallback((id: string) => {
    // Clear the cache for the closed tab
    drop(id);
    
    setTabs((prev) => {
      const filtered = prev.filter((t) => t.id !== id);
      
      if (activeTab === id && filtered.length > 0) {
        const currentIndex = prev.findIndex((t) => t.id === id);
        const nextTab = filtered[currentIndex] || filtered[currentIndex - 1] || filtered[0];
        setActiveTabState(nextTab.id);
        navigate(nextTab.path);
      } else if (filtered.length === 0) {
        setActiveTabState('');
        navigate('/');
      }
      
      return filtered;
    });
  }, [activeTab, navigate, drop]);

  const setActiveTab = useCallback((id: string) => {
    const tab = tabs.find((t) => t.id === id);
    if (tab) {
      setActiveTabState(id);
      navigate(tab.path);
    }
  }, [tabs, navigate]);

  return (
    <TabContext.Provider value={{ tabs, activeTab, openTab, closeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within TabProvider');
  }
  return context;
};
