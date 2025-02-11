# liri-node-app 
## LIRI Bot - is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## This App uses: 
* Spotify Api
* Bands in Town API
* OMDB

### What each command does:

#### Concert-this
![Alt Text](/images/concert-this.gif)

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")


#### Spotify-this-song 
![Alt Text](/images/spotify-this.gif)

This will show the following information about the song in your terminal/bash window

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from*

If no song is provided then your program will default to "The Sign" by Ace of Base.


#### Movie-this
![Alt Text](/images/movie-this.gif)

This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

* If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
* It's on Netflix!


#### Do-what-it-says
![Alt Text](/images/do-what-it-says.gif)

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

* It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
* Edit the text in random.txt to test out the feature for movie-this and concert-this.*
