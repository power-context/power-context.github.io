//Variables

const tweetList = document.querySelector('#tweet-list');

//Events
eventListener();

function eventListener(){
    document.querySelector('#form').addEventListener('submit', newTweet);

    //Remove tweet
    tweetList.addEventListener('click', removeTweet);

    //Download
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

//Functions
function newTweet(e){
    e.preventDefault();

    //Read value
    const tweet = document.querySelector('#tweet').value;

    if(tweet.length < 280 && tweet !== ''){
        
    //Create <li>
    const li = document.createElement('li');
    li.textContent = tweet;

    //Create X button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
   
    //Add X button to <li>
    li.appendChild(removeBtn);
     
    //Add tweet to list
    tweetList.appendChild(li);

    //Add tweet to LS
    addTweetLocaleStorage(tweet);

    alert(tweet + '\nTweet added!');

    } else {
        alert('Please enter correct value');
    }
    //Clear input
    this.reset();
}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    } else {
        console.error(0);
    }
    //Remove tweet from LS
    removeTweetLocaleStorage(e.target.parentElement.textContent);
}

    //Add the tweets into the localeStorage
function addTweetLocaleStorage(tweet){
    let tweets = getTweetsFromStorage();

    //Add the tweets into the array
    tweets.push(tweet);

    //Convert array into String
    localStorage.setItem('tweets', JSON.stringify( tweets ));
}

function getTweetsFromStorage(){
    let tweets;
    const tweetLS = localStorage.getItem('tweets');

    if(tweetLS == null){
        tweets = [];
    } else {
        tweets = JSON.parse( tweetLS );
    }
    return tweets;
}

//Prints LS tweets on load

function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();

    //Loop through storage nad then print the value

    tweets.forEach(function(tweet){
         //Create X button
         const removeBtn = document.createElement('a');
         removeBtn.classList = 'remove-tweet';
         removeBtn.textContent = 'X';
        
         //Create <li>
         const li = document.createElement('li');
         li.textContent = tweet;

         //Add X button to <li>
         li.appendChild(removeBtn);
          
         //Add tweet to list
         tweetList.appendChild(li);

    });
}

//Remove tweet from LS
function removeTweetLocaleStorage(tweet){

   //Get tweets from storage
   let tweets = getTweetsFromStorage();

   //Delete X
   const tweetDelete = tweet.substring(0, tweet.length - 1);
   
   //Loop tweets and remove
   tweets.forEach(function(tweetLS, index){
       if(tweetDelete === tweetLS){
           tweets.splice(index, 1);
       }    
   });
   //Save the data
   localStorage.setItem('tweets', JSON.stringify(tweets));
}