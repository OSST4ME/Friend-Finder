var currentFriends = [
  {
	"name": "Ahmed",
	"photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	"scores": [
       2,
       2,
       3,
       1,
       3,
       1,
       2,
       3,
       2,
       3
      ]
  },
    
];

function scores (){
    var scoreSum = 0;
        sumList = [];    
    for (i = 0; i < currentFriends.length; i++) {
        currentFriends[i].scores;
        for (j=0; j < currentFriends[i].scores.length; j++) {
            scoreSum += currentFriends[i].scores[j];
        }
        sumList.push(scoreSum);
        scoreSum = 0;
    }
};

function friendsList (newFriend) {
    if (newFriend) {
    currentFriends.push(newFriend);
    }
    return currentFriends;
}

module.exports.friendsList = friendsList