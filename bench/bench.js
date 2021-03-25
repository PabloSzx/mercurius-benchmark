import autocannon from "autocannon";
import fs from "fs";
import { resolve } from "path";

const { writeFile } = fs.promises;

const instance = autocannon(
  {
    url: "http://localhost:4000/graphql",
    workers: 50,
    connections: 100,
    title: "Testing XYZ",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    setupClient: resolve("./bench-client-setup.cjs"),
  },
  (err, result) => {
    if (err) console.error(err);

    const fileName = resolve(
      "results/" + result.title + "_" + new Date().toISOString().replace(/:|\./g, "_") + ".json"
    );

    writeFile(fileName, JSON.stringify(result, null, 2), {
      encoding: "utf-8",
    })
      .then(() => {
        console.log("Result written to: " + fileName);
      })
      .catch(console.error);
  }
);

process.once("SIGINT", () => {
  instance.stop();
});

autocannon.track(instance, { renderProgressBar: true });
