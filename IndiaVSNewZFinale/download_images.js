import fs from "fs";
import https from "https";

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          },
        },
        (res) => {
          if (
            res.statusCode === 301 ||
            res.statusCode === 302 ||
            res.statusCode === 308
          ) {
            return download(res.headers.location, dest)
              .then(resolve)
              .catch(reject);
          }

          if (res.statusCode !== 200) {
            reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
            return;
          }

          const file = fs.createWriteStream(dest);
          res.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log("Successfully downloaded: " + dest);
            resolve();
          });
        },
      )
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
};

async function run() {
  try {
    await download(
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Sanju_Samson_in_PMO_New_Delhi.jpg",
      "public/assets/samson_real.jpg",
    );
    await download(
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Finn_Allen.jpg",
      "public/assets/allen_real.jpg",
    );
  } catch (err) {
    console.error(err);
  }
}

run();
