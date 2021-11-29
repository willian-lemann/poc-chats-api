import { serverHttp } from "./http";
import "../routes/ws";

const PORT = process.env.PORT || 3333;
const ENV = process.env.NODE_ENV || "development";

serverHttp.listen(PORT, () =>
  console.log(`server running at port ${PORT} in ${ENV}`)
);
