const fs = require('fs');
const frontMatter = require('front-matter');
const marked = require('marked');

const cards = fs.readdirSync('./src/cards').map(activityFilename => {
  const activityContent = fs.readFileSync(`./src/cards/${activityFilename}`, {
    encoding: 'utf8'
  });
  const activityFrontMatter = frontMatter(activityContent);
  const slug = activityFilename.substr(3).split('.')[0];
  return {
    title: activityFrontMatter.attributes.title,
    number: activityFrontMatter.attributes.number,
    desc: activityFrontMatter.attributes.desc,
    suit: activityFrontMatter.attributes.suit,
    icon: activityFrontMatter.attributes.icon,
    url: 'activity/'+slug+'/',
    slug: slug,
    backText: marked(activityFrontMatter.body, {headerIds: false})
  }
});

cards.forEach((card, index) => {
  // generate the inverted print icon img src path
  let iconPath = card.icon.src.split('/');
  iconPath[2] = 'print_'+iconPath[2];
  card.icon.print = iconPath.join('/');

  // trim excess indendation from generated HTML
	card.backText = card.backText.replace(/^\t{3}/gm, '');

  // add urls for prev/next links
  if (index > 0) {
    card.prev = cards[index-1].url;
  } else {
    card.prev = null;
  }
  if (index < cards.length - 1) {
    card.next = cards[index+1].url;
  } else {
    card.next = null;
  }
});

export default cards;