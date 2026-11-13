/**
 * ===================================================================
 * i18n — English / Spanish
 *
 * English lives in index.html (single source). Elements marked with
 * data-i18n="key" get the Spanish text below; switching back restores
 * the original HTML. Language order: ?lang=es|en > saved choice >
 * browser language > English.
 * -------------------------------------------------------------------
 */
(function () {

	"use strict";

	var ES = {
		"meta.title": "Diaphora | DJ y productora musical en Barcelona",
		"meta.description": "Diaphora es DJ, cantante y multiinstrumentista con base en Barcelona. Sets de Tech House, Nu Disco y formato abierto para clubs, hoteles, cruceros y eventos privados.",

		"nav.home": "Inicio",
		"nav.about": "Sobre mí",
		"nav.music": "Música",
		"nav.resume": "Trayectoria",
		"nav.services": "Servicios",
		"nav.contact": "Contacto",

		"hero.kicker": "Desde Barcelona",
		"hero.singer": "Cantante",
		"hero.guitarist": "Guitarrista",
		"hero.producer": "Productora musical",
		"hero.cta": "Sobre mí",

		"about.kicker": "Sobre mí",
		"about.title": "DJ, cantante y multiinstrumentista.",
		"about.p1": "Soy DJ profesional, cantante y multiinstrumentista con formación, y mis sets combinan precisión técnica con creatividad y groove. Me muevo con naturalidad entre la música electrónica y los clásicos de siempre: Tech House, Funky House, Techno y Nu Disco, además de Disco, Pop, Latino, R&amp;B, Country, Jazz, Rap, Baladas y Rock clásico.",
		"about.p2": "En el escenario tengo una presencia sólida y conecto de forma auténtica con el público, adaptándome siempre a la energía de la sala. Me siento cómoda con el micrófono, disfruto interactuando con la gente y mantengo la profesionalidad y el compromiso en cada actuación.",
		"about.p3": "Con formación en educación musical, años de experiencia internacional e inglés fluido, combino versatilidad, fiabilidad y creatividad para ofrecer un viaje musical inmersivo y memorable a través de géneros y épocas.",
		"about.book": "Contrátame",

		"music.kicker": "Música",
		"music.title": "Escucha mis sets.",
		"music.lead": "Mixes en SoundCloud y sets en vivo grabados en el escenario.",
		"music.live": "Sets en vivo",

		"resume.kicker": "Trayectoria",
		"resume.title": "Dónde he tocado.",
		"resume.lead": "Un resumen de mi recorrido como DJ, música y artista: de escenarios internacionales y eventos de lujo a la formación académica en música.",
		"resume.gigs": "Actuaciones",
		"resume.education": "Formación",
		"role.hostSingerGuitar": "Presentadora, cantante y guitarrista",
		"role.hostSinger": "Presentadora y cantante",
		"edu.unlp.title": "Licenciada y profesora de Música",
		"edu.unlp.school": "Universidad Nacional de La Plata – Facultad de Artes",
		"edu.unlp.text": "Construí una base sólida en teoría musical, composición, interpretación y pedagogía. Participé en proyectos artísticos y académicos que ampliaron mi mirada musical, tanto en la docencia como en la práctica profesional.",
		"edu.plastic.title": "DJ profesional de música electrónica y urbana",
		"edu.plastic.text": "Me especialicé en la producción y la interpretación de música electrónica y urbana, perfeccionando la mezcla, los sets en vivo y la creación de experiencias musicales que enganchan. En esa etapa también actué en locales emblemáticos de Barcelona y gané experiencia en escenarios de referencia.",

		"services.kicker": "Servicios",
		"services.title": "¿Qué puedo hacer por ti?",
		"services.lead": "Cada set se adapta al lugar, al público y al momento.",
		"svc.luxury.title": "Eventos de lujo y corporativos",
		"svc.luxury.desc": "Sets de DJ a medida para eventos exclusivos, desfiles de moda, lanzamientos de producto y fiestas privadas.",
		"svc.cruises.title": "Cruceros y actuaciones internacionales",
		"svc.cruises.desc": "Sets versátiles entre géneros (EDM, Disco, Pop, Latino, R&amp;B, Jazz, Rock clásico, etc.) para públicos de todo el mundo.",
		"svc.hotels.title": "Hoteles, rooftops y lounges",
		"svc.hotels.desc": "Selecciones refinadas que crean el ambiente perfecto en hoteles boutique, rooftops y lounges exclusivos.",
		"svc.clubs.title": "Clubs y festivales",
		"svc.clubs.desc": "Actuaciones de alta energía que mezclan Tech House, Funky House, Nu Disco, Techno y más, adaptadas al público.",

		"contact.kicker": "Contacto",
		"contact.title": "Trabajemos juntos.",
		"contact.lead": "Para contrataciones, colaboraciones o prensa, escríbeme un email o resérvame directamente en Gig Heaven.",
		"contact.where": "Dónde encontrarme",
		"contact.places": "Barcelona, España<br>Buenos Aires, Argentina",
		"contact.email": "Escríbeme a",
		"contact.book": "Reserva una fecha en",

		"footer.design": "Diseño de <a href=\"https://www.lautaroferrandi.com/\" target=\"_blank\" rel=\"noopener\">Lautaro Ferrandi</a>",

		"ui.openMenu": "Abrir menú",
		"ui.backToTop": "Volver arriba"
	};

	// Gig lists stay in HTML only; these phrases are swapped inside them.
	var GIG_PHRASES = [
		["Europe, USA, Caribbean", "Europa, EE. UU., Caribe"],
		["Private Wedding", "Boda privada"],
		["Private Event", "Evento privado"],
		["Private Party", "Fiesta privada"],
		["Restaurant", "Restaurante"],
		["Sicily, Italy", "Sicilia, Italia"],
		["Spain", "España"]
	];

	var STORAGE_KEY = "diaphora-lang";
	var originals = new Map();

	function remember(el, prop) {
		var k = el, store = originals.get(k) || {};
		if (!(prop in store)) {
			store[prop] = prop === "html" ? el.innerHTML : el.getAttribute(prop);
			originals.set(k, store);
		}
		return store[prop];
	}

	function apply(lang) {
		var es = lang === "es";

		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			var en = remember(el, "html"), key = el.getAttribute("data-i18n");
			el.innerHTML = es && ES[key] ? ES[key] : en;
		});

		document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
			var en = remember(el, "aria-label"), key = el.getAttribute("data-i18n-aria");
			el.setAttribute("aria-label", es && ES[key] ? ES[key] : en);
		});

		document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
			var en = remember(el, "title"), key = el.getAttribute("data-i18n-title");
			el.setAttribute("title", es && ES[key] ? ES[key] : en);
		});

		document.querySelectorAll(".gig-list li").forEach(function (li) {
			var en = remember(li, "html"), text = en;
			if (es) GIG_PHRASES.forEach(function (p) { text = text.split(p[0]).join(p[1]); });
			li.innerHTML = text;
		});

		// <title>, meta description and <html lang>
		var desc = document.querySelector('meta[name="description"]');
		remember(document.documentElement, "lang");
		var titleEl = document.querySelector("title");
		remember(titleEl, "html");
		remember(desc, "content");
		document.title = es ? ES["meta.title"] : originals.get(titleEl).html.replace(/&amp;/g, "&");
		desc.setAttribute("content", es ? ES["meta.description"] : originals.get(desc).content);
		document.documentElement.lang = es ? "es" : "en";

		document.querySelectorAll(".lang-switch button").forEach(function (b) {
			b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
		});
	}

	function initialLang() {
		var param = new URLSearchParams(location.search).get("lang");
		if (param === "es" || param === "en") return param;
		try {
			var saved = localStorage.getItem(STORAGE_KEY);
			if (saved === "es" || saved === "en") return saved;
		} catch (e) {}
		return (navigator.language || "").toLowerCase().indexOf("es") === 0 ? "es" : "en";
	}

	function setLang(lang) {
		apply(lang);
		try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
		// keep the URL shareable: ?lang=es / ?lang=en
		var url = new URL(location.href);
		url.searchParams.set("lang", lang);
		history.replaceState(null, "", url);
	}

	document.querySelectorAll(".lang-switch button").forEach(function (b) {
		b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
	});

	var lang = initialLang();
	if (lang === "es") apply("es");

})();
