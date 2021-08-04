const productsDOM = document.querySelector(".products");

// clear dom
const clearProducts = () => {
  productsDOM.innerHTML = "";
};

// fill dom with all products
const renderAllProducts = () => {
  clearProducts();
  products.map((item) => {
    productsDOM.innerHTML += `
      <div class="product">
      <img src="${item.img}" alt=""/>
       <h2>${item.title}</h2>
       <p>Þyngd: ${item.weight}</p>
       <p>Fjöldi: ${item.count}<p>
      </div>`;
  });
};

// fill dom with frozen products
const renderFrozenProducts = () => {
  clearProducts();
  products.map((item) => {
    if (item.type == "frozen") {
      productsDOM.innerHTML += `
      <div class="product">
      <img src="${item.img}" alt=""/>
       <h2>${item.title}</h2>
       <p>Þyngd: ${item.weight}</p>
       <p>Fjöldi: ${item.count}<p>
      </div>`;
    } else return;
  });
};

//fill dom with stock products
const renderStockProducts = () => {
  clearProducts();
  products.map((item) => {
    if (item.type == "stock") {
      productsDOM.innerHTML += `
        <div class="product">
        <img src="${item.img}" alt=""/>
         <h2>${item.title}</h2>
         <p>Þyngd: ${item.weight}</p>
         <p>Fjöldi: ${item.count}<p>
        </div>`;
    } else return;
  });
};

//fill dom with stock products
const renderAvocadoProducts = () => {
  clearProducts();
  products.map((item) => {
    if (item.type == "avocado") {
      productsDOM.innerHTML += `
          <div class="product">
          <img src="${item.img}" alt=""/>
           <h2>${item.title}</h2>
           <p>Þyngd: ${item.weight}</p>
           <p>Fjöldi: ${item.count}<p>
          </div>`;
    } else return;
  });
};

//fill dom with stock products
const renderOtherProducts = () => {
  clearProducts();
  products.map((item) => {
    if (item.type == "other") {
      productsDOM.innerHTML += `
            <div class="product">
            <img src="${item.img}" alt=""/>
             <h2>${item.title}</h2>
             <p>Þyngd: ${item.weight}</p>
             <p>Fjöldi: ${item.count}<p>
            </div>`;
    } else return;
  });
};

