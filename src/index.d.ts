declare module "@src/routes" {
  import Router from 'vue-router';
  const router: Router;
  export default router;
}

declare module "*.less" {
  const classes: { [key: string]: string };
  export default classes;
}