import { useQuery } from 'react-query';
import axios from 'axios';

async function getBiography(team) {
  const wikiTtitle = decodeURIComponent(
    team.url.split('/').pop().replaceAll('_', ' ')
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

export function biography(team) {
  const result = useQuery({
    queryKey: ['biography', team],
    queryFn: () => getBiography(team),
    // ...config,
  });
  return result;
}
