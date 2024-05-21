// src/importHelpers.js

export const importImages = (location) => {
    let context;
    if (location === "../photos") {
      context = require.context("../photos", false, /\.(png|jpe?g|svg)$/);
    } else if (location === "../clientphotos") {
      context = require.context("../clientphotos", false, /\.(png|jpe?g|svg)$/);
    } else {
      throw new Error("Invalid image location");
    }
  
    let files = {};
    context.keys().forEach((item) => {
      files[item.replace("./", "")] = context(item);
    });
    return files;
  };
  
  export const importVideos = (location) => {
    let context;
    if (location === "../videos") {
      context = require.context("../videos", false, /\.(mp4|webm|ogg)$/);
    } else {
      throw new Error("Invalid video location");
    }
  
    let files = {};
    context.keys().forEach((item) => {
      files[item.replace("./", "")] = context(item);
    });
    return files;
  };
  