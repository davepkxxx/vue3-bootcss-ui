import { Plugin } from 'vue';
import Accordion from './components/accordion/Accordion.vue';
import AccordionItem from './components/accordion/AccordionItem.vue';
import Button from './components/button/Button.vue';
import Dropdown from './components/dropdown/Dropdown.vue';
import DropdownDivider from './components/dropdown/DropdownDivider.vue';
import DropdownHeader from './components/dropdown/DropdownHeader.vue';
import DropdownItem from './components/dropdown/DropdownItem.vue';
import DropdownMenu from './components/dropdown/DropdownMenu.vue';
import Check from './components/input/Check.vue';
import CheckGroup from './components/input/CheckGroup.vue';
import Input from './components/input/Input.vue';
import ListGroup from './components/list/ListGroup.vue';
import ListGroupItem from './components/list/ListGroupItem.vue';
import Navbar from './components/nav/Navbar.vue';
import NavbarBrand from './components/nav/NavbarBrand.vue';
import NavItem from './components/nav/NavItem.vue';
import NavLogo from './components/nav/NavLogo.vue';
import Table from './components/table/Table.vue';
import TableBody from './components/table/TableBody.vue';
import TableCol from './components/table/TableCol.vue';
import TableHead from './components/table/TableHead.vue';

export {
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  Check,
  CheckGroup,
  Input,
  ListGroup,
  ListGroupItem,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLogo,
  Table,
  TableBody,
  TableCol,
  TableHead,
};

export default {
  install(app) {
    [
      Accordion,
      AccordionItem,
      Button,
      Dropdown,
      DropdownDivider,
      DropdownHeader,
      DropdownItem,
      DropdownMenu,
      Check,
      CheckGroup,
      Input,
      ListGroup,
      ListGroupItem,
      Navbar,
      NavbarBrand,
      NavItem,
      NavLogo,
      Table,
      TableBody,
      TableCol,
      TableHead,
    ].forEach((component) => {
      app.component(component.name, component);
    });
  },
} as Plugin;
