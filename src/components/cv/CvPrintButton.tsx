"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CvPrintButton() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <Button onClick={handlePrint} size="md" variant="outline">
      <Printer className="w-4 h-4 text-zinc-400" />
      <span>Print</span>
    </Button>
  );
}
