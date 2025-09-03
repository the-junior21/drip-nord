import fs from "fs";
import https from "https";

const url =
  "https://raw.githubusercontent.com/RachidBR/algerian-wilayas-with-municipalities/main/data/wilayas.json";

https.get(url, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    fs.mkdirSync("src/data", { recursive: true });
    fs.writeFileSync("src/data/wilayas.json", data, "utf8");
    console.log("✅ wilayas.json downloaded successfully to src/data/");
  });
});
