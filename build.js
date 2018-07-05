const Lectro = require('@lectro/core');
const EnhancerCommonutils = require('@lectro/enhancer-commonutils');
const EnhancerBuildutils = require('@lectro/enhancer-buildutils');

const ShinjuBuilder = new Lectro('node');

ShinjuBuilder.use(EnhancerCommonutils)
  .use(EnhancerBuildutils)
  .addProgressBar({ name: 'Shinju', color: 'yellow' })
  .build();
