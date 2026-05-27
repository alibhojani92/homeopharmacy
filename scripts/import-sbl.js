const fs = require("fs");

const sblProducts = [
  "NIXOCID",
  "FE-MIN",
  "FERRUMSIP",
  "TRANQUIL",
  "CINERARIA MARITIMA EUPHRASIA",
  "CINERARIA MARITIMA 10%",
  "AF-TABS",
  "EUPHRASIA 10%",
  "DIABOHERB",
  "DIBONIL",
  "STODAL +",
  "SBL DROPS No. 5",
  "DENTON",
  "WORMORID",
  "MULLEIN",
  "ALFALFA MALT",
  "FP-TABS",
  "WOUNDWELL",
  "ZEROGRYPE",
  "ALFALFA TONIC",
  "RITE-HITE",
  "SBL DROPS No. 1",
  "SCALPTONE"
];

const generatedProducts = sblProducts.map((name) => ({
  id: name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-"),

  name,
  potency: "",
  brand: "SBL",
  category: "Homeopathy",
  price: 99,
  mrp: 130,

  image:
    "/medicines/" +
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") +
    ".webp",

  description:
    `${name} homeopathic medicine by SBL.`,

  uses: ["Homeopathic Care"]
}));

const output = `
export default ${JSON.stringify(
  generatedProducts,
  null,
  2
)};
`;

fs.writeFileSync(
  "./data/sbl-products.js",
  output
);

console.log(
  "✅ SBL products generated successfully!"
);
