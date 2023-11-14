export function extractTimeAndDate(timestamp: string) {
    try {
      const dateTime = new Date(timestamp);
      
      // Extract date components
      const year = dateTime.getUTCFullYear();
      const month = String(dateTime.getUTCMonth() + 1).padStart(2, '0');
      const day = String(dateTime.getUTCDate()).padStart(2, '0');
  
      // Extract time components
      const hours = String(dateTime.getUTCHours()).padStart(2, '0');
      const minutes = String(dateTime.getUTCMinutes()).padStart(2, '0');
      const seconds = String(dateTime.getUTCSeconds()).padStart(2, '0');
      const milliseconds = String(dateTime.getUTCMilliseconds()).padStart(3, '0');
  
      const date = `${year}-${month}-${day}`;
      const time = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  
      return { date, time };
    } catch (error) {
      // Handle invalid timestamp format
      return null;
    }
  }
  
//   // Example usage
//   const timestamp = "2023-11-11T07:08:38.704Z";
//   const result = extractTimeAndDate(timestamp);
  
//   if (result) {
//     console.log(`Date: ${result.date}`);
//     console.log(`Time: ${result.time}`);
//   } else {
//     console.log("Invalid timestamp format");
//   }
  