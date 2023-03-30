import config from '~/config';

// Layout
import { HeaderProfile } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Items from '~/pages/Items';
import Partner from '~/pages/Partner';

// Publish Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.items, component: Items },
  { path: config.routes.partner, component: Partner },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
