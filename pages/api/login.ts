import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/database";
import { LoginProps } from "@/actions/auth";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Recupera los datos del cliente (username y password)
      const { email, password } = req.body;

      // Valida que se hayan proporcionado ambos campos
      if (!email || !password) {
        return res.status(400).json({
          error: "Por favor, proporciona un usuario y una contraseña.",
        });
      }

      const connection = await connectToDatabase();

      // Consulta en la base de datos si el usuario existe
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

      // Compara la contraseña proporcionada con la almacenada en la base de datos
      const user = row;
      if (user.password !== password) {
        return res.status(401).json({ error: "Contraseña incorrecta." });
      }

      // Cierra la conexión cuando hayas terminado
      await connection.end();

      res.status(200).json({ msg: "The account is enabled!", email });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
