// src/components/layout/Footer.tsx
import { APP_NAME } from '@/shared/constants';

export default function Footer() {
  return (
    <footer className="border-t bg-white py-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} {APP_NAME} - تمامی حقوق محفوظ است.
    </footer>
  );
}