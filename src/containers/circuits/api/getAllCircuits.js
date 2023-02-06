import { ergastAPI } from '../../../lib/axios';

export async function getCircuits() {
  try {
    const { data } = await ergastAPI.get('circuits.json', {
      params: {
        limit: 1000,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}
