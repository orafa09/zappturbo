import keys from './data/keys.json';

export function validateKey(key) {
  if (keys.starter.includes(key)) return 'starter';
  if (keys.professional.includes(key)) return 'professional';
  return null;
}
