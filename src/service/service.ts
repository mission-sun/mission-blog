import axios from "axios";

const get = (url: string, params: any) => {
  const promise = new Promise((reslove) => {
    axios({
      method: "get",
      url: url,
      params
    }).then(res => {
      reslove(res);
    });
  });
  return promise;
};
const post = (url: string, params: any) => {
  const promise = new Promise((reslove) => {
    axios({
      method: "post",
      url: url,
      data: params,
      responseType: 'json',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      reslove(res);
    });
  });
  return promise;
};
export { get, post };
