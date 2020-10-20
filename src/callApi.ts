interface HeadersInterface {
  [header: string]: string;
}

interface OptionsInterface {
  method?: string;
  headers?: HeadersInterface;
  body?: string;
}

async function callApi<T>(
  url: string,
  options?: OptionsInterface | {}
): Promise<T | Error> {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (e) {
    return new Error(e);
  }
}

export default callApi;
