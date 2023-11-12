const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use the reduce() function to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
  return accumulator + currentBatch;
}, 0);

// Export totalBatteries if needed (for example, if you are testing with a separate file)
module.exports = totalBatteries;
