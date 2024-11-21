const { processInputData, validateFile } = require("../models/utils");

exports.handlePostRequest = (req, res) => {
  try {
    const { data, file_b64 } = req.body;

    if (!data) {
      return res.status(400).json({ is_success: false, error: "Data is required" });
    }

    const email = "sumitchoudhary210205@acropolis.in";
    const rollNumber = "0827AL211063";
    const userId = "sumit_choudhary_20022002";

    const { numbers, alphabets, highestLowercase, isPrimeFound } = processInputData(data);

    const fileInfo = validateFile(file_b64);

    res.status(200).json({
      is_success: true,
      user_id: userId,
      email,
      roll_number: rollNumber,
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercase,
      is_prime_found: isPrimeFound,
      ...fileInfo,
    });
  } catch (error) {
    res.status(500).json({ is_success: false, error: error.message });
  }
};

exports.handleGetRequest = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};
