import { Plugin } from 'vue';
import Accordion from './components/accordion/Accordion.vue';
import AccordionItem from './components/accordion/AccordionItem.vue';
import Check from './components/input/Check.vue';
import CheckGroup from './components/input/CheckGroup.vue';
import Input from './components/input/Input.vue';
import ListGroup from './components/list/ListGroup.vue';
import ListGroupItem from './components/list/ListGroupItem.vue';
import Navbar from './components/nav/Navbar.vue';
import NavbarBrand from './components/nav/NavbarBrand.vue';
import NavItem from './components/nav/NavItem.vue';
import NavLogo from './components/nav/NavLogo.vue';

export {
  Accordion,
  AccordionItem,
  Check,
  CheckGroup,
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
      Check,
      CheckGroup,
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
