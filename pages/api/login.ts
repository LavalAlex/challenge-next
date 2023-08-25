/**
 * Handles user login through a POST request.
 *
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/database";
import { LoginProps } from "@/actions/auth";
import { isValidEmail, isValidPassword } from "@/utils/validate";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          error: "Please provide a username or password.",
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

      const connection = await connectToDatabase();

      const [rows] = (await connection.query(
        "SELECT * FROM users WHERE email = ? LIMIT 1",
        [email]
      )) as unknown as LoginProps[][];

      if (!rows && !rows[0]) {
        return res.status(401).json({
          error: `This email is not registered, please register, ${email}`,
        });
      }
      const row = rows[0] as unknown as LoginProps;
      const user = row;
      if (user.password !== password) {
        return res.status(401).json({ error: "Incorrect password." });
      }
      await connection.end();

      res.status(200).json({ msg: "The account is enabled!", email });
    } catch (error) {
      res.status(500).json({ error: "Server error." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
