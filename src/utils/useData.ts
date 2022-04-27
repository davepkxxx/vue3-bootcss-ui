import {Ref, ref, toRefs, watch } from 'vue';

export function useSync<T extends object, E = T[keyof T]>(
  name: keyof T,
  props: T,
  emit: (e: any, value: E) => void,
) {
  const data = ref(props[name]) as Ref<E>;
  watch(toRefs(props)[name], (value) => data.value = value);
  watch(data, (value) => emit(`update:${name}`, value));
  return data;
}

export function useValue<T>(
  props: { modelValue?: T },
  emit: (e: 'update:modelValue', value: T) => void,
) {
  return useSync('modelValue', props, emit);
}
