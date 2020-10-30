/* Screens */
const SplashScreen = document.querySelector('.splash-screen');
const MainScreen = document.querySelector('.main-screen');
const LoginOptionsScreen = document.querySelector('.login-options-screen');
const LoginMobileScreen = document.querySelector('.login-mobile-screen');

/* Buttons */
const MobileOptionClicked = document.querySelector('#mobile-option-clicked');
const GetStartedClicked = document.querySelector('#getStarted');


/* List of Components */
const List = {
	'':SplashScreen,
	'#main-screen':MainScreen,
	'#login-options-screen':LoginOptionsScreen,
	'#login-mobile-screen':LoginMobileScreen
}


//Which Component to Show?
function ShowComponent(RecievedHash){
	let redirect = '';
	Object.keys(List).forEach(hash => {
		if(RecievedHash === hash){
			redirect = hash
			if(List[hash].classList.contains('hide')){
				List[hash].classList.remove('hide')
			}
		}else{
			List[hash].classList.add('hide'); 
		}
	})
	window.location.hash = RecievedHash;
}

//When DOMContentLoaded
window.addEventListener('DOMContentLoaded',(e) => {
	setTimeout(() => {
		ShowComponent('#main-screen');
	},2000);
}) 

//Event Listener for hash change
window.addEventListener('hashchange',() => {
	ShowComponent(window.location.hash);
})

//Click event on Mobile option
MobileOptionClicked.addEventListener('click',() => {
	ShowComponent('#login-mobile-screen');
})

//Click event on Get Started Option
GetStartedClicked.addEventListener('click',() => {
	ShowComponent('#login-options-screen');
})