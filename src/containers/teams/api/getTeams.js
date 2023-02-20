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

export async function teamByYear(year) {
  if (year !== 0) {
    try {
      const { data } = await ergastAPI.get(
        `${year.target.value}/constructors.json`,
        {
          params: {
            limit: 1000,
          },
        }
      );
      return data;
    } catch (error) {
      return error;
    }
  } else {
    return false;
  }
}
