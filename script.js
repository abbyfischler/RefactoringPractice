var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendNewUser);


function appendNewUser(e) {
	e.preventDefault()
  var name = $('.name').val();
  var email = $('.email').val();
  var city = $('.city').val();

  cardContainer.append(`
    <div class="contact-card">
      <p><strong>Name:</strong> ${name}</p> 
      <p><strong>Email:</strong> ${email}</p>  
      <p><strong>City:</strong> ${city}</p> 
    </div>
  `);

	$('.name').val('')
	$('.email').val('')
	$('.city').val('')

}