<script>
  let presenters = [
    {
      'url': 'https://www.santacruzmah.org/',
      'img': {
        'src': 'img/about/mah-redlogo.png',
        'alt': 'Santa Cruz Museum of Art & History'
      }
    },
    {
      'url': 'https://www.becktench.com/',
      'img': {
        'src': 'img/about/becktench-logo.png',
        'alt': 'Beck Tench'
      }
    },
  ];
  let sponsors = [
    {
      'url': 'https://mailchimp.com/',
      'img': {
        'src': 'img/about/mailchimp-logo-dark.png',
        'alt': 'MailChimp'
      }
    },
    {
      'url': 'https://museumhack.com/',
      'img': {
        'src': 'img/about/museumhack.jpg',
        'alt': 'MuseumHack'
      }
    },
    {
      'url': 'https://www.tombihn.com/',
      'img': {
        'src': 'img/about/tombihn-logo.jpg',
        'alt': 'Tom Bihn'
      }
    },
    {
      'url': 'https://depts.washington.edu/uwmuse/',
      'img': {
        'src': 'img/about/wu-museology.jpg',
        'alt': 'University of Washington Museology Graduate Program'
      }
    },
    {
      'url': 'https://www.awesumorganics.com/',
      'img': {
        'src': 'img/about/awesum-organics-logo.png',
        'alt': 'AweSum Organics'
      }
    },
  ];
</script>

<svelte:head>
	<title>The Space Deck | About</title>
  <meta name="description" content="The Space Deck is a co-created deck of 56 spacemaking cards. Each card presents a prompt for a way to make space in your life and work. Space for you to grow. Space for others to communicate and do their best work.">
  <meta name="keywords" content="spacemaking, stillness, creativity, courage, activist, relational, movement, ritual, environmental, museum, museumcamp, self-care">
</svelte:head>

<div class="text">
  <h1>About</h1>
  <p>The Space Deck is a co-created deck of 56 spacemaking cards. Each card presents a prompt for a way to make space in your life and work. Space for you to grow. Space for others to communicate and do their best work. </p>
  <p>These cards are intended to assist the creative, the museum professional, the librarian, the artist, the activists, the burnt-out, in making space for self and for others with intention and awareness. </p>
  <p>Just like a deck of playing cards, The Space Deck is divided into suits:</p>
  <ul>
  <li><img src="img/suits/stillness.svg" alt="icon"> <a href="suits/stillness">STILLNESS</a>: quieting the mind and body to develop calmness and focus </li>
  <li><img src="img/suits/creativity.svg" alt="icon"> <a href="suits/creativity">CREATIVITY</a>: the process and the product of manifesting your ideas in the world </li>
  <li><img src="img/suits/courage.svg" alt="icon"> <a href="suits/courage">COURAGE</a>: the strength and ability to act in situations where fear is present </li>
  <li><img src="img/suits/activist.svg" alt="icon"> <a href="suits/activist">ACTIVIST</a>: catalyzing and sustaining individual and social transformation </li>
  <li><img src="img/suits/relational.svg" alt="icon"> <a href="suits/relational">RELATIONAL</a>: opening, connecting and relating to the experiences of others </li>
  <li><img src="img/suits/movement.svg" alt="icon"> <a href="suits/movement">MOVEMENT</a>: using the body to give tangible form to ideas, qualities, or feelings </li>
  <li><img src="img/suits/ritual.svg" alt="icon"> <a href="suits/ritual">RITUAL</a>: habitual behaviors to realize an intended mental or physical state </li>
  <li><img src="img/suits/environmental.svg" alt="icon"> <a href="suits/environmental">ENVIRONMENTAL</a>: manipulating surroundings/conditions to create a supportive space </li>
  </ul>
  <p>Most of these suits stem from the <a href="http://www.contemplativemind.org/practices/tree">Tree of Contemplative Practices</a> from <a href="http://www.contemplativemind.org/">The Center for Contemplative Mind in Society</a>.</p>
  <p>The Space Deck is for everyone. These cards are available in web format now, and will be available in print and downloadable PDF format soon. Pick one at <a href="/random">random</a>, browse by <a href="/suits">suit</a>, or <a href="/">shuffle</a> the deck and find a card that fits your spacemaking needs. </p>
  <h2 id="more-about-the-creation-of-the-space-deck">More about the creation of The Space Deck</h2>
  <img id="about-picture" alt="Attendees of MuseumCamp 2015 in front of the Museum of Art and History." />
  
  <p>The Space Deck was created over the course of <a href="http://camp.santacruzmah.org/">MuseumCamp 2015</a>. In one weekend, 100 creative professionals from around the world gathered at the Santa Cruz Museum of Art &amp; History to focus on spacemaking. They built this Space Deck: a collection of resources to share with you.</p>
  <p>How did they do it? Campers divided into teams by suit and spent an intense 48 hours brainstorming activities that made space within the intention of their given suit. Campers prototyped over 200 ideas that were winnowed down into this Space Deck through team discussions, user testing, and feedback. </p>
  <p>Much love and appreciation to all the MuseumCampers whose creativity, diversity, and generosity made this project possible. And a special thank you to two-time camper, <a href="https://jasonalderman.work/">Jason Alderman</a>, for his enthusiasm, competence, and teamwork in the creation of this website.</p>  
</div>
<div class="sponsors">
  <h2>Presented By</h2>
  <ul>
  {#each presenters as presenter}
  <li>
    <figure>
      <a href="{presenter.url}"><img src="{presenter.img.src}" alt="{presenter.img.alt}"></a>
    </figure>
  </li>
  {/each}
  </ul>
  <h3>With Support From</h3>
  <ul>
  {#each sponsors as sponsor}
    <li>
      <figure class:mailchimp={sponsor.img.alt==='MailChimp'}>
        <a href="{sponsor.url}"><img src="{sponsor.img.src}" alt="{sponsor.img.alt}"></a>
      </figure>
    </li>
  {/each}
  </ul>
</div>