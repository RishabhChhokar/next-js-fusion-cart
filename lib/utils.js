export const round2 = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

export const convertDocToObj = (doc) => {
  doc._id = doc._id.toString();
  return doc;
};
