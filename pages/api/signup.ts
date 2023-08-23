// Importa la conexión a la base de datos MySQL aquí
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/database";
import { LoginProps } from "@/actions/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Conecta a la base de datos
      const connection = await connectToDatabase();

      // Extrae los datos del cuerpo de la solicitud
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: "Please provide a email or password.",
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
      // Responde con una confirmación
      res.status(200).json({ mensaje: "Usuario registrado con éxito" });
    } catch (error) {
      // Maneja los errores, por ejemplo, si el usuario ya existe
      console.error(error);
      res.status(500).json({ mensaje: "Error al registrar el usuario" });
    }
  } else {
    // Responde a otros métodos de solicitud con un error 405 (Método no permitido)
    res.status(405).end();
  }
}
