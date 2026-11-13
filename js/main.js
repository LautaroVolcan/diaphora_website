/**
 * ===================================================================
 * main js (no dependencies)
 * -------------------------------------------------------------------
 */
(function () {

	"use strict";

	/* Preloader
	------------------------------------------------------ */
	window.addEventListener("load", function () {
		var preloader = document.getElementById("preloader");
		if (preloader) preloader.classList.add("is-hidden");
	});


	/* Mobile menu
	------------------------------------------------------ */
	var toggle = document.querySelector(".menu-toggle"),
		nav = document.querySelector(".main-navigation");

	function setMenu(open) {
		toggle.classList.toggle("is-clicked", open);
		nav.classList.toggle("is-open", open);
		toggle.setAttribute("aria-expanded", open ? "true" : "false");
	}

	toggle.addEventListener("click", function (e) {
		e.preventDefault();
		setMenu(!nav.classList.contains("is-open"));
	});

	nav.querySelectorAll("a").forEach(function (link) {
		link.addEventListener("click", function () { setMenu(false); });
	});


	/* Highlight the current section in the navigation
	------------------------------------------------------ */
	var links = {};
	nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
		links[a.getAttribute("href").slice(1)] = a.parentElement;
	});

	if ("IntersectionObserver" in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting || !links[entry.target.id]) return;
				Object.keys(links).forEach(function (id) { links[id].classList.remove("current"); });
				links[entry.target.id].classList.add("current");
			});
		}, { rootMargin: "-40% 0px -55% 0px" });

		document.querySelectorAll("section[id]").forEach(function (s) { observer.observe(s); });
	}


	/* Header background + back-to-top button on scroll
	------------------------------------------------------ */
	var header = document.querySelector("header"),
		goTop = document.getElementById("go-top"),
		intro = document.getElementById("intro");

	function onScroll() {
		var y = window.scrollY;
		header.classList.toggle("is-scrolled", y > intro.offsetHeight - 80);
		goTop.classList.toggle("is-visible", y >= 300);
	}
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();


	/* Footer year
	------------------------------------------------------ */
	var copyright = document.getElementById("copyright");
	if (copyright) copyright.textContent = "© Copyright LF – " + new Date().getFullYear();

})();
