// lib/utils/date.ts یا مشابه
export const getIRTime = () => {
  const days = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];

  const now = new Date();
  const dayName = days[now.getDay()];

  const persianDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);

  return { dayName, persianDate };
};

export const getGreetingByTime = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "صبح بخیر";
  if (hour >= 12 && hour < 15) return "ظهر بخیر";
  if (hour >= 15 && hour < 18) return "بعدازظهر بخیر";
  if (hour >= 18 && hour < 22) return "عصر بخیر";
  return "شب بخیر";
};
