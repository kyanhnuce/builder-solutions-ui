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

export const items = async (nameItem) => {
  try {
    const res = await request.get(`/items/data-name${nameItem}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const solution = async (solution) => {
  try {
    const res = await request.get(`/items${solution}`);
    return res.info;
  } catch (err) {
    console.log(err);
  }
};

export const category = async (category) => {
  try {
    const res = await request.get(`/items${category}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const item = async (item) => {
  try {
    const res = await request.get(`/items${item}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
