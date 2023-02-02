import { useQuery } from 'react-query';
import { driverImgWiki } from '../../../lib/axios';
import ProfilePicture from '../../../assets/img/profile.png';

export async function getPhoto(circuit) {
  const wikiTtitle = decodeURIComponent(
    circuit.url.split('/').pop().replaceAll('_', ' ')
  );

  const URL = await driverImgWiki
    .get('api.php', {
      params: {
        action: 'query',
        prop: 'pageimages',
        format: 'json',
        titles: wikiTtitle,
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

export const getPhotoCircuit = (circuit) =>
  useQuery({
    queryKey: ['teamCircuit', circuit],
    queryFn: () => getPhoto(circuit),
    // ...config,
  });
