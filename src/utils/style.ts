import { ref } from 'vue';

export const zIndex = ref(2000);

export function nextZIndex() {
  return ++zIndex.value;
}
