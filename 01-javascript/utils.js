export const sum = (a, b) => a + b;
export const subs = (a, b) => a - b;
export const mult = (a, b) => a * b;
export const div = (a, b) => a / b;
export const operations = {
  add: sum,
  substract: subs,
  multiply: mult,
  division: div,
};

export function initLog(
  message,
  options = {
    prefixMessage: undefined,
    color: undefined,
  }
) {
  const defaultPrefixMessage = "Running";
  const defaultBackground = "none";
  const defaultColor = "orange";
  const newOptions = {
    prefixMessage: getIsArgValid(options.prefixMessage)
      ? options.prefixMessage
      : defaultPrefixMessage,
    color: getIsArgValid(options.color) ? options.color : defaultColor,
  };
  const { prefixMessage, color } = newOptions;
  const char = "·";
  const whiteSpace = prefixMessage.length > 0 ? " " : "";
  const strLength = prefixMessage.length + whiteSpace.length + message.length;
  const hr = char.repeat(strLength);
  function getIsArgValid(arg) {
    return typeof arg === "string";
  }
  console.log(
    `%c
${hr}
${prefixMessage}${whiteSpace}${message}
${hr}`,
    `background: ${defaultBackground}; color: ${color}`
  );
}

export default operations;
