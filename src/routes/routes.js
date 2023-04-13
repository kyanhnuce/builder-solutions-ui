import config from '~/config';

// Layout
import { HeaderProfile } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Items from '~/pages/Items';
import Partner from '~/pages/Partner';
import Solutions from '~/pages/Solutions/Solutions';

// Publish Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.items, component: Items },
  { path: config.routes.partner, component: Partner },
  { path: config.routes.solutions, component: Solutions },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
