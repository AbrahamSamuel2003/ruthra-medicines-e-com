const routes = [
  '/',
  '/shop',
  '/shop/concerns',
  '/shop/formulations',
  '/shop/concerns/joint-mobility',
  '/shop/concerns/respiratory',
  '/shop/concerns/womens-wellness',
  '/shop/concerns/metabolic-wellness',
  '/shop/concerns/digestive-wellness',
  '/shop/concerns/skin-hair',
  '/shop/formulations/chooranam',
  '/shop/formulations/kudineer',
  '/shop/formulations/thailam',
  '/shop/formulations/syrups',
  '/shop/formulations/drops',
  '/product/ruthra-megasanthi-chooranam',
  '/product/ruthra-pirandai-chooranam',
  '/product/ruthra-sinocof-cough-syrup',
  '/product/ruthra-rej-viyan-pain-oil',
  '/product/ruthra-nochi-kudineer-chooranam',
  '/search',
  '/cart',
  '/checkout',
  '/order-success',
  '/about',
  '/ruthra-polyclinic',
  '/consultation',
  '/contact',
  '/faq',
  '/shipping',
  '/returns',
  '/privacy',
  '/terms'
];

async function run() {
  console.log('Testing ' + routes.length + ' routes on http://localhost:3000...');
  let failed = 0;
  for (const r of routes) {
    try {
      const res = await fetch('http://localhost:3000' + r);
      if (res.status === 200) {
        console.log(`[PASS] ${r} -> 200 OK`);
      } else {
        console.error(`[FAIL] ${r} -> ${res.status}`);
        failed++;
      }
    } catch (e) {
      console.error(`[ERROR] ${r} -> ${e.message}`);
      failed++;
    }
  }
  if (failed === 0) {
    console.log(`\nALL ${routes.length} ROUTES VERIFIED 200 OK!`);
  } else {
    console.error(`\n${failed} routes failed!`);
    process.exit(1);
  }
}

run();
