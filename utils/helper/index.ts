// 拼接类名
export const concatClass = (...names: string[]) => {
  return names.join(' ');
};

// 制造action
export function createAction(type: any, payload?: any) {
  return {
    type,
    payload: payload || {}
  };
}
