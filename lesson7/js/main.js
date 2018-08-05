window.onload = function() {

	var phone = document.querySelectorAll('.phone');

	for ( var i = 0; i < phone.length; i++ ) {

		var btn = phone[i].querySelector('button');
		// var btn = phone[i].lastElementChild;

		btn.onclick = function() {

			var contain = this.classList.contains('btn_active');
			var img   = this.parentNode.querySelector('.img');
			// var img   = this.parentNode.firstElementChild;
			var price = this.parentNode.querySelector('.phone__price');
			var title = 'товар в пути';

			if ( contain == true ) {
				img.classList.add('img_unactive');
				this.innerText = 'товар в корзине';
				this.classList.add('btn_inBasket');
				price.innerText = '---';
				price.classList.add('phone__price_unactive');
			} else {
				alert(title);
			};
		};
	};
};



	// var phone = document.querySelectorAll('.phone');



	// for ( var i = 0; i < phone.length; i++ ) {

	// 	var btn = phone[i].lastElementChild;

	// 	// var btn = phone[i].getElementsByClassName('btn_active');


	// 	btn.onclick = function() {

	// 		var img = this.parentNode.firstElementChild;

	// 		var price = this.parentNode.querySelector('.phone__price');

	// 		img.classList.add('img_unactive');
	// 		this.innerText = 'товар в корзине';
	// 		this.classList.add('btn_unactive');
	// 		price.innerText = '---';
	// 		price.classList.add('phone__price_unactive');



	// 		console.log(price);
		
	// 	};

	// };




//it works


	// var phone = document.querySelectorAll('.phone');



	// for ( var i = 0; i < phone.length; i++ ) {



	// 	var btn = phone[i].lastElementChild;


	// 	btn.onclick = function() {

	// 		var img = this.parentNode.firstElementChild

	// 		img.classList.add('img_unactive');
	// 		this.innerText = 'товар в корзине';
	// 		this.classList.add('btn_unactive');


	// 		// console.log(img);
		
	// 	};

	// 	// console.log(btn);
	// 	// console.log(elem);

	// };