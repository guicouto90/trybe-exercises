function createProductImageElement(imageSource) {
    const img = document.createElement('img');
    img.className = 'item__image';
    img.src = imageSource;
    return img;
  }
  
  function createCustomElement(element, className, innerText) {
    const e = document.createElement(element);
    e.className = className;
    e.innerText = innerText;
    return e;
  }
  
  function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
    const section = document.createElement('section');
    section.className = 'item';
    const teste = document.getElementsByClassName('items');
    teste[0].appendChild(section);
  
    section.appendChild(createCustomElement('span', 'item__sku', sku));
    section.appendChild(createCustomElement('span', 'item__title', name));
    section.appendChild(createProductImageElement(image));
    section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
    return section;
  }
  
  function getSkuFromProductItem(item) {
    return item.querySelector('span.item__sku').innerText;
  }
  
  function cartItemClickListener(event) {
    // coloque seu código aqui
  }
  
  const getComputerPromise = () => {
    return new Promise((resolve, reject) => {
      fetch("https://api.mercadolibre.com/sites/MLB/search?q=$computador")
      .then((response) => {
        response.json().then((jsonDoComputador) => {
          //createProductItemElement({ id: sku, title: name, thumbnail: image });
          jsonDoComputador.results.forEach((teste) => {
            let testeId = teste.id;
            let testeTitle = teste.title;
            let testeImage = teste.thumbnail;
            //console.log(testeId, testeTitle, testeImage);
            createProductItemElement({testeId, testeTitle, testeImage })
          })
          
          resolve();
        })
      });
    });
  };
  
  const fetchComputerPromise = async () => {
    await getComputerPromise();
  }
  
  
  function createCartItemElement({ sku, name, salePrice }) {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    li.addEventListener('click', cartItemClickListener);
    return li;
  }
  
  window.onload = fetchComputerPromise();   // () => { }; 