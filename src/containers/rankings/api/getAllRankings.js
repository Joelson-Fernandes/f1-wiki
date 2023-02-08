import { ergastAPI } from '../../../lib/axios';

export async function getRankings() {
  try {
    const { data } = await ergastAPI.get('driverStandings/1.json', {
      params: {
        limit: 1000,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}
