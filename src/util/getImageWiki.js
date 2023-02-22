import { useQuery } from 'react-query';
import { imgWiki } from '../lib/axios';
import ProfilePicture from '../assets/img/profile.png';

async function getThumbnailWiki(data) {
  const wikiTtitle = decodeURIComponent(
    data.url.split('/').pop().replaceAll('_', ' ')
  );

  const URL = await imgWiki
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

async function getImagesWiki(data) {
  const wikiTtitle = decodeURIComponent(
    data.url.split('/').pop().replaceAll('_', ' ')
  );

  const imagesArr = await imgWiki
    .get('api.php', {
      params: {
        action: 'query',
        prop: 'images',
        format: 'json',
        titles: wikiTtitle,
        origin: '*',
        redirects: '',
      },
    })
    .then(async (res) => {
      const pageId = Object.keys(res.data.query.pages)[0];
      const images = await res.data.query.pages[pageId].images.filter(
        (image) =>
          image.title.includes('.jpg') ||
          image.title.includes('.png') ||
          image.title.includes('.jpeg')
      );
      return images;
    })
    .catch((e) => e);
  return imagesArr;
}

export const getThumbnail = (data) =>
  useQuery({
    queryKey: ['thumbnail', data],
    queryFn: () => getThumbnailWiki(data),
    // ...config,
  });

export const getImages = (data) =>
  useQuery({
    queryKey: ['images', data],
    queryFn: () => getImagesWiki(data),
    // ...config,
  });
