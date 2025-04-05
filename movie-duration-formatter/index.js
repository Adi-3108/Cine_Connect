

/**
 * Convert movie duration in minutes to a more readable format.
 * @param {number} minutes - The movie duration in minutes.
 * @returns {string} The formatted duration (e.g., "2 hours 30 minutes").
 */
function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} hour${hours !== 1 ? 's' : ''} ${mins} minute${mins !== 1 ? 's' : ''}`;
  }
  
  export default formatDuration;
  