const products = [
  // AVOCADO
  {
    title: "Avocado Dices",
    weight: "500gr",
    count: "12",
    type: "avocado",
    img: "../images/products/avacado-dices.png",
  },
  {
    title: "Avocado Slices",
    weight: "500gr",
    count: "12",
    type: "avocado",
    img: "../images/products/avacado-slices.png",
  },
  {
    title: "Avocado Halves",
    weight: "500gr",
    count: "12",
    type: "avocado",
    img: "../images/products/avacado-halves.png",
  },
  {
    title: "Western Guacamole",
    weight: "250gr",
    count: "24",
    type: "avocado",
    img: "../images/products/avacado-guacamole.png",
  },
  {
    title: "Extreme Supreme Guacamole 2kg",
    weight: "2000gr",
    count: "4",
    type: "avocado",
    img: "../images/products/avacado-extreme-quaq-2kg.png",
  },
  {
    title: "Extreme Supreme Guacamole 500gr",
    weight: "500gr",
    count: "12",
    type: "avocado",
    img: "../images/products/avacado-extreme-quaq-2kg.png",
  },
  {
    title: "Extreme Supreme Guacamole 250gr",
    weight: "250gr",
    count: "12",
    type: "avocado",
    img: "../images/products/avacado-extreme-quaq-2kg.png",
  },
  {
    title: "Avocado Chilli Fries",
    weight: "1000gr",
    count: "6",
    type: "avocado",
    img: "../images/products/avacado-avacado-fries-chilli.png",
  },
  {
    title: "Avocado Bites",
    weight: "1000gr",
    count: "6",
    type: "avocado",
    img: "../images/products/avacado-bites.png",
  },
  {
    title: "Avocado Burger",
    weight: "125gr",
    count: "16",
    type: "avocado",
    img: "../images/products/avacado-burger.png",
  },
  {
    title: "Avocado Tortilla 30cm",
    weight: "91gr",
    count: "8x18",
    type: "avocado",
    img: "../images/products/frystivorur-avacado-tortilla-30cm.png",
  },

  // FROZEN
  {
    title: "Galileo Smápizzur - Salami",
    weight: "360gr",
    count: "12",
    type: "frozen",
    img: "../images/products/frystivorur-salami.png",
  },
  {
    title: "Galileo Smápizzur - Skinka",
    weight: "360gr",
    count: "12",
    type: "frozen",
    img: "../images/products/fyristivorur-skinka.png",
  },
  {
    title: "Galileo Smápizzur - Spínat",
    weight: "360gr",
    count: "12",
    type: "frozen",
    img: "../images/products/frystivorur-spinat.png",
  },
  {
    title: "Galileo Piadina",
    weight: "280gr",
    count: "15",
    type: "frozen",
    img: "../images/products/frystivorur-piadina.png",
  },
  {
    title: "Pizza Beyglur - Salami",
    weight: "360gr",
    count: "12",
    type: "frozen",
    img: "../images/products/frystivorur-beyglur-salami.png",
  },
  {
    title: "Pizza Beyglur - Skinka",
    weight: "360gr",
    count: "12",
    type: "frozen",
    img: "../images/products/frystivorur-beyglur-skinka.png",
  },
  {
    title: "Blómkálsvængir",
    weight: "1000gr",
    count: "6",
    type: "frozen",
    img: "../images/products/frystivorur-blomkalsvaengir.png",
  },
  {
    title: "Salud Mozzarella Sticks",
    weight: "250gr",
    count: "10",
    type: "frozen",
    img: "../images/products/frystivorur-mozzarella.png",
  },
  {
    title: "Onion rings",
    weight: "450gr",
    count: "14",
    type: "frozen",
    img: "../images/products/frystivorur-laukhringir.png",
  },
  {
    title: "Chili Cheese Nuggets",
    weight: "250gr",
    count: "12",
    type: "frozen",
    img: "../images/products/frystivorur-chillicheese.png",
  },
  {
    title: "Cheddar Cheese Jalapeno",
    weight: "250gr",
    count: "12",
    type: "frozen",
    img: "../images/products/frystivorur-jalapenos.png",
  },
  {
    title: "Beer Battered Onion Rings",
    weight: "1000gr",
    count: "6",
    type: "frozen",
    img: "../images/products/frystivorur-beerbattered-onionrings.png",
  },
  {
    title: "Camembert Bites",
    weight: "1000gr",
    count: "6",
    type: "frozen",
    img: "../images/products/frystivorur-camembertbites.png",
  },
  {
    title: "Churros",
    weight: "750gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-churros.png",
  },
  {
    title: "Wheat Tortilla 12cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-wheat-tortillas-12cm.png",
  },
  {
    title: "Tortilla 16cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-tortilla-16cm.png",
  },
  {
    title: "Tortilla 20cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-tortilla-20cm.png",
  },
  {
    title: "Tortilla 25cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-tortilla-25cm.png",
  },
  {
    title: "Tortilla 30cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-tortilla-30cm.png",
  },
  {
    title: "Avocado Tortilla 30cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-avacado-tortilla-30cm.png",
  },
  {
    title: "Beetroot Tortilla 30cm",
    weight: "8gr",
    count: "18",
    type: "frozen",
    img: "../images/products/frystivorur-beetroot-tortilla-30cm.png",
  },
  {
    title: "Spinach Tortilla 25cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-spinat-tortilla-25cm.png",
  },

  {
    title: "Tomato Tortilla 25cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-tomato-tortilla-25cm.png",
  },
  {
    title: "Tomato Tortilla 30cm",
    weight: "18gr",
    count: "8",
    type: "frozen",
    img: "../images/products/frystivorur-tomato-tortilla-30cm.png",
  },
  {
    title: "Pita Bread 6cm",
    weight: "17,5gr",
    count: "315",
    type: "frozen",
    img: "../images/products/frystivorur-pitur-6cm.png",
  },
  {
    title: "Pita Bread 14,5cm",
    weight: "110gr",
    count: "10",
    type: "frozen",
    img: "../images/products/frystivorur-pita-14,5cm.png",
  },

  // STOCK
  {
    title: "Kalkúnasósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-kalkkunasosugrunnur.png",
  },
  {
    title: "Anda- og gæsasósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-kalkkunasosugrunnur.png",
  },
  {
    title: "Lambasósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosu-lamasosugrunnur.png",
  },
  {
    title: "Piparsósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosu-piparsosugrunnur.png",
  },
  {
    title: "Rauðvínssósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosu-raudvinssosugrunnur.png",
  },
  {
    title: "Humarsósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-humarsosugrunnur.png",
  },
  {
    title: "Kjúklingasósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-kjuklingasosugrunnur.png",
  },
  {
    title: "Trufflusósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-trufflusosugrunnur.png",
  },
  {
    title: "Villisveppasósugrunnur",
    weight: "60gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-villisveppasosugrunnur.png",
  },
  {
    title: "Fljótandi Kalkúnakraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-kalkunakr.jpg",
  },
  {
    title: "Fljótandi Anda- og gæsakraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-kalkunakr.jpg",
  },
  {
    title: "Fljótandi Grænmetiskraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-greanmetiskraftur.png",
  },
  {
    title: "Fljótandi Humarkraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-humarkraftur.png",
  },
  {
    title: "Fljótandi Kjúklingakraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-kjuklingakraftur.png",
  },
  {
    title: "Fljótandi Lambakraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-lambakraftur.png",
  },
  {
    title: "Fljótandi Nautakraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-nautakraftur.png",
  },
  {
    title: "Fljótandi Sveppakraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-sveppakraftur.png",
  },
  {
    title: "Fljótandi Villibráðakraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img: "../images/products/kraftar-sosur-villibradakraftur.png",
  },

  // OTHER
  {
    title: "Þvottaklemmur",
    weight: "800gr",
    count: "12",
    type: "other",
    img: "../images/products/annad-1000-klemmur.png",
  },
  {
    title: "Þvottaklemmur, plast",
    weight: "800gr",
    count: "12",
    type: "other",
    img: "../images/products/annad-10001-klemmur.png",
  },
  {
    title: "Tannstönglar",
    weight: "200stk",
    count: "24",
    type: "other",
    img: "../images/products/annad-0001 tannstönglar.png",
  },
  {
    title: "Tannstönglar með skammtara",
    weight: "200stk",
    count: "24",
    type: "other",
    img: "../images/products/annad-1045-tannstonglar.png",
  },
  {
    title: "Tannstönglar í kassa",
    weight: "800stk",
    count: "30",
    type: "other",
    img: "../images/products/annad-1048-tannstonglar.png",
  },
  {
    title: "Tannstönglabox í plasti",
    weight: "2000stk",
    count: "2",
    type: "other",
    img: "../images/products/annad-tannstonglar-2000stk.png",
  },
  {
    title: "Tannstönglar í plasti, 1000 einingar",
    weight: "1000stk",
    count: "25",
    type: "other",
    img: "../images/products/annad-1052-tannstonglar.png",
  },
  {
    title: "Rör, endurvinnanleg",
    weight: "100gr",
    count: "100",
    type: "other",
    img: "../images/products/annad-6100-ror.png",
  },
  {
    title: "Grillspjót 25cm",
    weight: "100gr",
    count: "100",
    type: "other",
    img: "../images/products/annad-grillspjot-25cm.png",
  },
  {
    title: "Grillspjót",
    weight: "8-35cm",
    count: "100-200",
    type: "other",
    img: "../images/products/annad-grillspjot-carwedandskrewed.png",
  },
];

renderAllProducts();
