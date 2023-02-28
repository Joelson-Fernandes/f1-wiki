import { useQuery } from 'react-query';
import axios from 'axios';

async function getBiography(data) {
  const wikiTtitle = decodeURIComponent(
    data.url.split('/').pop().replaceAll('_', ' ')
  );

  const byographi = await axios
    .get('https://pt.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        titles: wikiTtitle,
        prop: 'extracts',
        exsectionformat: 'wiki',
        exintro: true,
        redirects: true,
        origin: '*',
      },
    })
    .then(async (res) => {
      const pageId = Object.keys(res.data.query.pages)[0];
      const biographyHtml = await res.data.query.pages[pageId].extract;
      const biographyText =
        biographyHtml === undefined
          ? ''
          : biographyHtml.replace(/(<([^>]+)>)/gi, '');
      return biographyText;
    })
    .catch((e) => e);
  return byographi;
}

export function biography(data) {
  const result = useQuery({
    queryKey: ['biography', data],
    queryFn: () => getBiography(data),
    // ...config,
  });
  return result;
}
