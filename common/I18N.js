import { data } from '../static/entry/data_en_us';

export const get = (keyString) => {
  const dataString = JSON.stringify(data);
  const i18nData = JSON.parse(dataString);
  return i18nData[`${keyString}`];
};
