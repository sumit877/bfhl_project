const atob = require("atob");

exports.processInputData = (data) => {
  const numbers = [];
  const alphabets = [];
  let highestLowercase = null;
  let isPrimeFound = false;

  for (const item of data) {
    if (!isNaN(item)) {
      numbers.push(item);
      if (isPrime(Number(item))) isPrimeFound = true;
    } else if (typeof item === "string") {
      alphabets.push(item);
      if (item >= "a" && item <= "z") {
        if (!highestLowercase || item > highestLowercase) {
          highestLowercase = item;
        }
      }
    }
  }

  return { numbers, alphabets, highestLowercase: highestLowercase ? [highestLowercase] : [], isPrimeFound };
};

exports.validateFile = (fileBase64) => {
  if (!fileBase64) {
    return { file_valid: false };
  }

  try {
    const fileData = atob(fileBase64.split(",")[1]);
    const mimeType = fileBase64.split(";")[0].split(":")[1];
    const fileSizeKb = (fileData.length / 1024).toFixed(2);

    return { file_valid: true, file_mime_type: mimeType, file_size_kb: fileSizeKb };
  } catch {
    return { file_valid: false };
  }
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
