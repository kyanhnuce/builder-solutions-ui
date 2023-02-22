import config from '~/config';

// Layout
import { HeaderProfile } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

// Publish Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile, layout: HeaderProfile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
