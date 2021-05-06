export function convertDurationToTimeString(duration: number) {
  const hour = Math.floor(duration / 3600);
  const minute = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [hour, minute, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':');

  return timeString
}
