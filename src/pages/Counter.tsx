import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus, RotateCcw } from 'lucide-react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Counter Demo</h1>
        <p className="text-muted-foreground">
          Counter đơn giản để demo state preservation với keep-alive
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Số đếm</CardTitle>
          <CardDescription>
            Tăng hoặc giảm số đếm, sau đó chuyển tab. State sẽ được giữ nguyên!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="text-7xl font-bold text-primary">
              {count}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => setCount(count - 1)}
              variant="outline"
              size="lg"
              className="w-24"
            >
              <Minus className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => setCount(0)}
              variant="outline"
              size="lg"
              className="w-24"
            >
              <RotateCcw className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => setCount(count + 1)}
              size="lg"
              className="w-24"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 bg-accent/10 border-accent/20">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <strong>Test keep-alive:</strong> Tăng số đếm lên một vài lần, sau đó chuyển sang 
            tab khác. Khi quay lại, số đếm sẽ vẫn giữ nguyên giá trị!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
