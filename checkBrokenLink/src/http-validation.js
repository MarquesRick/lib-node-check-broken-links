const fetch = require('node-fetch');

const checkStatus = async (arrayUrl) => {
  const arrayStatus = await Promise.all(
    arrayUrl.map(async (url) => {
      const res = await fetch(url);
      return res.status;
    })
  );

  return arrayStatus;
};

const generateArrayUrl = (arrayLinks) => {
  arrayLinks = JSON.parse(arrayLinks);
  return arrayLinks.map((obj) => Object.values(obj).join());
};

const validateArrayUrl = async (arrayLinks) => {
  const links = generateArrayUrl(arrayLinks);
  const statusLinks = await checkStatus(links);
  return statusLinks;
};

module.exports = validateArrayUrl;
