import { useQuery } from 'react-query';
import { ergastAPI } from '../../../lib/axios';

// Busca todos os pilotos
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

// Busca pilotos por ano
export async function driversByYear(year) {
  if (year !== 0) {
    try {
      const { data } = await ergastAPI.get(
        `${year.target.value}/drivers.json`,
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

// Busca informações do piloto
async function getDriver(driverId) {
  const { data } = await ergastAPI
    .get(`drivers/${driverId}/driverStandings.json`, {
      params: {
        limit: 100,
      },
    })
    .then((res) => res)
    .catch((e) => e);
  return data;
}

export function driverDetails(driverId) {
  const result = useQuery({
    queryKey: ['driverDetails', driverId],
    queryFn: () => getDriver(driverId),
    // ...config,
  });
  return result;
}
