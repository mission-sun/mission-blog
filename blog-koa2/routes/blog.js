const router = require("koa-router")();

router.prefix("/api/blog");
let exec = require ('../db/mongo');

router.get("/list", async function (ctx, next) {
  // const query = ctx.query;
  // if (ctx.session.viewCount == null) {
  //   ctx.session.viewCount = 0;
  // }else {
  //   ctx.session.viewCount ++;
  // }
  // exec

  // const getData = async () => {
  //   let data = await exec();
  //   console.log('data', data);
  //   ctx.body = {};
  // }
  await exec().then(res => {
    console.log('res.....', res);
    ctx.body = res;
  })
  // console.log('getData', getData());
 
  // ctx.body = {
  //   errNo: 1,
  //   query,
  //   session: ctx.session,
  //   viewCont: ctx.session.viewCount
  // };
});

module.exports = router;
