import { MetadataProps } from "./metadata";

export interface Page<T = null> {
  email: T;
  meta: MetadataProps;
}
