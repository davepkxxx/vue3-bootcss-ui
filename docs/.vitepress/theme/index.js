import Layout from './Layout.vue';
import bootui from '../../../dist/index.esm';
import './github-markdown.css';

export default {
  Layout,
  enhanceApp({ app }) {
    app.use(bootui);
  },
};
