import { Plugin } from 'vue';
import Accordion from './components/accordion/Accordion.vue';
import AccordionItem from './components/accordion/AccordionItem.vue';
import Button from './components/button/Button.vue';
import ButtonGroup from './components/button/ButtonGroup.vue';
import ButtonToolbar from './components/button/ButtonToolbar.vue';
import Dropdown from './components/dropdown/Dropdown.vue';
import DropdownButton from './components/dropdown/DropdownButton.vue';
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
import NavItemDropdown from './components/nav/NavItemDropdown.vue';
import NavLogo from './components/nav/NavLogo.vue';
import Popper from './components/popper/Popper.vue';
import Select from './components/select/Select.vue';
import Table from './components/table/Table.vue';
import TableBody from './components/table/TableBody.vue';
import TableCol from './components/table/TableCol.vue';
import TableHead from './components/table/TableHead.vue';

export {
  Accordion,
  AccordionItem,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
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
  NavItemDropdown,
  NavLogo,
  Popper,
  Select,
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
      ButtonGroup,
      ButtonToolbar,
      Dropdown,
      DropdownButton,
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
      NavItemDropdown,
      NavLogo,
      Popper,
      Select,
      Table,
      TableBody,
      TableCol,
      TableHead,
    ].forEach((component) => {
      app.component(component.name, component);
    });
  },
} as Plugin;
