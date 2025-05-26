export const useIRTime = () => {
  const now = new Date();

  const dayName = new Intl.DateTimeFormat("fa-IR", { weekday: "long" }).format(
    now
  );

  const persianDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);

  return { dayName, persianDate };
};

export const useGreetingByTime = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "صبح بخیر";
  if (hour >= 12 && hour < 15) return "ظهر بخیر";
  if (hour >= 15 && hour < 18) return "بعدازظهر بخیر";
  if (hour >= 18 && hour < 22) return "عصر بخیر";
  return "شب بخیر";
};
