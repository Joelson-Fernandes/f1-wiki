import { ergastAPI } from '../../../lib/axios';

export async function getTeams() {
  try {
    const { data } = await ergastAPI.get('constructors.json', {
      params: {
        limit: 1000,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}
