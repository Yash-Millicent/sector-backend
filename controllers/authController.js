import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const login = async (req, res) => {
  try {
    const token = jwt.sign(
      { userId: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9" },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      id: 4,
      email: "cy2001435@gmail.com",
      api_token: token,
      first_name: "chandan",
    });
  } catch (error) {
    console.error("Error login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyToken = (req, res) => {
  // Extract token from the request body or headers
  const token = req.body.token || req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  // Verify the token
  jwt.verify(token.split(" ")[1], SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    // Token is valid, send back decoded payload
    res.json({ decoded });
  });
};
