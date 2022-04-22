import { Plugin } from 'vue';
import Navbar from './components/nav/Navbar.vue';
import NavbarBrand from './components/nav/NavbarBrand.vue';
import NavItem from './components/nav/NavItem.vue';

export {
  Navbar,
  NavbarBrand,
  NavItem,
};

export default {
  install(app) {
    [
      Navbar,
      NavbarBrand,
      NavItem,
    ].forEach((component) => {
      app.component(component.name, component);
    });
  },
} as Plugin;
