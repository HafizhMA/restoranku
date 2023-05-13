import home from '../views/pages/home';
import Detail from '../views/pages/detail';
import fav from '../views/pages/fav';

const routes = {
  // menyesuaikan pada index.html
  '/': home, // default page
  '/home': home,
  '/detail/:id': Detail,
  '/fav': fav,
};

export default routes;