import { dateRegex } from '../utils/constants';

export const extractDates = (content: string) => {
  return content.match(dateRegex) || [];
};
