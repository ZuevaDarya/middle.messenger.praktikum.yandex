export type Props = {
  events?: Record<string, EventListener>;
  attributes?: Record<string, string>;
  [key: string | symbol]: unknown;
}
