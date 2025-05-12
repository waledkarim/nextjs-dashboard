import { Card } from "@/app/ui/card";
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card>
        These are archived notifications
        <Link href={'/complex-dashboard'} className="text-blue-800 font-bold">Default</Link>
    </Card>
    );
}
