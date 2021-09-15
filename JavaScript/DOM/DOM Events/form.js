const tweetEntry =  document.querySelector("#tweetentry");
const tweets = document.querySelector('#tweets');
tweetEntry.addEventListener("submit",function (e){
    e.preventDefault(); 

    const usernameInput = tweetEntry.elements.username;
    const tweetInput =  tweetEntry.elements.Tweet;
    addTweet(usernameInput.value,tweetInput.value)
    usernameInput.value='';
    tweetInput.value='';
});

const addTweet = (username,tweet) =>{
    const newTweet = document.createElement("li");
    const bold = document.createElement("b");
    bold.append(username);
    newTweet.append(bold);
    newTweet.append(` - ${tweet}`);
    tweets.append(newTweet);
}