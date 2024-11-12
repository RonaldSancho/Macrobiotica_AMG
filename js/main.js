AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
});

jQuery(document).ready(function($) {
    "use strict";

	const products = [
		{ img: "images/CITRATO_POTASIO.png", name: "Citrato de Potasio y vitamina B12", price: "3,663.00" },
		{ img: "images/BIOTINA.png", name: "Biotina con ácido hialurónico, vitamina E y C", price: "5,235.00" },
		{ img: "images/CITRATO_MAGNESIO.png", name: "Citrato de Magnesio en polvo", price: "6,892.00" },
		{ img: "images/GEL_SABILA.png", name: "Gel de sabila", price: "4,201.00" },
		{ img: "images/CITRATO_MAGNESIO_CAPS.png", name: "Citrato de Magnesio en cápsulas", price: "4,949.00" },
		{ img: "images/COLAGENO_VC.png", name: "Colágeno con vitamina C", price: "4,959.00" },
		{ img: "images/COMPLEJO_B.png", name: "Complejo B con vitaminas + B12", price: "5,087.00" },
		{ img: "images/EPALI-NAT.png", name: "EPALI-NAT (Hepático 100% natural)", price: "6,312.00" },
		{ img: "images/FIT-ES-NAT.png", name: "FIT-ES-NAT (Fitoestrógenos)", price: "6,115.00" },
		{ img: "images/OMEGA_369.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/EPALI-NAT.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/JARABE.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/JUGO_CONCENTRADO.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/MELATONINA.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/MORINGA.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/OMEGA_3.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/ALGAS_SPIRULINA.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/VITAMINA_D3.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/SUP-CO-CLE.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/TE_CHINO.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/GINGER_DRINK.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/URI-GO-NAT.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" },
		{ img: "images/VITAGOMITAS.png", name: "Omega 3, 6, 9 (100% natural)", price: "4,368.00" }
	];
	
	const itemsPerPage = 9;
	let currentPage = localStorage.getItem('currentPage') ? parseInt(localStorage.getItem('currentPage')) : 1;

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
