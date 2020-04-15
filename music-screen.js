// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    // TODO(you): Implement the constructor and add fields as necessary.

    this.makeSongList();
    this.makeThemes();
    this.goButton = document.getElementById('go');
    this.goButton.addEventListener('click', this.onClick);

  }
  // TODO(you): Add methods as necessary.
  hide() {
  	this.containerElement.classList.add('inactive');
  }

  show () {
  	this.containerElement.classList.remove('inactive');
  	for (const key in songs) {
  		if (songs[key]['title'] === this.song) {
				this.url = songs[key]['songUrl'];
 			}
 		}
 		console.log(this.url);
    this.aud.setSong(this.url);
  }

}
