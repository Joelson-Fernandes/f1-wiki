import { useQuery } from 'react-query';
import { ergastAPI } from '../../../lib/axios';

export async function getDriver(driverId) {
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

export function DriverDetails(driverId) {
  const result = useQuery({
    queryKey: ['driverChamps', driverId],
    queryFn: () => getDriver(driverId),
    // ...config,
  });
  return result;
}
