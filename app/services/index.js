const SERVER = 'https://api.github.com';

export const fetchPopularRepositories = language => {
  const endpoint = window.encodeURI(`${SERVER}/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  return fetch(endpoint)
    .then(result => result.json())
    .then(data => data.items)
    .catch(error => {
      console.log('error');
      throw new Error(error.message);
    });
}
