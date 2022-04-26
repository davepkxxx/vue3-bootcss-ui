import { Plugin } from 'vue';
import Accordion from './components/accordion/Accordion.vue';
import Input from './components/input/Input.vue';
import AccordionItem from './components/accordion/AccordionItem.vue';
import ListGroup from './components/list/ListGroup.vue';
import ListGroupItem from './components/list/ListGroupItem.vue';
import Navbar from './components/nav/Navbar.vue';
import NavbarBrand from './components/nav/NavbarBrand.vue';
import NavItem from './components/nav/NavItem.vue';
import NavLogo from './components/nav/NavLogo.vue';

export {
  Accordion,
  AccordionItem,
  Input,
  ListGroup,
  ListGroupItem,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLogo,
};

export default {
  install(app) {
    [
      Accordion,
      AccordionItem,
      Input,
      ListGroup,
      ListGroupItem,
      Navbar,
      NavbarBrand,
      NavItem,
      NavLogo,
    ].forEach((component) => {
      app.component(component.name, component);
    });
  },
} as Plugin;
