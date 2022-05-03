import { isRef, nextTick, reactive, unref } from 'vue';
import { DataSource, useDataSource, useSync, useValue } from '../../../src/utils/use';

describe('test utils/use.ts', () => {
  describe('test useSync', () => {
    type MockEmit = jest.Mock<void, [event: 'update:value', value: any]>;
    const name = 'value';
    let props: { value: string };
    let emit: (event: 'update:value', value: string) => void;
    const defaultValue = 'default' as string;

    beforeEach(() => {
      props = reactive({ value: undefined }) as { value: any };
      emit = jest.fn();
    });

    it('if argument "props" does not have a property called parameter "name", the return value is argument "defaultValue"', async() => {
      const data = useSync(name, props, emit, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('default');
      props.value = 'props-changed';
      await nextTick();
      expect(unref(data)).toBe('props-changed');
      data.value = 'data-changed';
      await nextTick();
      expect(emit as MockEmit).toBeCalledWith('update:value', 'data-changed');
    });

    it('if argument "props" have a property called parameter "name", the return value is the value of argument "props"\'s property called argument "name"', async() => {
      props.value = 'props';
      await nextTick();
      const data = useSync(name, props, emit, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('props');
      props.value = 'props-changed';
      await nextTick();
      expect(unref(data)).toBe('props-changed');
      data.value = 'data-changed';
      await nextTick();
      expect(emit as MockEmit).toBeCalledWith('update:value', 'data-changed');
    });
  });

  describe('test useValue', () => {
    type MockEmit = jest.Mock<void, [event: 'update:modelValue', value: any]>;
    let props: { modelValue: string };
    let emit: (event: 'update:modelValue', value: string) => void;
    const defaultValue = 'default';

    beforeEach(() => {
      props = reactive({ modelValue: undefined }) as { modelValue: any };
      emit = jest.fn();
    });

    it('if argument "props" does not have the property "modelValue", the return value is argument "defaultValue"', async() => {
      const data = useValue(props, emit, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('default');
      props.modelValue = 'props-changed';
      await nextTick();
      expect(unref(data)).toBe('props-changed');
      data.value = 'data-changed';
      await nextTick();
      expect(emit as MockEmit).toBeCalledWith('update:modelValue', 'data-changed');
    });

    it('if argument "props" have the property "modelValue", the return value is the value of argument "props"\'s property "modelValue"', async() => {
      props.modelValue = 'props';
      await nextTick();
      const data = useValue(props, emit, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('props');
      props.modelValue = 'props-changed';
      await nextTick();
      expect(unref(data)).toBe('props-changed');
      data.value = 'data-changed';
      await nextTick();
      expect(emit as MockEmit).toBeCalledWith('update:modelValue', 'data-changed');
    });
  });

  describe('test useDataSource', () => {
    let dataSource: DataSource<string>;
    const defaultValue = 'default';

    it('if argument "dataSource" is undefined, the return value is argument "defaultValue"', () => {
      const data = useDataSource(dataSource, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('default');
    });

    it('if argument "dataSource" is not function and promise, the return value is argument "dataSource"', () => {
      dataSource = 'arg';
      const data = useDataSource(dataSource, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('arg');
    });

    it('if argument "dataSource" is not function and promise, the return value is argument "dataSource"', async() => {
      dataSource = Promise.resolve('arg');
      const data = useDataSource(dataSource, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('default');
      await nextTick();
      expect(unref(data)).toBe('arg');
    });

    it('if argument "dataSource" is function, the return value is the return value of argument "dataSource"', () => {
      dataSource = () => 'arg';
      const data = useDataSource(dataSource, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('arg');
    });

    it('if argument "dataSource" is not function and promise, the return value is argument "dataSource"', async() => {
      dataSource = () => Promise.resolve('arg');
      const data = useDataSource(dataSource, defaultValue);
      expect(isRef(data)).toBe(true);
      expect(unref(data)).toBe('default');
      await nextTick();
      expect(unref(data)).toBe('arg');
    });
  });
});
