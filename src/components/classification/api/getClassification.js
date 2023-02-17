import { ergastAPI } from '../../../lib/axios';

export async function getClassification() {
  try {
    const driverStandings = await ergastAPI.get(
      'current/driverStandings.json',
      {
        params: {
          limit: 1000,
        },
      }
    );
    const constructorsStandings = await ergastAPI.get(
      'current/constructorStandings.json',
      {
        params: {
          limit: 1000,
        },
      }
    );
    const classification = {
      driverClassification: driverStandings,
      constructorsClassification: constructorsStandings,
    };
    return classification;
  } catch (error) {
    return error;
  }
}
