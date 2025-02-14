const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input. Please provide an array of data.",
    });
  }

  const numbers = [];
  const alphabets = [];
  let highestLowercase = null;

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === "string") {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        if (!highestLowercase || item > highestLowercase) {
          highestLowercase = item;
        }
      }
    }
  });

  const response = {
    is_success: true,
    user_id: "sparsh_anand_14032003",
    email: "sparsh.anand2021@vitstudent.ac.in",
    roll_number: "21BCB0097",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
  };

  return res.status(200).json(response);
});

app.get("/bfhl", (req, res) => {
  const response = {
    operation_code: 1,
  };
  return res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
