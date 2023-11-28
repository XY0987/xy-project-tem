import * as shell from 'shelljs';

export function executeSplice(orderArrs: string[]) {
  let str = '';
  orderArrs.forEach((item) => {
    str += `${item} && `;
  });
  str = str.slice(0, str.length - 3);
  return str;
}

export function executeShell(orderArrs: string[]) {
  let order = executeSplice(orderArrs);
  shell.exec(order);
}
