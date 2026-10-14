"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[var(--bg-card)]/95 backdrop-blur-xl border-t border-white/[0.08]">
      <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
        <a
          href="/concept"
          className="flex flex-col items-center justify-center py-3 text-[var(--text-secondary)] hover:text-white transition-colors"
        >
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">Concept</span>
        </a>
        <a
          href="/concept"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-[var(--text-secondary)] hover:text-green-400 transition-colors"
        >
          <MessageCircle className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">Concept details</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white"
        >
          <FileText className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">Demo Enquiry</span>
        </Link>
      </div>
    </div>
  );
}
