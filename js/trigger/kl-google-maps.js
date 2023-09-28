(function ($) {
	"use strict";

	$(document).ready(function () {
			// Map Markers
			var mapMarkers = [{
					address: "Dr. Lauro Wolff Valente, 176 - Portão",
					latitude: -25.47386729195897,
					longitude: -49.2972340543231,
					icon: {
							image: "images/map-marker.png",
							iconsize: [32, 39],
							iconanchor: [13, 39]
					},
					html: '<div style="width: 300px; padding: 15px;"><h3 style="margin-bottom: 15px;">Odontologia Wolcoff</span></h3><p class="nobottommargin"><span style="line-height:1.4;">Espaço <span class="fw-semibold">WOLCOFF</span> saúde e bem estar</span> Rua:<br/> Dr. Lauro Wolff Valente, 176, Curitiba, PR</p></div>',
			}];

			// Map Color Scheme
			var mapStyles = [
					// Adicione seu estilo personalizado aqui
			];

			// Map Initial Location
			var initLatitude = -25.4738675;
			var initLongitude = -49.2972346;

			// Inicialização do mapa
			var map = new google.maps.Map(document.querySelector(".th-google_map"), {
					center: new google.maps.LatLng(initLatitude, initLongitude),
					zoom: 14,
					styles: mapStyles,
					scrollwheel: false,
			});

			// Adicionando marcadores ao mapa
			for (var i = 0; i < mapMarkers.length; i++) {
					var markerData = mapMarkers[i];
					var marker = new google.maps.Marker({
							position: new google.maps.LatLng(markerData.latitude, markerData.longitude),
							map: map,
							icon: markerData.icon,
					});

					// Adicione uma janela de informações ao marcador
					var infoWindow = new google.maps.InfoWindow({
							content: markerData.html,
					});

					google.maps.event.addListener(marker, "click", function () {
							infoWindow.open(map, this);
					});
			}
	});
})(jQuery);