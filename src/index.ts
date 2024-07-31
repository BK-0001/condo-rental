import { app } from "./app";
import { HOST, POST } from "./env";

app.listen(POST, () => {
  console.log(`[server]: listening at http://${HOST}:${POST}`);
});