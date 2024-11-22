export function DeepGet<T = any>(data: T, key: string) {
  return key.split('.').reduce((acc, cur) => acc[cur], data);
}

export function textMasking(text: string) {
  return text
    .split('')
    .map((v, i) => (i < Math.min(text.length * 0.2, 2) ? v : '*'))
    .join('');
}
