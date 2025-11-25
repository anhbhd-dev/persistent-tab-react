import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  time: string;
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Xin chào! Bạn khỏe không?', sender: 'other', time: '10:00' },
    { id: 2, text: 'Tôi khỏe, cảm ơn bạn!', sender: 'me', time: '10:02' },
    { id: 3, text: 'Dự án tiến triển như thế nào rồi?', sender: 'other', time: '10:05' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: 'me',
          time,
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Tin nhắn</h1>
        <p className="text-muted-foreground">
          Gửi tin nhắn và chat với người khác. Messages sẽ được giữ khi chuyển tab!
        </p>
      </div>

      <Card className="flex-1 flex flex-col">
        <CardContent className="flex-1 flex flex-col p-6 space-y-4">
          <div className="flex-1 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    {message.sender === 'me' ? 'ME' : 'TB'}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`max-w-xs rounded-lg px-4 py-2 ${
                    message.sender === 'me'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Nhập tin nhắn..."
            />
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4 bg-accent/10 border-accent/20">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <strong>Test keep-alive:</strong> Gửi một vài tin nhắn, sau đó chuyển sang tab khác. 
            Khi quay lại, các tin nhắn vẫn còn đó!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
