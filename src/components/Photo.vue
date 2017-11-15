<template>
	<div class="photo">
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
				<h2 class="title">Фото и видео</h2>
				<span class="text">Не можете решиться на путешествие из-за курса? Фотографии помогут вам забыть о политике и экономике.</span>
			</div>

		</header>

		<section class="gallery">

			<div class="gallery-item">

				<div class="gallery__img">
					<img src="http://placehold.it/280x280" alt="img">
				</div>

				<div class="gallery__content">
					<h3 class="gallery-title">Неродные просторы</h3>
					<p class="gallery-author">Автор: Борис</p>
				</div>

				<div class="gallery__count">
					<span class="gallery-icon">icon</span>
					<p class="gallery-likes">1350</p>
					
				</div>

				
			</div>

			<div class="gallery-item">

				<div class="gallery__img">
					<img src="http://placehold.it/280x280" alt="img">
				</div>

				<div class="gallery__content">
					<h3 class="gallery-title">Местная растительность</h3>
					<p class="gallery-author">Автор: Сергей</p>
				</div>

				<div class="gallery__count">
					<span class="gallery-icon">icon</span>
					<p class="gallery-likes">143</p>
					
				</div>

				
			</div>

			<div class="gallery-item">
				<div class="gallery__img">
					<img src="http://placehold.it/280x280" alt="img">
				</div>

				<div class="gallery__content">
					<h3 class="gallery-title">Дорога на север</h3>
					<p class="gallery-author">Автор: Петр</p>
				</div>

				<div class="gallery__count">
					<span class="gallery-icon">icon</span>
					<p class="gallery-likes">96</p>
					
				</div>

				
			</div>

			<div class="gallery-item">

				<div class="gallery__img">
					<img src="http://placehold.it/280x280" alt="img">
				</div>

				<div class="gallery__content">
					<h3 class="gallery-title">Мост дьявола</h3>
					<p class="gallery-author">Автор: Антон</p>
				</div>

				<div class="gallery__count">
					<span class="gallery-icon">icon</span>
					<p class="gallery-likes">254</p>
				</div>

				
			</div>



		</section>
		<section class="presentation">
			<div class="preseation-wrapper">
				<h2 class="title">Все еще сомневаетесь?</h2>
				<span class="text">Смотрите видеопрезентаци и скорее за билетами, пока они не подорожали в очередной раз!</span>
			</div>
			<div class="presentation-media">
				<video controls class="presentation__video">
					<source src="">
				</video>
				
			</div>
		</section>




		<footer class="footer">

			<div class="footer__htag">
				<a href="#" class="footer__link">#VISITSEDONA</a>
			</div>

			<div class="social">
				<a href="#" class="social__link social__link_tw" >TWITTER</a>
				<a href="#" class="social__link" >FACEBOOK</a>
				<a href="#" class="social__link" >YOUTUBE</a>
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
