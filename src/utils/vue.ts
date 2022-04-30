import { Component, getCurrentInstance } from 'vue';

export function getChildNodes(slotName = 'default') {
  const slots = getCurrentInstance()?.slots;
  return slots && slots[slotName] ? slots[slotName]!() : [];
}

export function filterChildNodes(nodeType: string, slotName?: string) {
  return getChildNodes(slotName).filter(({ type }) => type === nodeType || (type as Component).name === nodeType);
}
