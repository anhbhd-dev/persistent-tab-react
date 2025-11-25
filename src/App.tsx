import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AliveScope, KeepAlive } from 'react-activation';
import { TabProvider, useTabContext } from '@/contexts/TabContext';
import { Layout } from '@/components/Layout';
import Home from "./pages/Home";
import FormDemo from "./pages/FormDemo";
import Counter from "./pages/Counter";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Component to handle KeepAlive based on open tabs
function KeepAliveRoutes() {
  const { tabs } = useTabContext();
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/form" 
        element={
          <KeepAlive 
            id="form" 
            name="form"
            when={tabs.some(tab => tab.id === 'form')}
          >
            <FormDemo />
          </KeepAlive>
        } 
      />
      <Route 
        path="/counter" 
        element={
          <KeepAlive 
            id="counter" 
            name="counter"
            when={tabs.some(tab => tab.id === 'counter')}
          >
            <Counter />
          </KeepAlive>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <KeepAlive 
            id="profile" 
            name="profile"
            when={tabs.some(tab => tab.id === 'profile')}
          >
            <Profile />
          </KeepAlive>
        } 
      />
      <Route 
        path="/messages" 
        element={
          <KeepAlive 
            id="messages" 
            name="messages"
            when={tabs.some(tab => tab.id === 'messages')}
          >
            <Messages />
          </KeepAlive>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <KeepAlive 
            id="settings" 
            name="settings"
            when={tabs.some(tab => tab.id === 'settings')}
          >
            <Settings />
          </KeepAlive>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AliveScope>
          <TabProvider>
            <Layout>
              <KeepAliveRoutes />
            </Layout>
          </TabProvider>
        </AliveScope>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
