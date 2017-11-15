<template>
	<div class="form">
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
				<h2 class="title">Оставьте свой отзыв</h2>
				<span class="text">Помогите нашим отелям стать лучше оставьте отзыв о них, а так же о посещенных вами достопримечательностях</span>
			</div>

		</header>

		<section class="forms">

			<div class="forms__info">
				<h2 class="title">Представьтесь, Пожалуйста:</h2>

				<label>
					<p class="text">Имя:</p>
					<input class="input input-text" name="name" type="text" value="Петр" required>
				</label>

				<label>
					<p class="text">Фамилия:</p>
					<input class="input input-text" name="surname" type="text" value="Иванов" required>
				</label>

				<label>
					<p class="text">Отчество:</p>
					<input class="input input-text" name="secondname" type="text" value="Александрович">
				</label>

			</div>

			<div class="forms__contacts">
				<h2 class="title">Контактная информация:</h2>

				<label>
					<p class="text">Контактный телефон:</p>
					<input class="input input-text" name="phone" type="text" value="Введите телефон" required>
					<div class="forms-contacts-img">
						<img src="#" alt="icon_phone">
					</div>
					<p class="contacts__error" style="color: red">Ошибка, проверьте номер</p>
				</label>

				<label>
					<p class="text">Электронная почта:</p>
					<input class="input input-text" name="e-mail" type="text" value="Введите e-mail" required>
					<div class="forms-contacts-img">
						<img src="#" alt="icon_e-mail">
					</div>
				</label>
				

			</div>
			<div class="forms__mood">
				<h2 class="title">Ваше общее впечатление:</h2>

				<label>
					<input class="input input-radio"  type="radio">
				</label>Скорее положительное 

				<label>
					<input class="input input-radio"  type="radio">
				</label>Скорее отрицательное 

				<label>
					<input class="input input-radio"  type="radio">
				</label>Затрудняюсь ответить 
			</div>
			
			<div class="forms__adventures">
				<h2 class="title">Посещенные достопримечательности:</h2>

				<label>
					<input class="input input-checkbox" checked type="checkbox">
				</label>Мост Дьявола 

				<label>
					<input class="input input-checkbox" checked type="checkbox">
				</label>Слайд-парк

				<label>
					<input class="input input-checkbox"  type="checkbox">
				</label>Гора-Колокол

				<label>
					<input class="input input-chekbox" checked type="checkbox">
				</label>Красные скалы
			</div>
				
			<div class="forms__emotions">
				<h2 class="title">Опишите свои эмоции:</h2>
				<textarea rows="5" cols="25" placeholder="Опишите подробно все свои восторги"></textarea>
				<div class="forms-emotions__btn">
					<button class="btn btn-emotions">Отправить отзыв</button>
				</div>
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
