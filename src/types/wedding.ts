export type WeddingRsvp = {
  name: string;
  attendance: "hadir" | "tidak-hadir";
  guestCount: number;
};

export type WeddingGuestbookEntry = {
  name: string;
  message: string;
};
