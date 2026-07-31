import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, PartyPopper } from "lucide-react";
import { toast } from "sonner";

import { useApp } from "@/contexts/AppContext";
import { useBooking } from "@/contexts/BookingContext";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SERVICE_KEYS = ["s1", "s2", "s3", "s4", "s5", "s6"] as const;

const schema = z.object({
  serviceKey: z.string().min(1, "required"),
  eventDate: z.date({ required_error: "required" }),
  guestCount: z.string().optional(),
  name: z.string().min(2, "required"),
  phone: z.string().min(7, "required").max(20, "required"),
  email: z.string().email("invalid").optional().or(z.literal("")),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function BookingModal() {
  const { t } = useApp();
  const { isOpen, presetService, closeBooking } = useBooking();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      serviceKey: "",
      guestCount: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
    },
  });

  // Pre-select the service if the person clicked "Book" from a specific service card
  useEffect(() => {
    if (isOpen && presetService) {
      form.setValue("serviceKey", presetService);
    }
  }, [isOpen, presetService]); // eslint-disable-line react-hooks/exhaustive-deps

  const onOpenChange = (open: boolean) => {
    if (!open) {
      closeBooking();
      form.reset();
    }
  };

  const onSubmit = (data: FormValues) => {
    const serviceLabel = t(`services.${data.serviceKey}.title`);
    const dateStr = format(data.eventDate, "PPP");

    const lines = [
      "Hello Feven Decor! I'd like to book a decoration service.",
      "",
      `Service: ${serviceLabel}`,
      `Preferred Date: ${dateStr}`,
      data.guestCount ? `Guest Count: ${data.guestCount}` : null,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      data.notes ? `Details: ${data.notes}` : null,
    ].filter(Boolean);

    const link = buildWhatsAppLink(lines.join("\n"));

    toast.success(t("booking.toastTitle"), {
      description: t("booking.toastDesc"),
    });

    window.open(link, "_blank", "noopener,noreferrer");

    form.reset();
    closeBooking();
  };

  const errors = form.formState.errors;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-cream">
        <DialogHeader>
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-2">
            <PartyPopper size={22} className="text-gold" />
          </div>
          <DialogTitle className="font-heading text-2xl text-secondary">
            {t("booking.title")}
          </DialogTitle>
          <DialogDescription className="font-body text-sm">
            {t("booking.subtitle")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-2">
          {/* Service */}
          <div>
            <label className="font-body text-sm font-medium text-secondary block mb-2">
              {t("booking.service")}
            </label>
            <Select
              value={form.watch("serviceKey")}
              onValueChange={(v) => form.setValue("serviceKey", v, { shouldValidate: true })}
            >
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder={t("booking.servicePh")} />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_KEYS.map((key) => (
                  <SelectItem key={key} value={key}>
                    {t(`services.${key}.title`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceKey && (
              <p className="text-xs text-destructive mt-1">{t("booking.errorRequired")}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="font-body text-sm font-medium text-secondary block mb-2">
              {t("booking.date")}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-background",
                    !form.watch("eventDate") && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {form.watch("eventDate")
                    ? format(form.watch("eventDate"), "PPP")
                    : t("booking.datePh")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={form.watch("eventDate")}
                  onSelect={(d) => d && form.setValue("eventDate", d, { shouldValidate: true })}
                  disabled={{ before: new Date() }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.eventDate && (
              <p className="text-xs text-destructive mt-1">{t("booking.errorDate")}</p>
            )}
          </div>

          {/* Guest count */}
          <div>
            <label className="font-body text-sm font-medium text-secondary block mb-2">
              {t("booking.guestCount")}
            </label>
            <Input
              type="number"
              min={1}
              placeholder={t("booking.guestCountPh")}
              className="bg-background"
              {...form.register("guestCount")}
            />
          </div>

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm font-medium text-secondary block mb-2">
                {t("booking.name")}
              </label>
              <Input
                placeholder={t("booking.namePh")}
                className="bg-background"
                {...form.register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1">{t("booking.errorRequired")}</p>
              )}
            </div>
            <div>
              <label className="font-body text-sm font-medium text-secondary block mb-2">
                {t("booking.phone")}
              </label>
              <Input
                type="tel"
                placeholder={t("booking.phonePh")}
                className="bg-background"
                {...form.register("phone")}
              />
              {errors.phone && (
                <p className="text-xs text-destructive mt-1">{t("booking.errorPhone")}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-body text-sm font-medium text-secondary block mb-2">
              {t("booking.email")}
            </label>
            <Input
              type="email"
              placeholder={t("booking.emailPh")}
              className="bg-background"
              {...form.register("email")}
            />
          </div>

          {/* Notes */}
          <div>
            <label className="font-body text-sm font-medium text-secondary block mb-2">
              {t("booking.notes")}
            </label>
            <Textarea
              rows={3}
              placeholder={t("booking.notesPh")}
              className="bg-background resize-none"
              {...form.register("notes")}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
              {t("booking.close")}
            </Button>
            <Button type="submit" className="flex-1 btn-gold rounded-md !h-9">
              {t("booking.submit")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
