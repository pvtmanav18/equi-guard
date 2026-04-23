"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar, COLLAPSED_WIDTH, EXPANDED_WIDTH } from "@/components/sidebar";
import { SidebarProvider, useSidebar } from "@/components/sidebar-context";
import { useAuth } from "@/components/auth-context";
import { Loader2 } from "lucide-react";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { expanded } = useSidebar();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div
        className="flex-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ marginLeft: expanded ? `${EXPANDED_WIDTH}px` : `${COLLAPSED_WIDTH}px` }}
      >
        <div className="pointer-events-none fixed top-0 right-0 w-[500px] h-[500px] opacity-[0.04] blur-[120px] z-0"
          style={{ background: `radial-gradient(circle, rgba(var(--content-rgb),0.3) 0%, transparent 70%)` }}
        />
        <div className="relative z-10 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-content/30" />
          <p className="text-sm text-content/30">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
