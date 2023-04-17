import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/buil-route-path.js";

const database = new Database

export const routes = [
  {
    method: "GET",
    path: ("/users"),
    handler: (req, res) => {
      const users = database.select('users')

      return res
        .setHeader('Content-Type', 'application/json',)
        .end(JSON.stringify(users));
    }
  },
  {
    method: "POST",
    path: ("/users"),
    handler: (req, res) => {
      const { name, email } = req.body;
      const user = {
        id: randomUUID(),
        name,
        email
      };

      database.insert('users', user)

      return res.writeHead(201).end();
    }
  },

]