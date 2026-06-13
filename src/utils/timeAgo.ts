export function timeAgo(timestamp: string) {
  if (timestamp.includes("ago")) {
    return timestamp;
  }

  const now = new Date().getTime();

  const postTime = new Date(timestamp).getTime();

  const diff = now - postTime;

  const seconds = Math.floor(diff / 1000);

  const minutes = Math.floor(seconds / 60);

  const hours = Math.floor(minutes / 60);

  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds}s ago`;

  if (minutes < 60) return `${minutes}m ago`;

  if (hours < 24) return `${hours}h ago`;

  if (days < 7) return `${days}d ago`;

  return new Date(timestamp).toLocaleDateString();
}
