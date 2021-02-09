const suits = [
  {
    title: 'activist',
    desc: 'Catalyzing and sustaining individual and social transformation.',
    icon: {
      creator: 'mcarranza',
      link: 'https://thenounproject.com/icon/126182/',
      alt: 'rocket ship, ready to blast off'
    }
  },
  {
    title: 'courage',
    desc: 'The strength and ability to act in situations where fear is present.',
    icon: {
      creator: 'Gregory Sujkowski',
      link: 'https://thenounproject.com/icon/36928/',
      alt: 'astronaut planting a flag'
    }
  },
  {
    title: 'creativity',
    desc: 'The process and the product of manifesting your ideas in the world.',
    icon: {
      creator: 'Vincent Tanara',
      link: 'https://thenounproject.com/icon/16878/',
      alt: '1950s ray gun'
    }
  },
  {
    title: 'environmental',
    desc: 'Manipulating surroundings/conditions to create a supportive space.',
    icon: {
      creator: 'Gregory Sujkowski',
      link: 'https://thenounproject.com/icon/36924/',
      alt: 'telescope'
    }
  },
  {
    title: 'movement',
    desc: 'Using the body to give tangible form to ideas, qualities, or feelings.',
    icon: {
      creator: 'Gregory Sujkowski',
      link: 'https://thenounproject.com/icon/36927/',
      alt: 'a comet (or meteor) hurtling through space'
    }
  },
  {
    title: 'relational',
    desc: 'Opening, connecting, and relating to the experiences of others.',
    icon: {
      creator: 'Gregory Sujkowski',
      link: 'https://thenounproject.com/icon/36928/',
      alt: 'two astronauts holding hands'
    }
  },
  {
    title: 'ritual',
    desc: 'Habitual behaviors to realize an intended mental or physical state.',
    icon: {
      creator: 'misirlou',
      link: 'https://thenounproject.com/icon/7536/',
      alt: 'a solar system planets in circular orbits'
    }
  },
  {
    title: 'stillness',
    desc: 'Quieting the mind and body to develop calmness and focus.',
    icon: {
      creator: 'Danilo Gusmão Silveira',
      link: 'https://thenounproject.com/icon/109968/',
      alt: 'a crescent moon'
    }
  },
]

suits.forEach(suit => {
  suit.icon.src = 'img/suits/'+suit.title.toLowerCase()+'.svg';
  suit.url = 'suits/'+suit.title.toLowerCase();
});

export default suits;