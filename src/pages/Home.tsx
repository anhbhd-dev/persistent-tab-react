import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BarChart, User, Mail, Settings } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Form Demo',
    description: 'Thử nghiệm form với keep-alive. Dữ liệu nhập sẽ được giữ khi chuyển tab.',
  },
  {
    icon: BarChart,
    title: 'Counter',
    description: 'Counter đơn giản để demo state preservation. Số đếm sẽ không bị reset.',
  },
  {
    icon: User,
    title: 'Hồ sơ',
    description: 'Trang hồ sơ người dùng với các thông tin cá nhân.',
  },
  {
    icon: Mail,
    title: 'Tin nhắn',
    description: 'Quản lý tin nhắn và giao tiếp.',
  },
  {
    icon: Settings,
    title: 'Cài đặt',
    description: 'Tùy chỉnh và cấu hình ứng dụng.',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Chào mừng đến với Keep Alive App
        </h1>
        <p className="text-lg text-muted-foreground">
          Ứng dụng demo tính năng keep-alive với react-activation. Chuyển qua lại giữa các trang 
          mà không mất trạng thái!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 bg-accent/10 border-accent/20">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">💡 Hướng dẫn sử dụng</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Click vào các menu ở sidebar để mở trang mới</li>
            <li>• Mỗi trang sẽ được mở trong một tab riêng</li>
            <li>• Chuyển qua lại giữa các tab - trạng thái sẽ được giữ nguyên</li>
            <li>• Click vào dấu X để đóng tab và xóa cache của trang đó</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
