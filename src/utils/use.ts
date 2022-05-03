import { createPopper, Instance, Modifier, OptionsGeneric } from '@popperjs/core';
import { ComponentPublicInstance, onUnmounted, Ref, ref, toRefs, unref, watch } from 'vue';
import { nextZIndex } from './style';

export function useSync<T extends { [P in keyof T]: T[P] }, E = T[keyof T]>(
  name: keyof T,
  props: T,
  emit: (e: any, value: E) => void,
  defaultValue?: E,
) {
  const data = ref(props[name] === undefined ? defaultValue : props[name]) as Ref<E>;
  watch(toRefs(props)[name], (value: E) => data.value = value);
  watch(data, (value) => emit(`update:${name}`, value));
  return data;
}

export function useValue<T>(props: { modelValue?: T },  emit: (e: 'update:modelValue', value: T) => void, defaultValue?: T) {
  return useSync('modelValue', props, emit, defaultValue);
}

export type DataSource<T> = T | Promise<T> | (() => T) | (() => Promise<T>);

export function useDataSource<T>(dataSource: DataSource<T> | undefined, defaultValue?: T, data?: Ref<T | undefined>) {
  data || (data = ref(defaultValue) as Ref<T | undefined>);
  if (dataSource instanceof Function) {
    data.value = unref(useDataSource(dataSource(), defaultValue, data));
  } else if (dataSource instanceof Promise) {
    dataSource.then((value) => data!.value = value);
  } else if (dataSource !== undefined) {
    data.value = dataSource;
  }
  return data;
}

export function useItemValue() {
  return function(item: any, field?: string | null) {
    return field == null ? item : item[field];
  };
}

export type TemplateRef = Ref<Element | ComponentPublicInstance | undefined>;
export type popperOptions = Partial<OptionsGeneric<Partial<Modifier<any, any>>>>;

export interface UsePopperOptions {
  referenceRef: TemplateRef;
  popperRef: TemplateRef;
  popper: Ref<Instance | undefined>;
  popped: Ref<boolean | undefined>;
  zIndex: Ref<number | undefined>;
}

export function usePopper(options: Partial<UsePopperOptions> = {}, popperOptions?: popperOptions): UsePopperOptions {
  const { referenceRef, popperRef, popper, popped, zIndex } = {
    popperRef: ref(),
    popper: ref(),
    popped: ref(false),
    zIndex: ref(0),
    ...options,
  } as UsePopperOptions;

  watch([referenceRef, popperRef], ([referenceValue, popperValue]) => {
    if (!unref(popper)) {
      const [referenceEl, popperEl] = [referenceValue, popperValue].map(unref).map((item) => (
        item && Object.hasOwn(item as object, '$el')
          ? (item as ComponentPublicInstance).$el
          : item
      ) as HTMLElement);
      if (referenceEl && popperEl) {
        popper.value = createPopper(referenceEl, popperEl, popperOptions);
      }
    }
  });

  watch(popped, (value) => {
    if (value) {
      zIndex.value = nextZIndex();
      unref(popper)?.update();
    }
  });

  onUnmounted(() =>  unref(popper)?.destroy());

  return {
    referenceRef,
    popperRef,
    popper,
    popped,
    zIndex,
  };
}
