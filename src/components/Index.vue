<template>
	<div class="index">
		<!-- header -->
		<header class="header">
			<nav class="menu  menu_mobile">
				<div class="menu__close">*</div>
				<ul class="menu__list">
					<li class="menu__item"><a href="#">Главная</a></li>
					<li class="menu__item"><a href="#">Фото и видео</a></li>
					<li class="menu__item"><a href="#">Форма отзыва</a></li>
					<li class="menu__item"><a href="#">Html Academy</a></li>
					
				</ul>
				

			</nav>
			<div class="header__logo">
				<img src="http://placehold.it/188x56" alt="City of Sedona">
			</div>

			<div class="banner">
				<img src="http://placehold.it/1200x518" alt="welcome to sedona">
				<div class="banner__title"></div>
			</div>

			<div class="index__title">
				<h2 class="title">Седона — Небольшой городок в аризоне,заслуживающий большего!</h2>
				<span class="text">Рассмотрим 5 причин,по которым Седона круче чем Гранд Каньон!</span>
			</div>

		</header>
<!-- header -->

		<section class="triggers">
			<div class="triggers__wrapper">

				<div class="triggers__item">
					<h3 class="triggers__title">Настоящий городок</h3>
					<span class="triggers__num">-№1-</span>
					<p class="triggers__discription">Седона не атракцион для туристов,там течет своя жизнь</p>
				</div>

				<div class="triggers__img">
					<img src="http://placehold.it/800x400" alt="photo-city">
				</div>
			</div>

			<div class="wrapper-content  wrapper-content_white">

				<div class="wrapper-content__item">
					<div class="wrapper-content__icon">
						<img src="http://placehold.it/78x78" alt="house">
					</div>
					
					<div class="wrapper-content__description">
						<span class="black-text">Жилье</span>
						<p class="gray-text"> Рекомендуем пожить в настоящем мотеле,все как в кино</p>
					</div>

				</div>

				<div class="wrapper-content__item">
					<img src="http://placehold.it/78x78" alt="Food">
					<span class="black-text">Еда</span>
					<p class="gray-text">Всегда заказывай фирменный бургер, вы не разочаруетесь!</p>
				</div>

				<div class="wrapper-content__item">
					<img src="http://placehold.it/78x78" alt="presents">
					<span class="black-text">Сувениры</span>
					<p class="gray-text">Не только китайского но и местного производства!</p>
				</div>

			</div>
			<div class="triggers-revers">
				
				<div class="triggers-revers_item">
					<h3 class="triggers-wrapper_title">Там есть мост дьявола</h3>
					<span class="triggers__num">-№2-</span>
					<p class="triggers__discription">Да,по нему можно пройти! Если конечно вы осмелитесь</p>
				</div>

				<div class="trigger-revers_img">
					<img src="http://placehold.it/800x400" alt="photo-city">
				</div>
			</div>

			<div class="triggers triggers_gray">

				<div class="triggers-item">
					<h3 class="triggers-item_title">Небольшая площадь</h3>
					<span class="triggers-item_num">-№3-</span>
					<p class="triggers-item_description">Все достопримечательности находятся очень близко</p>
				</div>

				<div class="triggers-item">
					<h3 class="triggers-item_title">Красивая дорога</h3>
					<span class="triggers-item_num">-№4-</span>
					<p class="triggers-item_description">Ехать в седону из Лас-Вегаса совсем не скучно!</p>
				</div>

				<div class="triggers-item">
					<h3 class="triggers-item_title">Мало туристов</h3>
					<span class="triggers-item_num">-№5-</span>
					<p class="triggers-item_description">Большенство едет в Гранд Каньон и толпится там</p>
				</div>

				


			</div>
		</section>

		<section class="interested">
			<h2 class="interested__question">Заинтересовались?</h2>
			<span class="interested__choise">Укажите предпологаемые даты поездки и мы покажем вам лучшие предложения гостиниц в седрне</span>
			<button class="btn">Найти гостинницу</button>
		</section>

		<!-- <section class="map">
			<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad839a147f7156edf62e8c29536ce535005c584ee3082994102f5a0c84034f038&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
		</section> -->

		<footer class="footer">

			<div class="footer__htag">
				<a href="#" class="footer__link">#VISITSEDONA</a>
			</div>

			<div class="social">
				<a href="#" class="social__link social__link_tw" >TWITTER</a>
				<a href="#" class="social__link social__link_fb" >FACEBOOK</a>
				<a href="#" class="social__link social__link_yt" >YOUTUBE</a>
			</div>

			<div class="copyrights">
				Разработано : 
				<a href="#" class="copyrights__link">HTML Academy</a>
			</div>
			
		</footer>

	</div>

</template>

<script>
export default {
  
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
