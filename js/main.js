AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
});

jQuery(document).ready(function($) {
    "use strict";

    // Obtiene el título del producto desde el DOM
    const productTitle = $(".product-title").text().trim();

    // URL de WhatsApp con el mensaje dinámico
    const whatsappBaseUrl = "https://wa.me/50683167432"; // Número de WhatsApp con código de país (506 para Costa Rica)
    const message = `Quiero más información sobre ${productTitle}`;

    // Construye la URL final
    const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

    // Asigna la URL al botón
    $("#whatsapp-button").attr("href", whatsappUrl);

    const products = [
        { img: "images/CITRATO_POTASIO.png", name: "Citrato Potasio y Vitamina B12", price: "3,663.00" },
        { img: "images/BIOTINA.png", name: "Biotina, Ácido Hialurónico + Vitamina E y C", price: "5,235.00" },
        { img: "images/CITRATO_MAGNESIO.png", name: "Citrato de Magnesio Polvo", price: "6,892.00" },
        { img: "images/GEL_SABILA.png", name: "Gel de Sábila Natural", price: "4,201.00" },
        { img: "images/CITRATO_MAGNESIO_CAPS.png", name: "Citrato de Magnesio Cápsulas", price: "4,949.00" },
        { img: "images/COLAGENO_VC.png", name: "Colágeno Hidrolizado con Vitamina C", price: "4,959.00" },
        { img: "images/COMPLEJO_B.png", name: "Complejo B + Vitamina B12", price: "5,087.00" },
        { img: "images/EPALI-NAT.png", name: "EPALI-NAT: Protector Hepático Natural", price: "6,312.00" },
        { img: "images/FIT-ES-NAT.png", name: "FIT-ES-NAT Suplemento Natural", price: "6,115.00" },
        { img: "images/OMEGA_369.png", name: "Omega 3, 6 y 9 Natural", price: "4,368.00" },
        { img: "images/HART-HAID.png", name: "Hart-Haid Glucosamina + Colágeno", price: "7,935.00" },
        { img: "images/JARABE.png", name: "Jarabe con Vitamina C + Bambú", price: "4,779.00" },
        { img: "images/JUGO_CONCENTRADO.png", name: "Jugo Concentrado Nutritivo", price: "6,326.00" },
        { img: "images/MELATONINA.png", name: "Melatonina + Vitamina B6", price: "4,031.00" },
        { img: "images/MORINGA.png", name: "Suplemento de Moringa Natural", price: "4,850.00" },
        { img: "images/OMEGA_3.png", name: "Omega 3: 100 Softgels", price: "4,368.00" },
        { img: "images/ALGAS_SPIRULINA.png", name: "Spirulina: Alga Nutritiva", price: "4,639.00" },
        { img: "images/VITAMINA_D3.png", name: "Vitamina D3 Suplemento Diario", price: "4,378.00" },
        { img: "images/SUP-CO-CLE.png", name: "SUP-CO-CLE Limpiador de Colon", price: "6,515.00" },
        { img: "images/TE_CHINO.png", name: "Té Chino de Bambú", price: "2,451.00" },
        { img: "images/GINGER_DRINK.png", name: "Té de Jengibre Saludable", price: "2,801.00" },
        { img: "images/URI-GO-NAT.png", name: "URI-GO-NAT: Uricemia Natural", price: "5,878.00" },
        { img: "images/VITAGOMITAS.png", name: "Vitagomitas: Vitaminas Naturales", price: "4,368.00" }
    ];    
	
	const itemsPerPage = 8;
	let currentPage = localStorage.getItem('currentPage') ? parseInt(localStorage.getItem('currentPage')) : 1;

    // Función para ordenar productos
	function sortProducts(criteria) {
		if (criteria === 'name-asc') {
			products.sort((a, b) => a.name.localeCompare(b.name));
		} else if (criteria === 'name-desc') {
			products.sort((a, b) => b.name.localeCompare(a.name));
		} else if (criteria === 'price-asc') {
			products.sort((a, b) => parseFloat(a.price.replace(",", "")) - parseFloat(b.price.replace(",", "")));
		} else if (criteria === 'price-desc') {
			products.sort((a, b) => parseFloat(b.price.replace(",", "")) - parseFloat(a.price.replace(",", "")));
		}
		currentPage = 1; // Resetear a la primera página después de ordenar
		renderProducts();
	}

	function renderProducts() {
		const productContainer = $("#product-container");
		productContainer.html(""); // Limpia los productos actuales
	
		// Calcula el inicio y el fin de los productos para la página actual
		const start = (currentPage - 1) * itemsPerPage;
		const end = start + itemsPerPage;
		const paginatedProducts = products.slice(start, end);
	
		paginatedProducts.forEach(product => {
			const productElement = `
				<div class="col-sm-6 col-lg-4 text-center item mb-4">
					<a href="shop-single.html"><img src="${product.img}" alt="${product.name}"></a>
					<h3 class="text-dark"><a href="shop-single.html">${product.name}</a></h3>
					<p class="price">${product.price}</p>
				</div>
			`;
			productContainer.append(productElement);
		});
		renderPagination();
	}
	
	function renderPagination() {
		const paginationContainer = $(".site-block-27 ul");
		paginationContainer.html(""); // Limpia la paginación actual
	
		const totalPages = Math.ceil(products.length / itemsPerPage);
	
		if (currentPage > 1) {
			const prevPage = $('<li><a href="javascript:void(0)">&lt;</a></li>');
			prevPage.on("click", () => { 
				currentPage--; 
				localStorage.setItem('currentPage', currentPage); // Guarda la página actual
				renderProducts();
				window.scrollTo(0, 0); // Desplaza hacia arriba
			});
			paginationContainer.append(prevPage);
		}
	
		for (let i = 1; i <= totalPages; i++) {
			const pageItem = $('<li></li>');
			if (i === currentPage) pageItem.addClass("active");
			pageItem.html(`<a href="javascript:void(0)">${i}</a>`);
			pageItem.on("click", () => { 
				currentPage = i; 
				localStorage.setItem('currentPage', currentPage); // Guarda la página actual
				renderProducts();
				window.scrollTo(0, 0); // Desplaza hacia arriba
			});
			paginationContainer.append(pageItem);
		}
	
		if (currentPage < totalPages) {
			const nextPage = $('<li><a href="javascript:void(0)">&gt;</a></li>');
			nextPage.on("click", () => { 
				currentPage++; 
				localStorage.setItem('currentPage', currentPage); // Guarda la página actual
				renderProducts();
				window.scrollTo(0, 0); // Desplaza hacia arriba
			});
			paginationContainer.append(nextPage);
		}
	}

    	// Evento para los botones de filtro
	$('#dropdownMenuReference').siblings('.dropdown-menu').on('click', '.dropdown-item', function(e) {
		e.preventDefault();
		const sortCriteria = $(this).text();
		if (sortCriteria === "Nombre, A a Z") {
			sortProducts('name-asc');
		} else if (sortCriteria === "Nombre, Z a A") {
			sortProducts('name-desc');
		} else if (sortCriteria === "Precio, de menor a mayor") {
			sortProducts('price-asc');
		} else if (sortCriteria === "Precio, de mayor a menor") {
			sortProducts('price-desc');
		}
	});
	
	// Desplaza hacia arriba cuando se recarga la página
	$(document).ready(function() {
		renderProducts();
		window.scrollTo(0, 0); // Mueve la vista hacia el inicio de la página
	});

    var slider = function() {
        $('.nonloop-block-3').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            smartSpeed: 700,
            stagePadding: 15,
            margin: 20,
            autoplay: true,
            nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
            responsive: {
                600: { margin: 20, items: 2 },
                1000: { margin: 20, items: 3 },
                1200: { margin: 20, items: 3 }
            }
        });
    };
    slider();

    var siteMenuClone = function() {
        $('<div class="site-mobile-menu"></div>').prependTo('.site-wrap');
        $('<div class="site-mobile-menu-header"></div>').prependTo('.site-mobile-menu');
        $('<div class="site-mobile-menu-close "></div>').prependTo('.site-mobile-menu-header');
        $('<div class="site-mobile-menu-logo"></div>').prependTo('.site-mobile-menu-header');
        $('<div class="site-mobile-menu-body"></div>').appendTo('.site-mobile-menu');

        $('.js-logo-clone').clone().appendTo('.site-mobile-menu-logo');
        $('<span class="ion-ios-close js-menu-toggle"></div>').prependTo('.site-mobile-menu-close');
        
        $('.js-clone-nav').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });

        setTimeout(function() {
            var counter = 0;
            $('.site-mobile-menu .has-children').each(function(){
                var $this = $(this);
                $this.prepend('<span class="arrow-collapse collapsed">');
                $this.find('.arrow-collapse').attr({
                    'data-toggle' : 'collapse',
                    'data-target' : '#collapseItem' + counter,
                });
                $this.find('> ul').attr({
                    'class' : 'collapse',
                    'id' : 'collapseItem' + counter,
                });
                counter++;
            });
        }, 1000);

        $('body').on('click', '.arrow-collapse', function(e) {
            var $this = $(this);
            if ( $this.closest('li').find('.collapse').hasClass('show') ) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();  
        });

        $(window).resize(function() {
            var $this = $(this), w = $this.width();
            if ( w > 768 ) {
                if ( $('body').hasClass('offcanvas-menu') ) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });

        $('body').on('click', '.js-menu-toggle', function(e) {
            var $this = $(this);
            e.preventDefault();
            if ( $('body').hasClass('offcanvas-menu') ) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        });

        $(document).mouseup(function(e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ( $('body').hasClass('offcanvas-menu') ) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    }; 
    siteMenuClone();

    var sitePlusMinus = function() {
        $('.js-btn-minus').on('click', function(e){
            e.preventDefault();
            var input = $(this).closest('.input-group').find('.form-control');
            var val = parseInt(input.val());
            input.val(val > 0 ? val - 1 : 0);
        });
        $('.js-btn-plus').on('click', function(e){
            e.preventDefault();
            var input = $(this).closest('.input-group').find('.form-control');
            input.val(parseInt(input.val()) + 1);
        });
    };
    sitePlusMinus();

    var siteSliderRange = function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    };
    siteSliderRange();

    var siteMagnificPopup = function() {
        $('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom',
            gallery: { enabled: true, navigateByImgClick: true, preload: [0,1] },
            image: { verticalFit: true },
            zoom: { enabled: true, duration: 300 }
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false,
            fixedContentPos: false
        });
    };
    siteMagnificPopup();

    var searchShow = function() {
        var searchWrap = $('.search-wrap');
        $('.js-search-open').on('click', function(e) {
            e.preventDefault();
            searchWrap.addClass('active');
            setTimeout(function() { searchWrap.find('.form-control').focus(); }, 300);
        });
        $('.js-search-close').on('click', function(e) {
            e.preventDefault();
            searchWrap.removeClass('active');
        });
    };
    searchShow();

});
