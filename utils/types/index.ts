export interface ActionType {
  type: string;
  payload?: any;
  [random: string]: any;
}
