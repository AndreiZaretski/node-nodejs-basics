import * as url from 'url';

export function getFilename(metaUrl) {
  return url.fileURLToPath(metaUrl);
  }

export function getDirname(metaUrl) {
  return url.fileURLToPath(new URL('.', metaUrl));
  }