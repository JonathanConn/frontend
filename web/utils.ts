export const abbrevAccount = (account: string) =>
  account.slice(0, 6) + "..." + account.slice(-4);
