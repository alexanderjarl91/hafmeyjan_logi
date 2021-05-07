const productsDOM = document.querySelector(".products");

// clear dom
const clearProducts = () => {
  productsDOM.innerHTML = "";
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
    weight: "800gr",
    count: "12",
    type: "avocado",
    img: "https://i.ibb.co/0Y5nFzR/onionrings.png",
  },
  {
    title: "Avocado Slices",
    weight: "800gr",
    count: "12",
    type: "avocado",
    img: "https://i.ibb.co/0Y5nFzR/onionrings.png",
  },
  {
    title: "Western Guacamole",
    weight: "500gr",
    count: "20",
    type: "avocado",
    img: "https://i.ibb.co/0Y5nFzR/onionrings.png",
  },

  // FROZEN
  {
    title: "Salud Mozzarella Sticks",
    weight: "600gr",
    count: "12",
    type: "frozen",
    img: "https://i.ibb.co/0Y5nFzR/onionrings.png",
  },
  {
    title: "Onion rings",
    weight: "800gr",
    count: "12",
    type: "frozen",
    img: "https://i.ibb.co/qBV6vyB/onionrings-update.png",
  },
  {
    title: "Chili Cheese Nuggets",
    weight: "800gr",
    count: "12",
    type: "frozen",
    img: "https://i.ibb.co/0Y5nFzR/onionrings.png",
  },
  {
    title: "Cheddar Cheese Jalapeno",
    weight: "800gr",
    count: "12",
    type: "frozen",
    img: "https://i.ibb.co/0Y5nFzR/onionrings.png",
  },

  // STOCK
  {
    title: "Nauta kraftur",
    weight: "160gr",
    count: "12",
    type: "stock",
    img:
      "https://static.heimkaup.is/images/products/34/114434/cf793-tasty-raudvins-sosugrunnur-60-g_670x400.jpg",
  },

  // OTHER
  {
    title: "Þvottaklemmur",
    weight: "800gr",
    count: "12",
    type: "other",
    img: "https://i.ibb.co/ygdrfNw/or.png",
  },
  {
    title: "Tannstönglar",
    weight: "100gr",
    count: "100",
    type: "other",
    img: "https://i.ibb.co/ygdrfNw/or.png",
  },
  {
    title: "Grillpinnar 25cm",
    weight: "100gr",
    count: "100",
    type: "other",
    img: "https://i.ibb.co/ygdrfNw/or.png",
  },
];

renderAvocadoProducts();
