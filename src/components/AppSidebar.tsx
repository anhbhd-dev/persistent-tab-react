import { Home, FileText, Settings, User, BarChart, Mail } from 'lucide-react';
import { useTabContext } from '@/contexts/TabContext';
import { useLocation } from 'react-router-dom';

const menuItems = [
  { id: 'home', title: 'Trang chủ', path: '/', icon: Home },
  { id: 'form', title: 'Form Demo', path: '/form', icon: FileText },
  { id: 'counter', title: 'Counter', path: '/counter', icon: BarChart },
  { id: 'profile', title: 'Hồ sơ', path: '/profile', icon: User },
  { id: 'messages', title: 'Tin nhắn', path: '/messages', icon: Mail },
  { id: 'settings', title: 'Cài đặt', path: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { openTab, activeTab } = useTabContext();
  const location = useLocation();

  const handleItemClick = (item: typeof menuItems[0]) => {
    openTab({ id: item.id, title: item.title, path: item.path });
  };

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">Keep Alive App</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.title}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
