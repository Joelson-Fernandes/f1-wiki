/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
export const DriverStats = (driverData) => {
  const driverStats = { seassons: '', wins: '', champion: '' };

  const seassons = driverData.map((i) => i.season);
  driverStats.seassons = seassons.length;

  const wins = driverData.map((i) => parseInt(i.DriverStandings[0].wins, 10));
  driverStats.wins = wins.reduce((t, w) => (t += w), 0);

  const worldChampion = driverData.map((i) => {
    let champion = 0;
    if (i.DriverStandings[0].position === '1') champion += 1;
    return champion;
  });
  driverStats.champion = worldChampion.reduce((t, w) => (t += w), 0);

  return driverStats;
};
