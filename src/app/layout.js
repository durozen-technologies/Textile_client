import StorefrontShell from "@/components/layout/StorefrontShell";
import "./globals.css";

export const metadata = {
  title: "Deera Silks",
  description: "Traditional silk sarees crafted for generations.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StorefrontShell>{children}</StorefrontShell>
      </body>
    </html>
  );
}