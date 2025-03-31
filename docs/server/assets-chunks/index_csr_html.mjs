export default `<!doctype html>
<html lang="en" data-beasties-container="">
<head>
  <meta charset="utf-8">
  <title>Homepage</title>
  <base href="/homepage/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>*,:before,:after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}:root{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color: oklch(0% 0 0)){:root{color-scheme:light;--fallback-p:#491eff;--fallback-pc:#d4dbff;--fallback-s:#ff41c7;--fallback-sc:#fff9fc;--fallback-a:#00cfbd;--fallback-ac:#00100d;--fallback-n:#2b3440;--fallback-nc:#d7dde4;--fallback-b1:#ffffff;--fallback-b2:#e5e6e6;--fallback-b3:#e5e6e6;--fallback-bc:#1f2937;--fallback-in:#00b3f0;--fallback-inc:#000000;--fallback-su:#00ca92;--fallback-suc:#000000;--fallback-wa:#ffc22d;--fallback-wac:#000000;--fallback-er:#ff6f70;--fallback-erc:#000000}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--fallback-p:#7582ff;--fallback-pc:#050617;--fallback-s:#ff71cf;--fallback-sc:#190211;--fallback-a:#00c7b5;--fallback-ac:#000e0c;--fallback-n:#2a323c;--fallback-nc:#a6adbb;--fallback-b1:#1d232a;--fallback-b2:#191e24;--fallback-b3:#15191e;--fallback-bc:#a6adbb;--fallback-in:#00b3f0;--fallback-inc:#000000;--fallback-su:#00ca92;--fallback-suc:#000000;--fallback-wa:#ffc22d;--fallback-wac:#000000;--fallback-er:#ff6f70;--fallback-erc:#000000}}}html{-webkit-tap-highlight-color:transparent}*{scrollbar-color:color-mix(in oklch,currentColor 35%,transparent) transparent}*:hover{scrollbar-color:color-mix(in oklch,currentColor 60%,transparent) transparent}:root{color-scheme:light;--in:72.06% .191 231.6;--su:64.8% .15 160;--wa:84.71% .199 83.87;--er:71.76% .221 22.18;--pc:89.824% .06192 275.75;--ac:15.352% .0368 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:.5rem;--rounded-badge:1.9rem;--animation-btn:.25s;--animation-input:.2s;--btn-focus-scale:.95;--border-btn:1px;--tab-border:1px;--tab-radius:.5rem;--p:49.12% .3096 275.75;--s:69.71% .329 342.55;--sc:98.71% .0106 342.55;--a:76.76% .184 183.61;--n:32.1785% .02476 255.701624;--nc:89.4994% .011585 252.096176;--b1:100% 0 0;--b2:96.1151% 0 0;--b3:92.4169% .00108 197.137559;--bc:27.8078% .029596 256.847952}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--in:72.06% .191 231.6;--su:64.8% .15 160;--wa:84.71% .199 83.87;--er:71.76% .221 22.18;--pc:13.138% .0392 275.75;--sc:14.96% .052 342.55;--ac:14.902% .0334 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:.5rem;--rounded-badge:1.9rem;--animation-btn:.25s;--animation-input:.2s;--btn-focus-scale:.95;--border-btn:1px;--tab-border:1px;--tab-radius:.5rem;--p:65.69% .196 275.75;--s:74.8% .26 342.55;--a:74.51% .167 183.61;--n:31.3815% .021108 254.139175;--nc:74.6477% .0216 264.435964;--b1:25.3267% .015896 252.417568;--b2:23.2607% .013807 253.100675;--b3:21.1484% .01165 254.087939;--bc:74.6477% .0216 264.435964}}</style><link rel="stylesheet" href="styles-SR5TLYID.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-SR5TLYID.css"></noscript></head>
<body ngcm="">
  <app-root></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-3HT7VZAK.js" type="module"></script></body>
</html>
`;