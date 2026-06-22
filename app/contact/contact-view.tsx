"use client";

import { useState, useTransition } from "react";
import Image from "next/image";

const SERVICES_OPTIONS = [
  "Brand Identity",
  "UI/UX Design",
  "Brand Strategy",
  "Campaign Management",
  "Packaging",
  "Art Direction",
] as const;

const BUDGET_OPTIONS = [
  "< $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
] as const;

const TIME_SLOTS = [
  "09:00 AM",
  "11:30 AM",
  "02:00 PM",
  "04:30 PM",
] as const;

export function ContactView() {
  const [activeTab, setActiveTab] = useState<"message" | "book">("message");
  const [isPending, startTransition] = useTransition();

  // Message Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Booking Calendar States
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(() => new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<"calendar" | "confirm" | "success">("calendar");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    notes: "",
  });
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});

  const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    setCurrentMonth((m) => {
      if (m === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  };

  const nextMonth = () => {
    setCurrentMonth((m) => {
      if (m === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  };

  const todayDate = new Date();
  const isPrevDisabled = currentYear < todayDate.getFullYear() || 
    (currentYear === todayDate.getFullYear() && currentMonth <= todayDate.getMonth());

  // Handle service chip clicks
  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Validate and submit Inquiry Form
  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.details.trim()) newErrors.details = "Project details are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    startTransition(async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setMessageSuccess(true);
    });
  };

  // Validate and submit Booking
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!bookingForm.name.trim()) newErrors.name = "Name is required";
    if (!bookingForm.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(bookingForm.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setBookingErrors(newErrors);
      return;
    }

    setBookingErrors({});
    startTransition(async () => {
      // Simulate booking verification
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setBookingStep("success");
    });
  };

  const resetMessageForm = () => {
    setFormData({ name: "", email: "", details: "" });
    setSelectedServices([]);
    setSelectedBudget("");
    setMessageSuccess(false);
  };

  const resetBookingForm = () => {
    setSelectedDate(null);
    setSelectedSlot(null);
    setBookingStep("calendar");
    setBookingForm({ name: "", email: "", notes: "" });
  };

  return (
    <main className="flex flex-1 flex-col text-foreground bg-background">
      <section
        className="page-shell flex flex-1 border-t border-divider pt-24 pb-16 md:min-h-[820px] md:pt-32"
        data-reveal="section"
      >
        <div className="reveal-group grid w-full gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] lg:gap-16">
          
          {/* Left Column: Form & Interaction */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-[clamp(3rem,6vw,4rem)] font-medium uppercase leading-none tracking-[-5.1px] text-foreground">
                Let&apos;s Connect
              </h1>
              
              {/* Tab Switcher */}
              <div className="flex items-center gap-6 border-b border-divider pb-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("message")}
                  className={`relative pb-3 text-[17px] font-semibold uppercase tracking-[-0.6px] transition-colors ${
                    activeTab === "message" ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  Send a Message
                  {activeTab === "message" && (
                    <span className="absolute inset-x-0 bottom-[-1px] border-b-2 border-accent" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("book")}
                  className={`relative pb-3 text-[17px] font-semibold uppercase tracking-[-0.6px] transition-colors ${
                    activeTab === "book" ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  Book a Consultation
                  {activeTab === "book" && (
                    <span className="absolute inset-x-0 bottom-[-1px] border-b-2 border-accent" />
                  )}
                </button>
              </div>
            </div>

            {/* TAB CONTENT: SEND A MESSAGE */}
            {activeTab === "message" && (
              <div className="flex-1">
                {messageSuccess ? (
                  <div className="flex h-full flex-col justify-center rounded-2xl border border-divider bg-card p-8 shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-center sm:p-12">
                    <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-accent/15">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="mb-3 text-[28px] font-bold tracking-tight uppercase text-foreground">Inquiry Received</h3>
                    <p className="mx-auto max-w-[340px] text-[16px] leading-[1.5] text-muted">
                      Thank you for reaching out, {formData.name}! I will review your project details and get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={resetMessageForm}
                      className="mx-auto mt-8 rounded-full border-2 border-divider px-6 py-2.5 text-[15px] font-semibold uppercase text-foreground transition-all hover:bg-foreground/5"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleMessageSubmit} className="flex flex-col gap-8">
                    {/* Name & Email Group */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold uppercase tracking-[1px] text-muted">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Adonis Dominium"
                          className={`w-full rounded-lg border bg-background text-foreground px-4 py-3 text-[15px] tracking-[-0.6px] outline-none transition-all ${
                            errors.name ? "border-red-500 ring-1 ring-red-500" : "border-divider focus:border-accent focus:ring-1 focus:ring-accent"
                          }`}
                        />
                        {errors.name && <span className="text-[12px] text-red-500 font-medium">{errors.name}</span>}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold uppercase tracking-[1px] text-muted">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="briefing@dominium.co"
                          className={`w-full rounded-lg border bg-background text-foreground px-4 py-3 text-[15px] tracking-[-0.6px] outline-none transition-all ${
                            errors.email ? "border-red-500 ring-1 ring-red-500" : "border-divider focus:border-accent focus:ring-1 focus:ring-accent"
                          }`}
                        />
                        {errors.email && <span className="text-[12px] text-red-500 font-medium">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Services Chips */}
                    <div className="flex flex-col gap-3">
                      <label className="text-[13px] font-bold uppercase tracking-[1px] text-muted">
                        What services do you need?
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {SERVICES_OPTIONS.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-all ${
                                isSelected
                                  ? "border-accent bg-accent text-white shadow-sm"
                                  : "border-divider bg-background text-foreground hover:border-accent hover:text-accent"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Selector */}
                    <div className="flex flex-col gap-3">
                      <label className="text-[13px] font-bold uppercase tracking-[1px] text-muted">
                        Estimated Budget Range
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {BUDGET_OPTIONS.map((budget) => {
                          const isSelected = selectedBudget === budget;
                          return (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => setSelectedBudget(budget)}
                              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-all ${
                                isSelected
                                  ? "border-accent bg-accent text-white shadow-sm"
                                  : "border-divider bg-background text-foreground hover:border-accent hover:text-accent"
                              }`}
                            >
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold uppercase tracking-[1px] text-muted">
                        Project Details *
                      </label>
                      <textarea
                        rows={5}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell me about your project strategy, vision, and timeline..."
                        className={`w-full rounded-lg border bg-background text-foreground px-4 py-3 text-[15px] tracking-[-0.6px] outline-none transition-all resize-none ${
                          errors.details ? "border-red-500 ring-1 ring-red-500" : "border-divider focus:border-accent focus:ring-1 focus:ring-accent"
                        }`}
                      />
                      {errors.details && <span className="text-[12px] text-red-500 font-medium">{errors.details}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="mt-2 flex w-full items-center justify-center gap-3 rounded-lg bg-accent py-4 text-[16px] font-semibold uppercase tracking-[0.5px] text-white transition-opacity hover:bg-accent/90 disabled:opacity-50"
                    >
                      {isPending ? (
                        <>
                          <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Proposal</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* TAB CONTENT: BOOK A CONSULTATION */}
            {activeTab === "book" && (
              <div className="flex-1">
                {bookingStep === "success" ? (
                  <div className="flex h-full flex-col justify-center rounded-2xl border border-divider bg-card p-8 shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-center sm:p-12">
                    <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-accent/15">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7V3M16 7V3M3 11H21M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14L14 16L18 12" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="mb-3 text-[28px] font-bold tracking-tight uppercase text-foreground">Consultation Booked</h3>
                    <p className="mx-auto max-w-[340px] text-[16px] leading-[1.5] text-muted mb-6">
                      Your consultation call has been successfully scheduled with Adonis.
                    </p>
                    <div className="mx-auto mb-8 max-w-[320px] rounded-lg bg-background p-4 text-left border border-divider">
                      <p className="text-[12px] uppercase font-bold text-muted tracking-wider mb-2">Meeting Details</p>
                      <p className="text-[15px] font-bold text-foreground">Briefing & Strategy Consultation</p>
                      <p className="text-[14px] text-foreground mt-1">
                        🗓️ {selectedDate ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
                      </p>
                      <p className="text-[14px] text-foreground">⏰ {selectedSlot} (Lagos Time)</p>
                      <p className="text-[14px] text-accent mt-2 font-medium">💻 Google Meet Invite sent to {bookingForm.email}</p>
                    </div>
                    <button
                      type="button"
                      onClick={resetBookingForm}
                      className="mx-auto rounded-full border-2 border-divider px-6 py-2.5 text-[15px] font-semibold uppercase text-foreground transition-all hover:bg-foreground/5"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : bookingStep === "confirm" ? (
                  <form onSubmit={handleBookingSubmit} className="flex flex-col gap-6 rounded-2xl border border-divider bg-card p-6 shadow-sm sm:p-8">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setBookingStep("calendar")}
                        className="flex size-8 items-center justify-center rounded-full border border-divider hover:bg-foreground/5 text-foreground"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <span className="text-[16px] font-semibold uppercase tracking-[-0.6px] text-foreground">Confirm Details</span>
                    </div>

                    <div className="rounded-lg bg-background p-4 border border-divider flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                      <div>
                        <p className="text-[13px] font-bold uppercase tracking-[0.5px] text-muted">Selected Session</p>
                        <p className="text-[16px] font-bold text-foreground mt-0.5">Briefing Consultation</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-[14px] font-semibold text-foreground">
                          {selectedDate ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
                        </p>
                        <p className="text-[14px] text-accent font-medium">{selectedSlot}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold uppercase tracking-[1px] text-muted">Your Name *</label>
                      <input
                        type="text"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="Adonis Dominium"
                        className={`w-full rounded-lg border bg-background text-foreground px-4 py-3 text-[15px] outline-none transition-all ${
                          bookingErrors.name ? "border-red-500 ring-1 ring-red-500" : "border-divider focus:border-accent focus:ring-1 focus:ring-accent"
                        }`}
                      />
                      {bookingErrors.name && <span className="text-[12px] text-red-500 font-medium">{bookingErrors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold uppercase tracking-[1px] text-muted">Your Email *</label>
                      <input
                        type="email"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        placeholder="partner@dominium.co"
                        className={`w-full rounded-lg border bg-background text-foreground px-4 py-3 text-[15px] outline-none transition-all ${
                          bookingErrors.email ? "border-red-500 ring-1 ring-red-500" : "border-divider focus:border-accent focus:ring-1 focus:ring-accent"
                        }`}
                      />
                      {bookingErrors.email && <span className="text-[12px] text-red-500 font-medium">{bookingErrors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold uppercase tracking-[1px] text-muted">Special Requests / Notes</label>
                      <textarea
                        rows={3}
                        value={bookingForm.notes}
                        onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                        placeholder="Anything specific we should research prior to the call?"
                        className="w-full rounded-lg border border-divider bg-background text-foreground px-4 py-3 text-[15px] outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="mt-2 flex w-full items-center justify-center gap-3 rounded-lg bg-accent py-4 text-[16px] font-semibold uppercase tracking-[0.5px] text-white transition-opacity hover:bg-accent/90 disabled:opacity-50"
                    >
                      {isPending ? (
                        <>
                          <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Scheduling Meeting...</span>
                        </>
                      ) : (
                        <span>Confirm Consultation</span>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col gap-8">
                    {/* Calendar grid */}
                    <div className="rounded-2xl border border-divider bg-card p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <h3 className="text-[17px] font-bold uppercase tracking-[-0.6px] text-foreground min-w-[120px]">
                            {MONTH_NAMES[currentMonth]} {currentYear}
                          </h3>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              disabled={isPrevDisabled}
                              onClick={prevMonth}
                              className="flex size-7 items-center justify-center rounded-full border border-divider hover:bg-foreground/5 disabled:opacity-35 text-foreground"
                              aria-label="Previous month"
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="flex size-7 items-center justify-center rounded-full border border-divider hover:bg-foreground/5 text-foreground"
                              aria-label="Next month"
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <span className="text-[12px] font-bold uppercase text-accent tracking-[1px] hidden sm:inline">
                          Lagos, Nigeria (GMT+1)
                        </span>
                      </div>

                      {/* Day Labels */}
                      <div className="grid grid-cols-7 text-center text-[12px] font-bold text-muted mb-4 uppercase tracking-[0.5px]">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>

                      {/* Date Cells */}
                      <div className="grid grid-cols-7 gap-y-2.5 gap-x-1.5">
                        {/* Empty padding blocks for starting day of month */}
                        {Array.from({ length: firstDayIndex }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}

                        {/* Rendering days of month */}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const dateNum = i + 1;
                          const cellDate = new Date(currentYear, currentMonth, dateNum);
                          
                          // Booking is possible only starting 2 days after today
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          const minDate = new Date(today);
                          minDate.setDate(today.getDate() + 2);

                          const isBookable = cellDate >= minDate && cellDate.getDay() !== 0; // Sundays (0) are off
                          const isSelected = selectedDate !== null && 
                            selectedDate.getDate() === dateNum && 
                            selectedDate.getMonth() === currentMonth && 
                            selectedDate.getFullYear() === currentYear;

                          return (
                            <button
                              key={`date-${dateNum}`}
                              type="button"
                              disabled={!isBookable}
                              onClick={() => {
                                setSelectedDate(cellDate);
                                setSelectedSlot(null);
                              }}
                              className={`flex aspect-square items-center justify-center rounded-full text-[15px] font-semibold transition-all ${
                                isSelected
                                  ? "bg-accent text-white shadow-sm"
                                  : isBookable
                                  ? "bg-background text-foreground hover:border hover:border-accent hover:text-accent hover:shadow-sm"
                                  : "text-foreground/20 cursor-not-allowed"
                              }`}
                            >
                              {dateNum}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slot Selector */}
                    {selectedDate && (
                      <div className="flex flex-col gap-4 rounded-2xl border border-divider bg-card p-6 shadow-sm transition-all animate-reveal">
                        <p className="text-[14px] font-semibold uppercase tracking-[-0.6px] text-foreground">
                          Available Times for {selectedDate ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric" }) : ""}
                        </p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                          {TIME_SLOTS.map((slot) => {
                            const isSelected = selectedSlot === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={`rounded-lg border py-3 text-[14px] font-semibold transition-all ${
                                  isSelected
                                    ? "border-accent bg-accent text-white shadow-sm"
                                    : "border-divider bg-background text-foreground hover:border-accent hover:text-accent"
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>

                        {selectedSlot && (
                          <button
                            type="button"
                            onClick={() => setBookingStep("confirm")}
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 text-[15px] font-semibold uppercase text-white transition-opacity hover:bg-accent/90"
                          >
                            <span>Continue to Details</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Visual Portrait & Links */}
          <div className="flex flex-col gap-12 lg:pl-6">
            <div
              className="relative w-full overflow-hidden justify-self-end lg:max-w-[627px]"
              data-reveal="soft"
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              <div className="relative aspect-[626.67/766.66] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/figma/contact-portrait.png"
                  alt="Adonis Dominium illustrated portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 627px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quick Contact info */}
            <div className="flex flex-col gap-6 pt-4 text-foreground">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[1px] text-muted mb-1">Office Location</p>
                <p className="text-[16px] font-semibold text-foreground">Benin / Lagos, Nigeria</p>
              </div>
              
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[1px] text-muted mb-1.5">Direct Channels</p>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:peteriyevhobu6@gmail.com"
                    className="text-[15px] font-semibold text-accent hover:underline"
                  >
                    peteriyevhobu6@gmail.com
                  </a>
                  <a
                    href="tel:+2349063683035"
                    className="text-[15px] font-semibold text-foreground hover:text-accent"
                  >
                    +234 (906) 368 3035
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="flex justify-center py-6" data-reveal="soft">
        <Image
          src="/figma/contact-mark.svg"
          alt=""
          width={179}
          height={123}
          className="h-[123px] w-[179px]"
        />
      </div>
    </main>
  );
}
