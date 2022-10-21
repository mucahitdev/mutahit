export const useConvertPrice = (labelValue,lang) => {
  lang !== 'tr' && (lang = 'en')
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + (lang === 'tr' ? 'MR' : 'B')
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + (lang === 'tr' ? 'B' : 'K')
    : Math.abs(Number(labelValue));
};