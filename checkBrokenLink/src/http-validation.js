const generateArrayUrl = (arrayLinks) => {
  arrayLinks = JSON.parse(arrayLinks);
  return arrayLinks.map((obj) => Object.values(obj).join());
};

const validateArrayUrl = (arrayLinks) => {
  return generateArrayUrl(arrayLinks);
};

module.exports = validateArrayUrl;
