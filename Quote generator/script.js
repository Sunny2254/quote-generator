let quote = document.getElementById('quotes')
	let author = document.getElementById('author')
	let soundBtn = document.querySelector('fa-volume-high')
	let url ="https://api.quotable.io/random";
	let btn = document.querySelector('button')



	async function quotes(api){
			let data = await fetch(api);
			let realdata = await data.json();
			quote.innerHTML = realdata.content; 
			author.innerHTML = realdata.author; 
		
	}
	
	function tweet(){
		window.open("href=https://twitter.com/intent/tweet?text="+quote.innerHTML +"-------by"+author.innerHTML,"Tweet Window", "width =600 , height = 300");
	}

	

	function sound(){

		let utternace = new SpeechSynthesisUtterance(`${quote.innerHTML} , author name is  ${author.innerHTML}`);
		speechSynthesis.speak(utternace);

	}
	
	function copy(){
		navigator.clipboard.writeText(quote.innerHTML)
	}

	quotes(url);