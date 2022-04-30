import { Ref, ref, toRefs, watch } from 'vue';

export function useSync<T extends object, E = T[keyof T]>(
  name: keyof T,
  props: T,
  emit: (e: any, value: E) => void,
  defaultValue?: E,
) {
  const data = ref(props[name] == null ? defaultValue : props[name]) as Ref<E>;
  watch(toRefs(props)[name], (value) => data.value = value);
  watch(data, (value) => emit(`update:${name}`, value));
  return data;
}

export function useValue<T>(
  props: { modelValue?: T },
  emit: (e: 'update:modelValue', value: T) => void,
  defaultValue?: T,
) {
  return useSync('modelValue', props, emit, defaultValue);
}

export function useDataSource<T>(dataSource: T | Promise<T>, defaultValue: T) {
  const data = ref(defaultValue) as Ref<T>;
  if (dataSource instanceof Promise) {
    dataSource.then((value) => data.value = value);
  } else {
    data.value = dataSource;
  }
  return data;
}
