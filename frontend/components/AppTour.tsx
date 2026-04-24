"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { Props, Step } from "react-joyride";

// Dynamically import Joyride to avoid Next.js server-side rendering errors
const Joyride = dynamic<Props>(() => import("react-joyride").then((mod) => mod.Joyride), { ssr: false });

interface AppTourProps {
  steps: Step[];
  run?: boolean;
  onFinish?: () => void;
}

export default function AppTour({ steps, run: externalRun, onFinish }: AppTourProps) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (externalRun !== undefined) {
      setRun(externalRun);
    }
  }, [externalRun]);

  const handleJoyrideCallback = (data: any) => {
    const { status } = data;
    if (["finished", "skipped"].includes(status)) {
      setRun(false);
      onFinish?.();
    }
  };

  return (
    <Joyride 
      steps={steps} 
      run={run} 
      continuous={true} 
      onEvent={handleJoyrideCallback}
      scrollToFirstStep={true}
      showProgress={true}
      showSkipButton={true}
      disableScrolling={false}
      styles={{
        tooltip: {
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(var(--content-rgb), 0.1)",
          backdropFilter: "blur(16px)",
          textAlign: "left",
        },
        tooltipContent: {
            padding: "10px 0",
            fontSize: "15px",
            lineHeight: "1.6",
            color: "var(--content-secondary)",
        },
        tooltipTitle: {
            fontSize: "18px",
            fontWeight: "700",
            color: "var(--content)",
            marginBottom: "8px",
        },
        buttonPrimary: {
          backgroundColor: "var(--cta-bg)",
          borderRadius: "12px",
          color: "white",
          fontWeight: "600",
          padding: "12px 24px",
          fontSize: "14px",
          transition: "all 0.2s ease",
          outline: "none",
        },
        buttonBack: {
          marginRight: "12px",
          color: "var(--content-secondary)",
          fontWeight: "500",
          fontSize: "14px",
        },
        buttonSkip: {
          color: "var(--content-secondary)",
          fontSize: "14px",
        }
      }}
      {...({
        options: {
          primaryColor: "var(--cta-bg)",
          backgroundColor: "var(--sidebar-bg)",
          textColor: "var(--content)",
          arrowColor: "var(--sidebar-bg)",
          zIndex: 10000,
          showProgress: true,
          skipBeacon: true,
        }
      } as any)}
    />
  );
}
