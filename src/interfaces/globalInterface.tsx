export interface fieldValue<K> {
  id: string;
  value: K;
  label: string;
}

export type WrapperForFieldValue<T> = {
  [K in keyof T]: fieldValue<T[K]>;
};
