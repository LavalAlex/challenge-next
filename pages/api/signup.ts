/**
 * Handles user registration through a POST request.
 *
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/database";
import { LoginProps } from "@/actions/auth";
import { isValidEmail, isValidPassword } from "@/utils/validate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const connection = await connectToDatabase();
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: "Please provide a email or password.",
        });
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({
          error: "Please provide a valid email.",
        });
      }

      if (!isValidPassword(password)) {
        return res.status(400).json({
          error: "The password must be at least 8 characters long.",
        });
      }

      const [rows] = (await connection.query(
        "SELECT * FROM users WHERE email = ? LIMIT 1",
        [email]
      )) as unknown as LoginProps[][];

      if (rows && rows[0]) {
        return res.status(401).json({
          error: `Email is already registered!, ${email}`,
        });
      }

      await connection.execute(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, password]
      );
      await connection.end();
      res.status(200).json({ mensaje: "User successfully registered" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error when registering the user" });
    }
  } else {
    res.status(405).end();
  }
}
