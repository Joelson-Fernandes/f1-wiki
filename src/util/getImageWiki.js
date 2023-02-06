import { useQuery } from 'react-query';
import { driverImgWiki } from '../lib/axios';
import ProfilePicture from '../assets/img/profile.png';

export async function getImageWiki(data) {
  const wikiTtitle = decodeURIComponent(
    data.url.split('/').pop().replaceAll('_', ' ')
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

export const getImage = (data) =>
  useQuery({
    queryKey: ['image', data],
    queryFn: () => getImageWiki(data),
    // ...config,
  });
