import * as request from '~/ultils/request';

export const like = async (title) => {
  try {
    const res = await request.get(`/items/${title}/data/:like`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const title = async () => {
  try {
    const res = await request.get(`/items/title`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
