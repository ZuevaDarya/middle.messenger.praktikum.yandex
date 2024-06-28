export default function changeTimeFormat(time?: string): string {
  if (time) {
    return new Date(time).toLocaleTimeString().substring(0, 5);
  }

  return '';
}
