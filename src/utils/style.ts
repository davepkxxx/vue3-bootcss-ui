import { ref } from 'vue';

const zIndex = ref(2000);

export function nextZIndex() {
  return ++zIndex.value;
}
