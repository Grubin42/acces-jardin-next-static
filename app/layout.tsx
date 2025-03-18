import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { Logo } from "@/components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accès Jardin",
  description: "Votre partenaire pour l'aménagement et l'entretien de jardins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 md:py-4`}>
        <SidebarProvider defaultOpen={false}>
          <SidebarInset className="flex flex-col h-screen">
            <header className="flex items-center justify-between h-16 md:h-26 w-full pb-2 md:pb-4">
              <Logo />
              <SidebarTrigger className="bg-[#3A8E7F] hover:bg-[#363636] text-white hover:text-white h-8 w-8 md:h-10 md:w-10 rounded-xs" />
            </header>
            <main className="flex-1 overflow-auto px-0 sm:px-4 md:px-8 lg:px-10">
              {children}
            </main>
          </SidebarInset>
          <RightSidebar />
        </SidebarProvider>
      </body>
    </html>
  );
}
