import fs from "fs";
import https from "https";

const download = (url, dest) => {
  https
    .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Downloaded", dest);
      });
    })
    .on("error", (err) => {
      console.error("Error downloading", dest, err);
    });
};

download(
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/Sanju_Samson_in_PMO_New_Delhi.jpg",
  "public/assets/samson_real.jpg",
);
download(
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/Finn_Allen.jpg",
  "public/assets/allen_real.jpg",
);
