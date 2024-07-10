import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AdminClientEntityBuilderContainer } from './_container';

export const EntityCardProvider = AdminClientEntityBuilderContainer.provider(
  (ctx) =>
    ({ cock }: { cock: string }) => {
      return (
        <Card>
          <CardHeader>
            <CardTitle>{cock}</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      );
    },
);
