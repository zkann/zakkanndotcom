import { redirect } from 'next/navigation';

export default function BookPage() {
  // This will redirect on the server side, preventing the RSC fetch error
  redirect('https://calendly.com/zakkann/30min');
} 