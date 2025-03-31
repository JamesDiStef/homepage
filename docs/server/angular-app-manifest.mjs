
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/homepage/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 4889, hash: '5c2a067e143b100c02a76674a7658fbd356b906f1879b3f33607412761f3e438', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: 'fc5d4440b54e39c682277262c99052f60e6fa70f621c27b791716ad9eb1dad86', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SR5TLYID.css': {size: 23367, hash: 'VX5rWtMLbv0', text: () => import('./assets-chunks/styles-SR5TLYID_css.mjs').then(m => m.default)}
  },
};
