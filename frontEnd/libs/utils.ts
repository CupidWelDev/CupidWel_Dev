export function cls(...classNames: string[]) {
  return classNames.join(" ");
}

export function cutText(text: string, length: number) {
  return text.length < length ? text : `${text.slice(0, length)}...`;
}
