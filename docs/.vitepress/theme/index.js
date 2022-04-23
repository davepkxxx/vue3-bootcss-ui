import Layout from './Layout.vue';
import bootui from '../../../dist/index.esm';

export default {
  Layout,
  enhanceApp({ app }) {
    app.use(bootui);
  },
};
