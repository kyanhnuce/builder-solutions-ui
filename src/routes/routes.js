import config from '~/config';

// Layout
import { HeaderProfile } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Items from '~/pages/Items';

// Publish Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile, layout: HeaderProfile },
  { path: config.routes.items, component: Items },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
