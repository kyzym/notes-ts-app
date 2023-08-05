import { dateRegex } from '../utils/constants';

export const extractContent = (content: string) => {
  return content.replace(dateRegex, '').trim();
};
