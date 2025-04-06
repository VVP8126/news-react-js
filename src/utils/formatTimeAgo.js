export const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondsPassed = (now.getTime() - date.getTime()) / 1000;

  if (secondsPassed < 60) {
    return `${Math.floor(secondsPassed)}s ago`;
  }
  if (secondsPassed < 3600) {
    return `${Math.floor(secondsPassed / 60)}m ago`;
  }
  if (secondsPassed <= 86400) {
    return `${Math.floor(secondsPassed / 3600)}h ago`;
  } else {
    const days = Math.floor(secondsPassed / 86400);
    return `${days === 1 ? `${days} day ago` : `${days} days ago`}`;
  }
};
