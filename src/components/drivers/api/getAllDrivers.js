import { ergastAPI } from '../../../lib/axios';

export async function getDrivers() {
  try {
    const { data } = await ergastAPI.get('drivers.json?=123', {
      params: {
        limit: 1000,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}
