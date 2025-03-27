
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/homepage/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 4889, hash: '53a1859876de94e4e3d0deb7e81ab4ce9a27b0ee1f1b5d237ea8ed9163200c4a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: '7c66722c0dc18801d0a375d305f6ca61db8988ccbe20a0e445a1e158cb798eab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SR5TLYID.css': {size: 23367, hash: 'VX5rWtMLbv0', text: () => import('./assets-chunks/styles-SR5TLYID_css.mjs').then(m => m.default)}
  },
};
