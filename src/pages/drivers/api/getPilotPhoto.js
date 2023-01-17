import { useQuery } from 'react-query';
import { driverImgWiki } from '../../../lib/axios';
import ProfilePicture from '../../../assets/img/profile.png';

export async function getPhoto(driverName) {
  const URL = await driverImgWiki
    .get('api.php', {
      params: {
        action: 'query',
        prop: 'pageimages',
        format: 'json',
        titles: driverName,
        origin: '*',
        redirects: '',
      },
    })
    .then((res) => {
      const URLimg = res.data.query.pages[Object.keys(res.data.query.pages)]
        .thumbnail
        ? res.data.query.pages[Object.keys(res.data.query.pages)].thumbnail
            .source
        : ProfilePicture;
      return URLimg.replaceAll('50px', '300px');
    })
    .catch((e) => e);

  return URL;
}

export const getPhotoDriver = (driverName) =>
  useQuery({
    queryKey: ['driverPhoto', driverName],
    queryFn: () => getPhoto(driverName),
    // ...config,
  });
