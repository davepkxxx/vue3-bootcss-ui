import { useData } from 'vitepress';
import { computed } from 'vue';

export function useSidebar() {
  return computed(() => {
    const { sidebar } = useData().theme.value;
    const path = Object.getOwnPropertyNames(sidebar).find(path => location.pathname.startsWith(path));
    return sidebar[path];
  })
}