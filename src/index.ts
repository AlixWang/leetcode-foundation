const getErrorMsg = (errMsg: string): string => {
  const regexp = /TypeError: (.*)\n/;
  const match = regexp.exec(errMsg);
  if (match) {
    return match[1];
  }
  return '';
};

const getErrStack = (
  errItem: string
): { [x: string]: string | number } | undefined => {
  const regexp = /(https?:\/\/.*?):(\d+):(\d+)$/;
  const match = regexp.exec(errItem);
  if (match) {
    return {
      filename: match[1],
      line: match[2],
      column: match[3],
    };
  }
};

export const parseError = (
  errMsg: string
): { [x: string]: string | { [x: string]: string | number }[] } => {
  const message = getErrorMsg(errMsg);
  const errorStackArray = [] as { [x: string]: string | number }[];
  const errorStack = errMsg.split('\n');
  if (errorStack) {
    errorStack.forEach((item) => {
      const stack = getErrStack(item);
      if (stack) {
        errorStackArray.push(stack);
      }
    });
  }
  return {
    message,
    stack: errorStackArray,
  };
};
