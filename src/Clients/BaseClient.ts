import { mergeLeft } from "ramda";

const get = async (url: string, ops: object = {}) => {
  mergeLeft(ops, { method: "get" });
  let resp, json;
  try {
    resp = await fetch(url, ops);
  } catch (error) {
    return null;
  }

  try {
    json = resp.json();
  } catch (error) {
    return null;
  }
  return json;
};

const BaseClient = () => {
  return {
    get,
  };
};

export default BaseClient;
