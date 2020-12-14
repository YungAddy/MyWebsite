console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}
// if (condition) 
//  block of code to be executed if the condition is true
// else: block of code to be executed if the condition is false
// "if not this then that"

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'crimson'){
		document.getElementById('theme-style').href = 'crimson.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'darkmode.css'
	}

	localStorage.setItem('theme', mode)
}