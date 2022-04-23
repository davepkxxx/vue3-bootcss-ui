import { Plugin } from 'vue';
import Accordion from './components/accordion/Accordion.vue';
import AccordionItem from './components/accordion/AccordionItem.vue';
import ListGroup from './components/list/ListGroup.vue';
import ListGroupItem from './components/list/ListGroupItem.vue';
import Navbar from './components/nav/Navbar.vue';
import NavbarBrand from './components/nav/NavbarBrand.vue';
import NavItem from './components/nav/NavItem.vue';

export {
  Accordion,
  AccordionItem,
  ListGroup,
  ListGroupItem,
  Navbar,
  NavbarBrand,
  NavItem,
};

export default {
  install(app) {
    [
      Accordion,
      AccordionItem,
      ListGroup,
      ListGroupItem,
      Navbar,
      NavbarBrand,
      NavItem,
    ].forEach((component) => {
      app.component(component.name, component);
    });
  },
} as Plugin;
