import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TabLink } from '@/components/TabLink';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function FormDemo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Form submitted!',
      description: `Name: ${name}, Email: ${email}`,
    });
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Form Demo</h1>
        <p className="text-muted-foreground">
          Nhập dữ liệu vào form, sau đó chuyển sang tab khác. Khi quay lại, dữ liệu vẫn còn đó!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liên hệ với chúng tôi</CardTitle>
          <CardDescription>
            Điền thông tin và chúng tôi sẽ liên hệ lại sớm nhất
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tin nhắn</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nhập tin nhắn của bạn..."
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full">
              Gửi tin nhắn
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-6 bg-accent/10 border-accent/20">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-4">
            <strong>Test keep-alive:</strong> Nhập một số dữ liệu vào form, sau đó chuyển sang 
            tab Counter hoặc tab khác. Khi quay lại tab này, bạn sẽ thấy dữ liệu vẫn còn nguyên!
          </p>
          <div className="flex gap-3">
            <TabLink 
              to="/counter" 
              tabTitle="Counter"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              Thử Counter <ArrowRight className="h-4 w-4" />
            </TabLink>
            <TabLink 
              to="/profile" 
              tabTitle="Hồ sơ"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              Xem Profile <ArrowRight className="h-4 w-4" />
            </TabLink>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
