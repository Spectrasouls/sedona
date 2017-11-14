<template>
	<div class="index">
		<header class="main-head">
			<nav class="main-head__menu">
				<ul class="main-head__list">
					<li class="main-head__item"><a href="#">Главная</a></li>
					<li class="main-head__item"><a href="#">Фото и видео</a></li>
					<li class="main-head__item"><a href="#">Форма отзыва</a></li>
					<li class="main-head__item"><a href="#">Html Academy</a></li>
					
				</ul>

				<div class="menu-mobile">
					<div class="menu-mobile-hamburger">
						<a href="#">TOGGEL_CLOSE</a>
					</div>
					<nav class="menu-mobile">
						<ul class="menu-mobile_list">
							<li class="menu-mobile__item"><a href="#">Главная</a></li>
							<li class="menu-mobile__item"><a href="#">Фото и видео</a></li>
							<li class="menu-mobile__item"><a href="#">Форма отзыва</a></li>
							<li class="menu-mobile__item"><a href="#">Html Academy</a></li>

						</ul>
					</nav>
				</div>

			</nav>
			<div class="main-head__logo">
				<img src="http://placehold.it/188x56" alt="City of Sedona">
			</div>
			<div class="main-banner">
				<img src="http://placehold.it/1200x518" alt="welcome to sedona">
				<div class="main-banner_title"></div>
			</div>
			<div class="title-mobile hidden">
				<p class="title-mobile_leavepost">Оставьте свой отзыв</p>
				<span class="tittle-mobile_helphotel">Помогите нашим отелям стать лучше а также о посещенных вами достопримечательностях</span>
			</div>
			<div class="page-title">
				<h2 class="page-title_textcenter">Седона — Небольшой городок в аризоне,заслуживающий большего!</h2>
				<span class="page-tittle_subcenter">Рассмотрим 5 причин,по которым Седона круче чем Гранд Каньон!</span>
			</div>
		</header>

		<section class="main-triggers">
			<div class="main-triggers_wrapper">

				<div class="main-triggers_item">
					<h3 class="trigger-maintext">Настоящий городок</h3>
					<span>-№1-</span>
					<p>Седона не атракцион для туристов,<br>там течет своя жизнь</p>
				</div>

				<div class="main-triggerimg">
					<img src="http://placehold.it/800x400" alt="photo-city">
				</div>
			</div>

			<div class="wrapper-content-white">
				<div class="content-white_item">
					<img src="http://placehold.it/78x78" alt="house">
					<span class="white-item_black-text">Жилье</span>
					<p class="white-item_gray-text"> Рекомендуем пожить в настоящем мотеле,все как в кино</p>
				</div>
				<div class="content-white_item">
					<img src="http://placehold.it/78x78" alt="Food">
					<span class="white-item_black-text">Еда</span>
					<p class="white-item_gray-text">Всегда заказывай фирменный бургер, вы не разочаруетесь!</p>
				</div>
				<div class="content-white_item">
					<img src="http://placehold.it/78x78" alt="presents">
					<span class="white-item_black-text">Сувениры</span>
					<p class="white-item_gray-text">Не только китайского но и местного производства!</p>
				</div>
			</div>
			<div class="main-triggers_revers">
				
				<div class="main-triggers_item">
					<h3 class="trigger-maintext">Там есть мост дьявола</h3>
					<span>-№2-</span>
					<p>Да,по нему можно пройти! Если конечно вы осмелитесь</p>
				</div>

				<div class="main-triggerimg">
					<img src="http://placehold.it/800x400" alt="photo-city">
				</div>
			</div>

			<div class="wrapper-content-gray">
				<div class="content-gray_item">
					<h3 class="trigger-maintext">Настоящий городок</h3>
					<span>-№3-</span>
					<p>Седона не атракцион для туристов,<br>там течет своя жизнь</p>
				</div>
				<div class="content-gray_item">
					<h3 class="trigger-maintext">Настоящий городок</h3>
					<span>-№4-</span>
					<p>Седона не атракцион для туристов,<br>там течет своя жизнь</p>
				</div>
				<div class="content-gray_item">
					<h3 class="trigger-maintext">Настоящий городок</h3>
					<span>-№5-</span>
					<p>Седона не атракцион для туристов,<br>там течет своя жизнь</p>
				</div>

				


			</div>
		</section>

		<section class="interested">
			<h2 class="page-title_textcenter">Заинтересовались?</h2>
			<span class="page-tittle_subcenter">Укажите предпологаемые даты поездки и мы покажем вам лучшие предложения гостиниц в седрне</span>
			<button class="blue-button">Найти гостинницу</button>
		</section>

		<section class="s-map">
			<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad839a147f7156edf62e8c29536ce535005c584ee3082994102f5a0c84034f038&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
		</section>

		<footer class="main-footer">

			<div class="main-footer-htag">
				<a href="#">#VISITSEDONA</a>
			</div>

			<div class="main-footer-social">
				<a href="#">TWITTER</a>
				<a href="#">FACEBOOK</a>
				<a href="#">YOUTUBE</a>
			</div>

			<div class="main-footer-copyrights">
				Разработано : 
				<a href="#">HTML Academy</a>
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
