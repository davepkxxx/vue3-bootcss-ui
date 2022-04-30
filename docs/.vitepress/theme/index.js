import Layout from './Layout.vue';
import bootui from '../../../dist/index.esm';
import 'bootstrap/dist/css/bootstrap.css'
import '../../../dist/index.css';
import './github-markdown.css';

export default {
  Layout,
  enhanceApp({ app }) {
    app.use(bootui);
  },
};
