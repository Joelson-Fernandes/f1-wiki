import { ergastAPI } from '../../../lib/axios';

// Busca todos circuitos
export async function getAllCircuits() {
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

// Busca circuito indicando o ano
export async function circuitByYear(season) {
  if (season !== 0) {
    try {
      const { data } = await ergastAPI.get(
        `${season.target.value}/circuits.json`,
        {
          params: {
            limit: 1000,
          },
        }
      );
      return data;
    } catch (e) {
      return e;
    }
  }
  return false;
}
