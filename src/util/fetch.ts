export const baseUrl = 'http://localhost:8080';

export async function fetchWithToken(input: string, init: any = {headers: {}}) {
  init.headers['Authorization'] = localStorage.getItem('authorization');
  if (input.startsWith(baseUrl)) {
    input.replace(baseUrl, '');
  }
  return await fetch(input, init);
}

