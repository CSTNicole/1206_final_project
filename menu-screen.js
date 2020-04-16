// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.

// There is security around the JSON file online, and we have no key to access it. Thus, we copied the map into the file
const songs  = {
	  "creep": {
	    "songUrl": "songs/Creep (Lower Key - Piano Karaoke Instrumental) Radiohead.mp3",
	    "title": "Creep",
	    "artist": "Radiohead"
	  },
	  "fly": {
	    "songUrl": "songs/Frank Sinatra - Fly Me To The Moon (Karaoke Piano) Key of G.mp3",
	    "title": "Fly Me to the Moon",
	    "artist": "Frank Sinatra"
	  },
	  "hallelujah": {
	    "songUrl": "songs/Hallelujah (Acoustic Guitar Karaoke) Leonard Cohen.mp3",
	    "title": "Hallelujah",
	    "artist": "Leonard Cohen"
	  },
	  "love": {
	    "songUrl": "songs/Love Yourself (Lower Key - Acoustic Guitar Karaoke) Justin Bieber.mp3",
	    "title": "Love Yourself",
	    "artist": "Justin Bieber"
	  },
	  "delilah": {
	    "songUrl": "songs/Plain White T's - Hey There Delilah (Karaoke Acoustic Guitar) HIGHER KEY.mp3",
	    "title": "Hey There, Delilah",
	    "artist": "Plain White T's"
	  }
	}

class MenuScreen {
  constructor(containerElement) {
  	this.containerElement = containerElement;
  	// TODO(you): Implement the constructor and add fields as necessary.
    
	//console.log(songs.keys().length);
	this.makeSongList();
	this.makeThemes();

	this.goButton = document.getElementById("go");
	// this.goButton.addEventListener('click', function(event) {
	// });

	this.goButton.addEventListener('click', this.onClick)


  }
  // TODO(you): Add methods as necessary.

  makeSongList() {
  	const selectContainer = document.getElementById("song-selector");
  	let songList = fetch('https://github.com/CSTNicole/1206_final_project/tree/master/songs');
		let songTitle = {};

		for (const key in songs) {
			
			for (const innerKey in songs[key]) {

				if (innerKey === 'title') {
				  let option = document.createElement('option');
					let text = document.createTextNode(songs[key][innerKey]);
					option.appendChild(text);
					selectContainer.appendChild(option);
					songTitle[key] = songs[key][innerKey];
				}
			}
		}
  }

  makeThemes () {
  	const themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
  	let container = document.getElementById("query-input");
  	let randNum = Math.floor(Math.random() * themes.length);
  	container.placeholder = themes[randNum];
  }

  onClick (event) {
  	event.preventDefault();
		let container = document.getElementById("query-input");

		let theme = container.value;
		if (theme === ""){
			theme = container.placeholder;
		}

		let selected = document.querySelector("option:checked").childNodes[0].textContent;
		console.log("Theme: " + theme);
		console.log("Choice: " + selected);

		const info = {
			'chosenTheme': theme,
			'choice': selected,
		};
		
		document.dispatchEvent(
	        new CustomEvent('buttonClicked', { detail: info }));
		
		app.menu.hide();
		app.music.show();
  }

  hide() {
  	this.containerElement.classList.add('inactive');
  }

  show () {
  	this.containerElement.classList.remove('inactive');
  }

}

