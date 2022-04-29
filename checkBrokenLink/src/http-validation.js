const fetch = require('node-fetch');

const handleError = (error) => {
  throw new Error(error.message);
};

const checkStatus = async (arrayUrl) => {
  try {
    const arrayStatus = await Promise.all(
      arrayUrl.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );
    return arrayStatus;
  } catch (error) {
    handleError(error);
  }
};

const generateArrayUrl = (arrayLinks) => {
  arrayLinks = JSON.parse(arrayLinks);
  return arrayLinks.map((obj) => Object.values(obj).join());
};

const validateArrayUrl = async (arrayLinks) => {
  const links = generateArrayUrl(arrayLinks);
  const statusLinks = await checkStatus(links);
  //spread operator to include two arrays in one new array
  const results = formatStringToArray(arrayLinks).map((obj, index) => ({
    ...obj,
    status: statusLinks[index],
  }));

  return results;
};

const formatStringToArray = (string) => {
  return JSON.parse(string);
};

module.exports = validateArrayUrl;
