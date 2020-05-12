<template>
	<body id="page-top">
		<div id="wrapper">
			<Sidebar/>
			<div id="content-wrapper" class="d-flex flex-column">
				<div id="content">
					<Navbar/>
					<router-view/>
				</div>
				<Footer/>
			</div>
		</div>
		<a class="scroll-to-top rounded" href="#page-top">
			<i class="fas fa-angle-up"></i>
		</a>
	</body>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import $ from 'jquery';
export default {
	name: 'app',
	methods: {		
	},
	mounted() {

		// Toggle the side navigation
		$("#sidebarToggle, #sidebarToggleTop").on('click', function() {
			$("body").toggleClass("sidebar-toggled");
			$(".sidebar").toggleClass("toggled");
			if ($(".sidebar").hasClass("toggled")) {
			$('.sidebar .collapse').collapse('hide');
			}
		});

		// Close any open menu accordions when window is resized below 768px
		$(window).resize(function() {
			if ($(window).width() < 768) {
			$('.sidebar .collapse').collapse('hide');
			}
		});

		// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
		$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
			if ($(window).width() > 768) {
			var e0 = e.originalEvent,
				delta = e0.wheelDelta || -e0.detail;
			this.scrollTop += (delta < 0 ? 1 : -1) * 30;
			e.preventDefault();
			}
		});

		// Scroll to top button appear
		$(document).on('scroll', function() {
			var scrollDistance = $(this).scrollTop();
			if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
			} else {
			$('.scroll-to-top').fadeOut();
			}
		});

		// Smooth scrolling using jQuery easing
		$(document).on('click', 'a.scroll-to-top', function(e) {
			var $anchor = $(this);
			$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
			}, 1000, 'easeInOutExpo');
			e.preventDefault();
		});
	
	},
	created() {
		this.$store.dispatch('inspectTokens')		
	},
	components: {
		Sidebar,
		Navbar,
		Footer
	}
}
</script>
