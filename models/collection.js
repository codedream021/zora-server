const mongoose = require("mongoose");

const Collection = mongoose.Schema({
  erc721Address: { type: String, required: true, index: { unique: true } },
  collectionName: { type: String, required: true },
  description: { type: String, required: true },
  categories: [{ type: String }],
  logoImageHash: { type: String, required: true },
  siteUrl: { type: String, required: true },
  discord: { type: String },
  twitterHandle: { type: String },
  instagramHandle: { type: String },
  mediumHandle: { type: String },
  telegram: { type: String },
});

Collection.methods.toJson = function () {
  return {
    erc721Address: this.erc721Address,
    collectionName: this.collectionName,
    description: this.description,
    categories: this.categories,
    logoImageHash: this.logoImageHash,
    siteUrl: this.siteUrl,
    discord: this.discord,
    twitterHandle: this.twitterHandle,
    instagramHandle: this.instagramHandle,
    mediumHandle: this.mediumHandle,
    telegram: this.telegram,
  };
};

mongoose.model("Collection", Collection);
