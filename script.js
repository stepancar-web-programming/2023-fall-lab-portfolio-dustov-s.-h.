var toggle=document.getElementById('themeToggle');
let curtheme=localStorage.getItem("theme")


if(curtheme=="dark"){
	setDarkTheme();
}



function setDarkTheme(){
	document.body.className='dark-theme';
	toggle.src="assets/sun.png";
	localStorage.theme="dark";
}

function setLightTheme(){
	document.body.className='light-theme';
	toggle.src="assets/moon.png";
	localStorage.theme="light";
}



toggle.addEventListener('click', function() {
    if (document.body.className === 'dark-theme')setLightTheme();
	else  setDarkTheme();
});

// if (localStorage.theme==="dark")setDarkTheme;
