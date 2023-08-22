import { MetadataProps } from "./metadata";

export interface Page<T = null> {
  data: T;
  meta: MetadataProps;
}
