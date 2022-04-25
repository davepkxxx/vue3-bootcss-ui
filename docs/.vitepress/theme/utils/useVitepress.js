import { useData } from 'vitepress';
import { computed } from 'vue';

export function useSidebar() {
  const { theme } = useData();
  return computed(() => {
    const { sidebar } = theme.value;
    const path = Object.getOwnPropertyNames(sidebar).find(path => location.pathname.startsWith(path));
    return sidebar[path] || [];
  })
}