const cleanName = require('./utils/cleanName.cjs');
const transliterate = require('./utils/transliterate.cjs');

const fs = require('node:fs');
let data = JSON.parse(fs.readFileSync('./src/data/data.json', 'utf8'));

const municipalities = data.uchilishta.map((school, index) => {
  return school.opstina;
});

const municipalitiesCount = () => {
  const schoolsPerMunicipality = [];
  municipalities.forEach(i => { schoolsPerMunicipality[i] = (schoolsPerMunicipality[i] || 0) + 1; });
  return schoolsPerMunicipality;
};

const municipalitiesSort = () => {

  const sortedMunicipalities = [];

  for (let municipality in municipalitiesCount()) {
    sortedMunicipalities.push([municipality, municipalitiesCount()[municipality]]);
  }

  sortedMunicipalities.sort(function (a, b) {
    return a[1] - b[1];
  });

  return sortedMunicipalities;
};

const homepage = `https://gocemitevski.github.io/sredni-ucilista-mk`;
const sitemap = data.uchilishta.map(item => `${homepage}/uchilishte/${encodeURIComponent(cleanName(transliterate(item.ime + ' ' + item.opstina)).toLowerCase())}`);
municipalitiesSort().map(item => sitemap.push(`${homepage}/opshtina/${encodeURIComponent(cleanName(transliterate(item[0])).toLowerCase())}`));
console.log(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap.map(el => `<url><loc>${el}</loc></url>`).join('')}</urlset>`);
