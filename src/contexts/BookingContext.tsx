import { createContext, useContext, useState, ReactNode } from "react";

interface BookingCtx {
  isOpen: boolean;
  presetService: string | null;
  openBooking: (serviceKey?: string) => void;
  closeBooking: () => void;
}

const Ctx = createContext<BookingCtx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | null>(null);

  const openBooking = (serviceKey?: string) => {
    setPresetService(serviceKey ?? null);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setPresetService(null);
  };

  return (
    <Ctx.Provider value={{ isOpen, presetService, openBooking, closeBooking }}>
      {children}
    </Ctx.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBooking must be used within a BookingProvider");
  return ctx;
}
