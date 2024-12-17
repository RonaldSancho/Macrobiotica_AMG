AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});

jQuery(document).ready(function ($) {
  "use strict";

  const products = [
    {
      img: "images/CITRATO_POTASIO.png",
      name: "Citrato Potasio y Vitamina B12",
      price: "3,663.00",
      registry: "SD-CR-19-09035",
      description: [
        "Coadyuvante en la función renal, ácido úrico y gota.",
        "Fortalece la función del páncreas.",
        "Reduce la aparición de calambres y espasmos.",
      ],
    },
    {
      img: "images/BIOTINA.png",
      name: "Biotina, Ácido Hialurónico + Vitamina E y C",
      price: "5,235.00",
      registry: "SD-CR-23-01389",
      description: [
        "Esta fórmula de BIOTINA con ÁCIDO HIALURÓNICO está entre los factores que influyen de manera decisiva en la salud del cabello.",
        "Contribuye al fortalecimiento de las uñas y la piel.",
        "Ayuda a convertir los carbohidratos, las grasas y las proteínas que consumes en energía que necesitas.",
      ],
    },
    {
      img: "images/CITRATO_MAGNESIO.png",
      name: "Citrato de Magnesio Polvo",
      price: "6,892.00",
      registry: "SD-CR-19-09087",
      description: [
        "Mejora la hidratación y el movimiento peristáltico del intestino.",
        "Coadyuvante en presión alta y problemas de migraña.",
        "Estabiliza el sistema nervioso central.",
      ],
    },
    {
      img: "images/GEL_SABILA.png",
      name: "Gel de Sábila Natural",
      price: "4,201.00",
      registry: "C-CR-17-04342",
      description: [
        "Excelente hidratante de la piel.",
        "Mejora la cicatrización de las heridas, especialmente en quemaduras.",
        "Se puede utilizar para realizar masajes hidratantes.",
        "Limpia la superficie de la piel.",
        "Alivia molestias leves.",
        "Combate infecciones y trastornos en la piel como el acné.",
      ],
    },
    {
      img: "images/CITRATO_MAGNESIO_CAPS.png",
      name: "Citrato de Magnesio Cápsulas",
      price: "4,949.00",
      registry: "SD-CR-19-08806",
      description: [
        "Mejora la hidratación y el movimiento peristáltico del intestino.",
        "Coadyuvante en presión alta y problemas de migraña.",
        "Estabiliza el sistema nervioso central.",
      ],
    },
    {
      img: "images/COLAGENO_VC.png",
      name: "Colágeno Hidrolizado con Vitamina C",
      price: "4,959.00",
      registry: "SD-CR-17-09349",
      description: [
        "El colágeno con vitamina C se necesita para el crecimiento y reparación de tejidos en todas las partes del cuerpo.",
        "Se utiliza para formar una proteína importante llamada colágeno, utilizada para producir la piel, los tendones, los ligamentos y los vasos sanguíneos.",
        "Sana heridas y forma tejido cicatricial.",
      ],
    },
    {
      img: "images/COMPLEJO_B.png",
      name: "Complejo B + Vitamina B12",
      price: "5,087.00",
      registry: "SD-CR-23-01495",
      description: [
        "Las Vitaminas B son un grupo de vitaminas esenciales solubles en agua.",
        "Entre sus muchas funciones, las vitaminas del grupo B son importantes para mantener las células de la sangre, el sistema inmunológico y el sistema nervioso.",
        "Intervienen en el metabolismo energético y previenen problemas de memoria.",
        "Ayudan a la producción de neurotransmisores involucrados en el ciclo del sueño.",
      ],
    },
    {
      img: "images/EPALI-NAT.png",
      name: "EPALI-NAT: Protector Hepático Natural",
      price: "6,312.00",
      registry: "SD-CR-23-01512",
      description: [
        "Genera excelentes resultados en el tratamiento de problemas ocasionados por deficiencia hepática como:",
        "Grasa en el hígado.",
        "Producción de bilis.",
        "Toxicidad excesiva.",
      ],
    },
    {
      img: "images/FIT-ES-NAT.png",
      name: "FIT-ES-NAT Suplemento Natural",
      price: "6,115.00",
      registry: "SD-CR-23-01567",
      description: [
        "Fórmula especial de fitoestrógenos para tratar los malestares ocasionados por la (pre) y menopausia como:",
        "Calores.",
        "Mareos.",
        "Cansancio.",
        "Depresión.",
        "Cambios de ánimo.",
      ],
    },
    {
      img: "images/OMEGA_369.png",
      name: "Omega 3, 6 y 9 Natural",
      price: "4,368.00",
      registry: "SD-CR-16-07953",
      description: [
        "El EPA y DHA ayudan a proteger al corazón.",
        "Contribuyen con una buena circulación sanguínea.",
        "Disminuye el nivel de colesterol, triglicéridos y ácido úrico.",
      ],
    },
    {
      img: "images/HART-HAID.png",
      name: "Hart-Haid Glucosamina + Colágeno",
      price: "7,935.00",
      registry: "SD-CR-23-01034",
      description: [
        "Promueve la regeneración del cartílago y de las articulaciones de los huesos.",
        "Reduce las inflamaciones musculares, la artritis y la osteoporosis.",
        "Lubrica las articulaciones brindando confort y flexibilidad.",
      ],
    },
    {
      img: "images/JARABE.png",
      name: "Jarabe con Vitamina C + Bambú",
      price: "4,779.00",
      registry: "SD-CR-18-08517",
      description: [
        "Fortalece el sistema inmunológico.",
        "Produce colágeno.",
        "Previene enfermedades.",
        "Potente antioxidante.",
        "Reduce el estrés y la fatiga.",
      ],
    },
    {
      img: "images/JUGO_CONCENTRADO.png",
      name: "Jugo Concentrado Nutritivo",
      price: "6,326.00",
      registry: "A-CR-16-07456",
      description: [
        "Coadyuvante a proteger y reparar las mucosas gastrointestinales.",
        "Posee una acción antiinflamatoria que ayuda en el control de la gastritis, colitis ulcerosa y diarrea infecciosa.",
        "Mejora la digestión.",
        "Combate enfermedades asociadas con el envejecimiento, ataques cardíacos y cáncer.",
        "Eficaz en el tratamiento de migraña, estreñimiento y presencia de hemorroides.",
      ],
    },
    {
      img: "images/MELATONINA.png",
      name: "Melatonina + Vitamina B6",
      price: "4,031.00",
      registry: "SD-CR-23-00638",
      description: [
        "Coadyuvante en el tratamiento del insomnio.",
        "Regula el ciclo circadiano.",
        "La vitamina B6 es necesaria para la síntesis de melatonina, la hormona que regula los ciclos de sueño y de vigilia, garantizando un mejor descanso nocturno.",
      ],
    },
    {
      img: "images/MORINGA.png",
      name: "Suplemento de Moringa Natural",
      price: "4,850.00",
      registry: "SD-CR-17-08919",
      description: [
        "Coadyuvante para el control de la glucosa, de las grasas en la sangre, como antiinflamatoria, antimicrobiana, anticancerígena y protectora hepática.",
        "Posee:",
        "7 veces más Vitamina C que las naranjas.",
        "5 veces más Hierro que las Espinacas.",
        "4 veces más Vitamina A que las Zanahorias.",
        "4 veces más Calcio que la Leche.",
      ],
    },
    {
      img: "images/OMEGA_3.png",
      name: "Omega 3: 100 Softgels",
      price: "4,368.00",
      registry: "SD-CR-16-02381",
      description: [
        "El EPA y DHA ayudan a proteger al corazón.",
        "Contribuyen con una buena circulación sanguínea.",
        "Disminuye el nivel de colesterol, triglicéridos y ácido úrico.",
      ],
    },
    {
      img: "images/ALGAS_SPIRULINA.png",
      name: "Spirulina: Alga Nutritiva",
      price: "4,639.00",
      registry: "SD-CR-20-02537",
      description: [
        "Es empleada en programas dietéticos para bajar de peso o en casos de desnutrición.",
        "Coadyuvante en estreñimiento, gastritis, colesterol alto y úlceras del tracto gastrointestinal.",
        "Contiene abundantes proteínas, aminoácidos, vitaminas, ácidos grasos esenciales y minerales.",
      ],
    },
    {
      img: "images/VITAMINA_D3.png",
      name: "Vitamina D3 Suplemento Diario",
      price: "4,378.00",
      registry: "SD-CR-23-01473",
      description: [
        "Es un nutriente necesario para la absorción del calcio requerido por los huesos.",
        "Colabora en el tratamiento de la Osteoporosis.",
        "Coadyuvante en el buen funcionamiento de los músculos.",
        "Necesaria para el movimiento de los nervios que transmiten mensajes entre mente y cuerpo.",
        "Indispensable para que el sistema inmunitario pueda combatir bacterias y virus que lo ataquen.",
      ],
    },
    {
      img: "images/SUP-CO-CLE.png",
      name: "SUP-CO-CLE Limpiador de Colon",
      price: "6,515.00",
      registry: "SD-CR-23-01565",
      description: [
        "Fórmula mejorada para la limpieza y restablecimiento de las funciones del colon.",
        "Mejora la digestión.",
        "Coadyuvante con el estreñimiento eliminando toxinas del cuerpo.",
      ],
    },
    {
      img: "images/TE_CHINO.png",
      name: "Té Chino de Bambú",
      price: "2,451.00",
      registry: "AS-CN-19-03860",
      description: [
        "Posee un excelente aporte en fibra que regula el tránsito intestinal y combate el estreñimiento.",
        "Su alto contenido en potasio ayuda al buen funcionamiento del sistema nervioso y regula la presión arterial.",
        "En medicina tradicional asiática ha sido usado como antiinflamatorio y analgésico.",
        "Su aporte en silicio mantiene los huesos sanos y es recomendable entre mujeres menopáusicas ayudando a regular los sofocos.",
      ],
    },
    {
      img: "images/GINGER_DRINK.png",
      name: "Té de Jengibre Saludable",
      price: "2,801.00",
      registry: "AS-CN-19-03859",
      description: [
        "El Jengibre tiene propiedades antioxidantes y antiinflamatorias gracias a la presencia de Fitoesteroles.",
        "Es bueno para personas con reumatismo y artritis.",
        "Coadyuvante en mujeres embarazadas ya que disminuye las náuseas y los vómitos.",
        "Además tiene minerales como el calcio, fósforo, potasio, hierro, magnesio, zinc, vitaminas E y C, y las del complejo B, sobre todo ácido fólico.",
      ],
    },
    {
      img: "images/URI-GO-NAT.png",
      name: "URI-GO-NAT: Uricemia Natural",
      price: "5,878.00",
      registry: "SD-CR-23-01573",
      description: [
        "Fórmula especial de hierbas naturales.",
        "Coadyuvante en el tratamiento del ácido úrico, nivelándolo y previniendo nuevas formaciones.",
        "Colabora en el tratamiento de reumatismo y gota.",
        "Provee una acción depurativa del organismo.",
      ],
    },
    {
      img: "images/VITAGOMITAS.png",
      name: "Vitagomitas: Vitaminas Naturales",
      price: "4,368.00",
      registry: "SD-US-21-00293",
      description: [
        "Fortalece el sistema inmune.",
        "Coadyuvante en el fortalecimiento de los huesos.",
        "Antioxidante.",
        "Convierte los nutrientes y alimentos en energía.",
        "Función neurológica.",
        "Prevención de la anemia.",
      ],
    },
  ];

  function renderPopularProducts() {
    const popularProductsContainer = $("#popular-products-container");
    popularProductsContainer.html(""); // Limpia el contenedor de productos populares

    // Selecciona productos específicos para la sección de populares
    const popularProducts = [
      products[0], // Citrato Potasio y Vitamina B12
      products[1], // Biotina, Ácido Hialurónico + Vitamina E y C
      products[2], // Citrato de Magnesio Polvo
      products[3], // Gel de Sábila Natural
      products[4], // Citrato de Magnesio Cápsulas
      products[5], // Colágeno Hidrolizado con Vitamina C
    ];

    // Renderiza los productos en el contenedor
    popularProducts.forEach((product) => {
      const productHTML = `
      <div class="col-sm-6 col-lg-4 text-center item mb-4">
        <a href="product.html" class="product-link" data-product='${JSON.stringify(product)}'>
          <img src="${product.img}" alt="${product.name}" class="img-fluid">
        </a>
        <h3 class="text-dark">${product.name}</h3>
        <p class="product-registry">${product.registry}</p>
      </div>
    `;    
      popularProductsContainer.append(productHTML);
    });
    // Evento para guardar el producto seleccionado en Local Storage
    $(".product-link").on("click", function () {
      const product = $(this).data("product");
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    });
  }
  // Llama a la función para renderizar productos populares al cargar la página
  renderPopularProducts();

  const itemsPerPage = 8;
  let currentPage = localStorage.getItem("currentPage")
    ? parseInt(localStorage.getItem("currentPage"))
    : 1;

  function renderProducts() {
    const productContainer = $("#product-container");
    productContainer.html(""); // Limpia los productos actuales

    // Calcula el inicio y fin de los productos para la página actual
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach((product) => {
      const productElement = `
      <div class="col-sm-6 col-lg-4 text-center item mb-4">
        <a href="product.html" class="product-link" data-product='${JSON.stringify(product)}'>
          <img src="${product.img}" alt="${product.name}" class="img-fluid">
          <h3 class="text-dark">${product.name}</h3>
          <p class="product-registry">${product.registry}</p>
        </a>
      </div>
    `;    
      productContainer.append(productElement);
    });

    // Evento para guardar el producto seleccionado en Local Storage
    $(".product-link").on("click", function () {
      const product = $(this).data("product");
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    });
  }

  function renderPagination() {
    const paginationContainer = $(".site-block-27 ul");
    paginationContainer.html(""); // Limpia la paginación actual
  
    const totalPages = Math.ceil(products.length / itemsPerPage);
  
    // Botón "Anterior"
    if (currentPage > 1) {
      const prevPage = $('<li><a href="javascript:void(0)">&lt;</a></li>');
      prevPage.on("click", () => {
        currentPage--;
        localStorage.setItem("currentPage", currentPage);
        renderProducts();
        renderPagination(); // Vuelve a renderizar la paginación
        window.scrollTo(0, 0);
      });
      paginationContainer.append(prevPage);
    }
  
    // Números de página
    for (let i = 1; i <= totalPages; i++) {
      const pageItem = $('<li class="page-item"></li>');
      const pageLink = $(`<a href="javascript:void(0)">${i}</a>`);
  
      // Agrega clase "active" a la página actual
      if (i === currentPage) {
        pageItem.addClass("active");
      }
  
      // Evento de cambio de página
      pageLink.on("click", () => {
        currentPage = i;
        localStorage.setItem("currentPage", currentPage);
        renderProducts();
        renderPagination(); // Actualiza la paginación
        window.scrollTo(0, 0);
      });
  
      pageItem.append(pageLink);
      paginationContainer.append(pageItem);
    }
  
    // Botón "Siguiente"
    if (currentPage < totalPages) {
      const nextPage = $('<li><a href="javascript:void(0)">&gt;</a></li>');
      nextPage.on("click", () => {
        currentPage++;
        localStorage.setItem("currentPage", currentPage);
        renderProducts();
        renderPagination(); // Actualiza la paginación
        window.scrollTo(0, 0);
      });
      paginationContainer.append(nextPage);
    }
  }
  

  // Evento para los botones de filtro
  $("#dropdownMenuReference")
    .siblings(".dropdown-menu")
    .on("click", ".dropdown-item", function (e) {
      e.preventDefault();
      const sortCriteria = $(this).text();
      if (sortCriteria === "Nombre, A a Z") {
        products.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortCriteria === "Nombre, Z a A") {
        products.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortCriteria === "Precio, de menor a mayor") {
        products.sort(
          (a, b) =>
            parseFloat(a.price.replace(",", "")) -
            parseFloat(b.price.replace(",", ""))
        );
      } else if (sortCriteria === "Precio, de mayor a menor") {
        products.sort(
          (a, b) =>
            parseFloat(b.price.replace(",", "")) -
            parseFloat(a.price.replace(",", ""))
        );
      }
      currentPage = 1; // Resetear a la primera página después de ordenar
      renderProducts();
    });

  // Renderiza los productos y la paginación
  renderProducts();
  renderPagination();

  // Desplaza hacia arriba al recargar
  window.scrollTo(0, 0);

  // Producto seleccionado - Página de detalles
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  if (selectedProduct) {
    $(".product-title").text(selectedProduct.name);
    $(".product-img").attr("src", selectedProduct.img);
    $("#product-registry").text(selectedProduct.registry);

    if (selectedProduct.description) {
      const descriptionHtml = selectedProduct.description
        .map((item) => `<li>${item}</li>`)
        .join("");
      $(".product-description ul").html(descriptionHtml);
    }

    // Configura el botón de WhatsApp
    const whatsappMessage = `Hola, estoy interesado en ${selectedProduct.name}. Me gustaría saber más detalles sobre el producto y cómo puedo adquirirlo. Quedo atento a su respuesta.`;
    const whatsappUrl = `https://wa.me/50683167432?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    $("#whatsapp-button").attr("href", whatsappUrl);
  }

  var siteMenuClone = function () {
    $('<div class="site-mobile-menu"></div>').prependTo(".site-wrap");
    $('<div class="site-mobile-menu-header"></div>').prependTo(
      ".site-mobile-menu"
    );
    $('<div class="site-mobile-menu-close "></div>').prependTo(
      ".site-mobile-menu-header"
    );
    $('<div class="site-mobile-menu-logo"></div>').prependTo(
      ".site-mobile-menu-header"
    );
    $('<div class="site-mobile-menu-body"></div>').appendTo(
      ".site-mobile-menu"
    );

    $(".js-logo-clone").clone().appendTo(".site-mobile-menu-logo");
    $('<span class="ion-ios-close js-menu-toggle"></div>').prependTo(
      ".site-mobile-menu-close"
    );

    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);
        $this.prepend('<span class="arrow-collapse collapsed">');
        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });
        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });
        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();
      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();
      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();

  var sitePlusMinus = function () {
    $(".js-btn-minus").on("click", function (e) {
      e.preventDefault();
      var input = $(this).closest(".input-group").find(".form-control");
      var val = parseInt(input.val());
      input.val(val > 0 ? val - 1 : 0);
    });
    $(".js-btn-plus").on("click", function (e) {
      e.preventDefault();
      var input = $(this).closest(".input-group").find(".form-control");
      input.val(parseInt(input.val()) + 1);
    });
  };
  sitePlusMinus();

  var siteSliderRange = function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  };
  siteSliderRange();

  var siteMagnificPopup = function () {
    $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: "mfp-no-margins mfp-with-zoom",
      gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
      image: { verticalFit: true },
      zoom: { enabled: true, duration: 300 },
    });
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  };
  siteMagnificPopup();
});
