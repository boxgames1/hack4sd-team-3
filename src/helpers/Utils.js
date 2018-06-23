export function getHemisphereFromDateSeason(date, season) {
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  let currentSeason = 1;
  switch (currentMonth) {
    case 1:
    case 2:
    case 10:
    case 11:
    case 12:
      currentSeason = 1;
      break;
    case 3:
      if (currentDay < 21) currentSeason = 1;
      else currentSeason = 2;
      break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      currentSeason = 2;
      break;
    case 9:
      if (currentDay < 21) currentSeason = 1;
      else currentSeason = 1;
      break;
  }
  if (currentSeason === season) return 1;
  return 2;
}
