export const FRESHA_URL =
  "https://www.fresha.com/en-GB/p/hakim-almasry-5538736?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnZnmKR20i-g0MSgvFxXi3hATLExJm1o3B0a3QMaZBF2P-TbmzW09j-ZclH-4_aem_WR3hBmyrm4tNWzTKHnqYLQ&pId=2493996&utm_id=97760_v0_s00_e0_tv3&share=true&utm_medium=social&utm_source=ig&utm_content=link_in_bio";
export const INSTAGRAM_URL = "https://instagram.com/hakim.studio";
export const STUDIO_ADDRESS_FULL =
  "عمارات الامداد والتموين, ٧ El-Nasr Rd, Masaken Al Mohandesin, Nasr City, Cairo Governorate 11371, Egypt";

export const STUDIO_ADDRESS = {
  line1: "عمارات الامداد والتموين, ٧ El-Nasr Rd",
  line2: "Masaken Al Mohandesin, Nasr City",
  line3: "Cairo Governorate 11371, Egypt",
} as const;

const STUDIO_MAPS_QUERY = encodeURIComponent(STUDIO_ADDRESS_FULL);
const STUDIO_MAPS_CID = "6710697488391892624";

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${STUDIO_MAPS_QUERY}`;
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${STUDIO_MAPS_QUERY}&cid=${STUDIO_MAPS_CID}&z=17&hl=en&output=embed`;
export const PHONE_NUMBER = "+20 112 350 9696";
export const PHONE_URL = "tel:+201123509696";
export const WHATSAPP_URL = "https://wa.me/201123509696";
export const FADEZY_URL = "https://fadezy.rohtiqlabs.com/";

export const HERO_VIDEO_SRC = `/assets/videos/${encodeURIComponent(
  "Hakim Studio 💈📍Nasr City – Cairo📥 Book now- Link in bio#HakimStudio #BarberEgypt #CairoBarber.mp4",
)}`;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Book now" },
  { href: "#location", label: "Find us" },
] as const;

export const TICKER_ITEMS = [
  { before: "", bold: "4,097", after: " Followers" },
  { before: "", bold: "Haircuts", after: " · Fades · Braids" },
  { before: "Nasr City, ", bold: "Cairo", after: "" },
  { before: "Mon–Sat ", bold: "10am – 9pm", after: "" },
  { before: "Book via ", bold: "Fresha", after: "" },
  { before: "", bold: "Best Barber", after: " in Egypt" },
  { before: "", bold: "Premium", after: " Service" },
] as const;

export const SERVICES = [
  {
    num: "01",
    name: "Classic fade",
    desc: "Skin · Low · Mid · High",
    price: "From 250 EGP",
    duration: "45 min",
  },
  {
    num: "02",
    name: "Braids & cornrows",
    desc: "All styles · All lengths",
    price: "From 400 EGP",
    duration: "90 min",
  },
  {
    num: "03",
    name: "Beard sculpt",
    desc: "Shape · Define · Hot towel",
    price: "From 150 EGP",
    duration: "30 min",
  },
  {
    num: "04",
    name: "Full package",
    desc: "Cut + Beard + Wash",
    price: "From 550 EGP",
    duration: "90 min",
  },
  {
    num: "05",
    name: "Kids cut",
    desc: "Under 12 · Gentle finish",
    price: "From 180 EGP",
    duration: "30 min",
  },
] as const;

const galleryVideoSrc = (filename: string) =>
  `/assets/videos/gallery/${encodeURIComponent(filename)}`;

export const GALLERY_VIDEOS = [
  {
    src: galleryVideoSrc(
      "Hakim Studio 💈Fade & Braids ✂️Fresh cut • Clean details📍 Nasr City – Cairo🔗 Book now - Link i.mp4",
    ),
    alt: "Fade and braids at Hakim Studio",
    className: "tall",
  },
  {
    src: galleryVideoSrc(
      "Hakim Studio 💈Fade & Braids ✂️Fresh cut • Clean details📍 Nasr City – Cairo🔗 Book now - Link i (1).mp4",
    ),
    alt: "Fresh cut at Hakim Studio",
    className: "",
  },
  {
    src: galleryVideoSrc(
      "Hakim Studio 💈Fade & Braids ✂️Fresh cut • Clean details📍 Nasr City – Cairo🔗 Book now - Link i (2).mp4",
    ),
    alt: "Clean fade details at Hakim Studio",
    className: "",
  },
  {
    src: galleryVideoSrc(
      "Hakim Studio 💈Fade & Braids ✂️Fresh cut • Clean details📍 Nasr City – Cairo🔗 Book now - Link i (3).mp4",
    ),
    alt: "Braids work at Hakim Studio",
    className: "",
  },
  {
    src: galleryVideoSrc(
      "Hakim Studio 💈Fade & Braids ✂️Fresh cut • Clean details📍 Nasr City – Cairo🔗 Book now - Link i (4).mp4",
    ),
    alt: "Barber session at Hakim Studio",
    className: "",
  },
] as const;

export const BOOKING_TIMES = [
  "10:00",
  "11:30",
  "13:00",
  "14:30",
  "16:00",
  "17:30",
] as const;

export const BOOKING_SERVICES = [
  "Classic fade — from 250 EGP",
  "Braids & cornrows — from 400 EGP",
  "Beard sculpt — from 150 EGP",
  "Full package — from 550 EGP",
  "Kids cut — from 180 EGP",
] as const;
