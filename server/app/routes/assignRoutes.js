import createUser from "../domain/use_cases/createUser.js";

export function assignRoutes(app) {
  app.get("/", (req, res) => res.send("42-matcha"));

  app.post("/users", createUser);
}

export default assignRoutes;
