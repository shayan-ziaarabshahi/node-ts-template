import { Express } from "express";
import healthCheckApi from '../controllers/health-check.controller'
import userApi from '../controllers/user.controller'
import sessionApi from '../controllers/session.controller'
import productApi from '../controllers/session.controller'

function routes(app: Express) {
  app.use("/healthcheck", healthCheckApi);
  app.use("/api/users", userApi)
  app.use("/api/sessions", sessionApi)
  app.use("/api/products", productApi)
}

export default routes;
