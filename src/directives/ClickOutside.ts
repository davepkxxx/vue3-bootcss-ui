import { ObjectDirective } from 'vue';

const handlerMap = new Map<Node, (() => void)[]>();

document.addEventListener('click', (e) => {
  if (e.target) {
    for (const [element, handlers] of handlerMap) {
      if (element !== e.target && !element.contains(e.target as Node)) {
        handlers.forEach((handler) => handler());
      }
    }
  }
});

const ClickOutside: ObjectDirective<Node, () => void> = {
  beforeMount(el, binding) {
    if (handlerMap.has(el)) {
      handlerMap.get(el)?.push(binding.value);
    } else {
      handlerMap.set(el, [binding.value]);
    }
  },
  unmounted(el, binding) {
    if (handlerMap.has(el)) {
      const handlers = handlerMap.get(el);
      if (handlers) {
        const index = handlers.findIndex((handler) => handler === binding.value);
        index > -1 && handlers.splice(index, 1);
      }
    }
  },
};

export default ClickOutside;
