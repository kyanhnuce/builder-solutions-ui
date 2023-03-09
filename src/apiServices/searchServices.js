import * as request from '~/ultils/request';

export const search = async (q, type = 'less') => {
  try {
    const res = await request.get(`items/search`, {
      params: {
        q,
        type,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
