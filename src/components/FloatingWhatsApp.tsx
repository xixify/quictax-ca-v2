import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20a%20quick%20quote%20for%20my%20Canadian%20tax%20return."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Tax Specialist on WhatsApp"
    >
      <span className="relative flex items-center justify-center">
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping"></span>
      </span>
      <span className="hidden sm:inline">Ask on WhatsApp</span>
    </a>
  );
};
