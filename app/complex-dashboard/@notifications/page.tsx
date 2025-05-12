import { Card } from "@/app/ui/card";
import Link from 'next/link';

export default function Notifications() {
  return (
    <Card>
        These are notifications
        <Link href={'/complex-dashboard/archived'} className="text-blue-800 font-bold">Archive</Link>
    </Card>
    );
}
