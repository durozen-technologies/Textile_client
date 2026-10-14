"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function StorefrontShell({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}
      {children}
      {!isAdminPage && <Footer />}
      {!isAdminPage && <WhatsAppButton />}
    </>
  );
}
