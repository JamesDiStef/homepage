
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/homepage/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 4889, hash: '5e0e6c065cf91f45c48a6b9cb87b787fad72168c77ab2276cf2c2fbe9a73a8f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: 'aeca6aad789563f748f357ed91a2c0ea6cb9d07fef66c54423da242a70e8e5d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SR5TLYID.css': {size: 23367, hash: 'VX5rWtMLbv0', text: () => import('./assets-chunks/styles-SR5TLYID_css.mjs').then(m => m.default)}
  },
};
