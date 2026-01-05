import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect /dashboard -> /dashboard/overview
  redirect('/dashboard/overview');
}
