import { AppSidebar } from './AppSidebar';
import { TabBar } from './TabBar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TabBar />
        
        <main className="flex-1 overflow-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
