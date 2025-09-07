// Получаем id товара из URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

let products = {
  // 1. techblack
  techblack: {
    title: "Bluza Nike Tech Fleece – Czarny-szary",
    price: "299 PLN / 75 USD",
    img: "images/techblack.jpg",
    extraImgs: ["images/techblack1.jpg","images/techblack2.jpg"],
    desc: `
      <p>Pozostań w komforcie i stylu dzięki nowoczesnej bluzie z kapturem Nike. 
      Model wykonany jest z lekkiego, miękkiego i ciepłego materiału Tech Fleece, który utrzymuje ciepło, nie obciążając.</p>

      <ul>
        <li><strong>Materiał:</strong> innowacyjny Tech Fleece dla ciepła i lekkości</li>
        <li><strong>Krój:</strong> wygodny, z miękką podszewką wewnętrzną</li>
        <li><strong>Detale:</strong> regulowany kaptur, kieszeń kangurka, elastyczne mankiety i dół</li>
        <li><strong>Styl:</strong> minimalistyczny czarno-szary kolor z logo Nike</li>
      </ul>

      <p>Idealny wybór na sport, spacery lub codzienne noszenie.</p>
    `
  },

  // 2. techwhite
  techwhite: {
    title: "Bluza Nike Tech Fleece – Biały",
    price: "299 PLN / 75 USD",
    img: "images/techwhite.jpg",
    extraImgs: ["images/techwhite1.jpg","images/techwhite2.jpg"],
    desc: `
      <p>Nowoczesna bluza Nike w kolorze białym zapewnia komfort i styl w każdej sytuacji. 
      Lekka, miękka i ciepła – idealna na każdą porę roku.</p>

      <ul>
        <li><strong>Materiał:</strong> Tech Fleece – lekki i ciepły</li>
        <li><strong>Krój:</strong> wygodny z podszewką wewnętrzną</li>
        <li><strong>Detale:</strong> kaptur, kieszeń kangurka, elastyczne wykończenia</li>
        <li><strong>Styl:</strong> minimalistyczny biały design z logo Nike</li>
      </ul>

      <p>Świetny wybór zarówno do sportu, jak i do casualowego looku.</p>
    `
  },

  // 3. ston
  ston: {
    title: "Stone Island Hoodie – Czarny z dwoma naszywkami",
    price: "499 PLN / 125 USD",
    img: "images/ston.jpg",
    extraImgs: ["images/ston1.jpg"],
    desc: `
      <p>Stylowa bluza Stone Island, która łączy minimalizm i wyjątkowe detale. 
      Wykonana z wysokiej jakości bawełny – trwała i wygodna.</p>

      <ul>
        <li><strong>Materiał:</strong> gęsta, miękka bawełna</li>
        <li><strong>Krój:</strong> prosty, wygodny, z elastycznymi mankietami</li>
        <li><strong>Detale:</strong> dwa charakterystyczne naszywki, kaptur</li>
        <li><strong>Styl:</strong> klasyczna czerń pasująca do każdej stylizacji</li>
      </ul>

      <p>Idealna dla osób, które cenią wygodę i premium charakter marki.</p>
    `
  },

  // 4. guess
  guess: {
    title: "Guess Męska Saszetka – Styl i Wygoda",
    price: "199 PLN / 50 USD",
    img: "images/guess.jpg",
    extraImgs: ["images/guess1.jpg","images/guess2.jpg"],
    desc: `
      <p>Praktyczna saszetka od Guess to świetny wybór do miasta i podróży. 
      Kompaktowa i nowoczesna – zawsze pod ręką.</p>

      <ul>
        <li><strong>Materiał:</strong> trwały tekstyl z wodoodporną impregnacją</li>
        <li><strong>Krój:</strong> kompaktowy, lekki</li>
        <li><strong>Detale:</strong> główna komora na zamek, regulowany pasek, logo Guess</li>
        <li><strong>Styl:</strong> uniwersalny – pasuje do każdej stylizacji</li>
      </ul>

      <p>Idealna do codziennego użytku, zapewnia swobodę i wygodę.</p>
    `
  },

  // 5. tn
  tn: {
    title: "Nike TN – Edycja Spider-Man",
    price: "399 PLN / 100 USD",
    img: "images/tn.jpg",
    extraImgs: ["images/tn1.jpg","images/tn2.jpg"],
    desc: `
      <p>Sneakersy Nike TN w unikalnej wersji Spider-Man Edition. 
      Dynamiczne kolory przyciągają uwagę i dodają energii każdej stylizacji.</p>

      <ul>
        <li><strong>Materiał:</strong> lekki, oddychający tekstyl i syntetyk</li>
        <li><strong>Amortyzacja:</strong> system Air Max TN dla maksymalnego komfortu</li>
        <li><strong>Design:</strong> czerwono-niebiesko-czarna kolorystyka inspirowana Spider-Manem</li>
        <li><strong>Styl:</strong> sportowy, miejski, młodzieżowy</li>
      </ul>

      <p>Idealne dla fanów sneakersów i odważnych miejskich stylizacji.</p>
    `
  },

  // 6. hugoboss
  hugoboss: {
    title: "Termos Hugo Boss",
    price: "149 PLN / 39 USD",
    img: "images/hugoboss.jpg",
    extraImgs: ["images/hugoboss1.jpg","images/hugoboss2.jpg"],
    desc: `
      <p>Elegancki termos Hugo Boss – połączenie luksusu i praktyczności. 
      Idealny do pracy, podróży czy codziennych wyjść.</p>

      <ul>
        <li><strong>Materiał:</strong> stal nierdzewna z izolacją próżniową</li>
        <li><strong>Pojemność:</strong> kompaktowy i wygodny do noszenia</li>
        <li><strong>Design:</strong> minimalistyczny, czarny, z logo Hugo Boss</li>
        <li><strong>Funkcjonalność:</strong> szczelna pokrywka, łatwy korek</li>
      </ul>

      <p>Dodatek, który łączy styl i wygodę w codziennym życiu.</p>
    `
  },

  // 7. michaelkors
  michaelkors: {
    title: "Torebka Michael Kors – Damska",
    price: "499 PLN / 129 USD",
    img: "images/michaelkors.jpg",
    extraImgs: ["images/michaelkors1.jpg","images/michaelkors2.jpg"],
    desc: `
      <p>Ekskluzywna torebka Michael Kors dla kobiet ceniących elegancję i funkcjonalność. 
      Doskonała na co dzień i na specjalne okazje.</p>

      <ul>
        <li><strong>Materiał:</strong> wysokiej jakości skóra ekologiczna</li>
        <li><strong>Krój:</strong> wygodna do noszenia w ręce lub na ramieniu</li>
        <li><strong>Detale:</strong> złote elementy i logo Michael Kors</li>
        <li><strong>Styl:</strong> elegancki i nowoczesny, pasujący do każdej stylizacji</li>
      </ul>

      <p>Dodaje szyku i podkreśla kobiecą elegancję.</p>
    `
  },

  // 8. nikepants
  nikepants: {
    title: "Spodnie Nike Tech Fleece – Czarne",
    price: "299 PLN / 79 USD",
    img: "images/nikepants.jpg",
    extraImgs: ["images/nikepants1.jpg","images/nikepants2.jpg"],
    desc: `
      <p>Spodnie Nike Tech Fleece to połączenie wygody i nowoczesnego designu. 
      Świetnie sprawdzają się w sporcie i na co dzień.</p>

      <ul>
        <li><strong>Materiał:</strong> Tech Fleece – lekki i ciepły</li>
        <li><strong>Krój:</strong> zwężane nogawki, elastyczna talia ze sznurkiem</li>
        <li><strong>Detale:</strong> boczne kieszenie na zamek, logo Nike</li>
        <li><strong>Styl:</strong> klasyczny czarny kolor pasujący do wszystkiego</li>
      </ul>

      <p>Idealne do treningu, biegania czy casualowego looku w mieście.</p>
    `
  },

  lvbelt: {
  title: "Pasek Louis Vuitton – Czarny",
  price: "2000 PLN / 500 USD",
  img: "images/lv.jpg",
  extraImgs: ["images/lv1.jpg"],
  desc: `
    <p>Ekskluzywny pasek Louis Vuitton w klasycznym czarnym kolorze. 
    Połączenie elegancji i nowoczesnego designu, które podkreśla każdy styl.</p>

    <ul>
      <li><strong>Materiał:</strong> wysokiej jakości skóra naturalna</li>
      <li><strong>Klamra:</strong> metalowa z charakterystycznym logo LV</li>
      <li><strong>Kolor:</strong> głęboka czerń pasująca do każdej stylizacji</li>
      <li><strong>Styl:</strong> luksusowy i ponadczasowy – idealny do eleganckich i casualowych outfitów</li>
    </ul>

    <p>Dodatek premium, który podkreśla prestiż i dbałość o detale.</p>
  `
},
track: {
  title: "Balenciaga Track – Czarny",
  price: "3200 PLN / 820 USD",
  img: "images/track.jpg",
  extraImgs: ["images/track1.jpg"],
  desc: `
    <p>Ekskluzywne sneakersy Balenciaga Track w głębokiej czerni. 
    Połączenie nowoczesnego designu i luksusowych materiałów.</p>

    <ul>
      <li><strong>Materiał:</strong> połączenie siateczki i skóry syntetycznej</li>
      <li><strong>Podeszwa:</strong> masywna, wielowarstwowa – zapewnia komfort i stabilność</li>
      <li><strong>Kolor:</strong> klasyczna czerń z subtelnym logo Balenciaga</li>
      <li><strong>Styl:</strong> sportowy, luksusowy i wyrazisty – idealny do miejskich stylizacji</li>
    </ul>

    <p>Model, który łączy streetwear i high fashion, podkreślając prestiż i odwagę w modzie.</p>
  `
},

lvbag: {
    title: "Louis Vuitton – Torebka Męska",
    price: "4000 PLN / 1000 USD",
    img: "images/lvbag.jpg",
    extraImgs: ["images/lvbag1.jpg"],
    desc: `
      <p>Praktyczna torebka od Louis Vuitton to świetny wybór do stylu. 
      Kompaktowa i nowoczesna – zawsze pod ręką.</p>

      <ul>
        <li><strong>Materiał:</strong> trwały tekstyl z wodoodporną impregnacją</li>
        <li><strong>Krój:</strong> kompaktowy, lekki</li>
        <li><strong>Detale:</strong> główna komora na zamek, regulowany pasek, logo LV</li>
        <li><strong>Styl:</strong> uniwersalny – pasuje do każdej stylizacji</li>
      </ul>

      <p>Idealna do codziennego użytku, zapewnia swobodę i wygodę.</p>
    `
  },
black1: {
  title: "SP5DER Hoodie – Black",
  price: "1200 PLN / 300 USD",
  img: "images/spiderblack.jpg",
  extraImgs: ["images/spiderblack1.jpg"],
  desc: `
    <p>Klasyczna bluza SP5DER w czarnej wersji to uniwersalny element garderoby, 
    który pasuje do każdej stylizacji.</p>

    <ul>
      <li><strong>Materiał:</strong> gruba bawełna z domieszką elastycznych włókien</li>
      <li><strong>Krój:</strong> luźny, wygodny na co dzień</li>
      <li><strong>Detale:</strong> logo SP5DER, kaptur regulowany sznurkiem, kieszeń kangurka</li>
      <li><strong>Styl:</strong> ponadczasowy i uniwersalny – pasuje do wszystkiego</li>
    </ul>

    <p>Świetny wybór do codziennego użytku – komfort, jakość i styl w jednym.</p>
  `
},
amiri: {
  title: "AMIRI Jeans",
  price: "2500 PLN / 600 USD",
  img: "images/amiri.jpg",
  extraImgs: [],
  desc: `
    <p>Stylowe jeansy AMIRI to połączenie luksusu i nowoczesnego designu. 
    Idealne dla osób ceniących modę premium i streetwearowy charakter.</p>

    <ul>
      <li><strong>Materiał:</strong> wysokiej jakości denim</li>
      <li><strong>Krój:</strong> slim fit z lekkim efektem distressed</li>
      <li><strong>Detale:</strong> charakterystyczne przeszycia, subtelne przetarcia</li>
      <li><strong>Styl:</strong> ekskluzywny – pasuje zarówno do casualowych, jak i eleganckich stylizacji</li>
    </ul>

    <p>Doskonały wybór, aby wyróżnić się w każdej sytuacji.</p>
  `
},

amiributy: {
  title: "AMIRI Sneakers – Black",
  price: "4000 PLN / 1000 USD",
  img: "images/amiributy.jpg",
  extraImgs: ["images/amiributy1.jpg"],
  desc: `
    <p>Czarne sneakersy AMIRI to kwintesencja stylu streetwear i luksusu. 
    Komfortowe, a jednocześnie wyraziste w formie.</p>

    <ul>
      <li><strong>Materiał:</strong> skóra naturalna i wysokiej jakości tkaniny</li>
      <li><strong>Kolor:</strong> głęboka czerń z dopracowanymi detalami</li>
      <li><strong>Detale:</strong> solidna podeszwa, subtelne logo AMIRI</li>
      <li><strong>Styl:</strong> minimalistyczny, ale luksusowy – idealne na co dzień</li>
    </ul>

    <p>Buty, które nadadzą charakteru każdej stylizacji.</p>
  `
},

lan: {
  title: "LANVIN Sneakers – White Multicolor Laces",
  price: "2000 PLN / 500 USD",
  img: "images/lan.jpg",
  extraImgs: ["images/lan1.jpg"],
  desc: `
    <p>Białe sneakersy LANVIN z kolorowymi sznurówkami to połączenie elegancji i oryginalności. 
    Świetny wybór dla osób, które lubią wyróżniać się detalami.</p>

    <ul>
      <li><strong>Materiał:</strong> skóra naturalna wysokiej jakości</li>
      <li><strong>Kolor:</strong> klasyczna biel z kontrastującymi, wielobarwnymi sznurówkami</li>
      <li><strong>Detale:</strong> gumowa podeszwa, dyskretne logo LANVIN</li>
      <li><strong>Styl:</strong> modny i charakterystyczny – idealne do casualowych stylizacji</li>
    </ul>

    <p>Unikatowe sneakersy, które dodają energii każdemu outfitowi.</p>
  `
},




};

// Заполняем страницу
const product = products[productId];
if (product) {
  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-price').textContent = product.price;
  document.getElementById('product-img').src = product.img;
  document.getElementById('product-desc').innerHTML = product.desc;

  const galleryDiv = document.getElementById('product-gallery');
  product.extraImgs.forEach(src => {
    const imgEl = document.createElement('img');
    imgEl.src = src;
    imgEl.addEventListener('click', () => {
      document.getElementById('product-img').src = src;
    });
    galleryDiv.appendChild(imgEl);
  });
}

// Корзина (сохраняем товар в localStorage)
let cart = JSON.parse(localStorage.getItem('cart')) || [];
document.getElementById('add-to-cart').addEventListener('click', () => {
  cart.push({ id: productId, ...product });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.title} dodano do koszyka!`);
});
