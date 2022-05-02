import Layout from './Layout.vue';
import bootui from '../../../dist/index.esm';
import 'bootstrap/dist/css/bootstrap.css'
import '../../../dist/index.css';
import './index.css';

export default {
  Layout,
  enhanceApp({ app }) {
    app.use(bootui);
  },
};
