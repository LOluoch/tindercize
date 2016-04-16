var bot = require('telegram-bot-bootstrap');
var fs = require('fs');
var lastMessage = new Date().getTime()/1000;
var token = "171177333:AAH1KcTa_ysvrqe3uuQrN7oJymhpwqbAIas";
var Alice = new bot(token);
var users = [];
var state = 0;
var chatID = ""
console.log(lastMessage);
function getMessages()
{
    Alice.getUpdates().then(function(rawData){
        data = JSON.parse(rawData);
        data.result.forEach(function(res,index)
        {
            msg = res.message;
            if(isNew(msg))
            {
                handleMessage(msg);
            }
//                switch(state)
//                {
//                    case 0: chatID = chat;
//                    case 2: 
//                        console.log(msg.text);
//                        Alice.sendMessage(chat, "Hey " + firstname + "! Welcome to FitBot. Just tell me what kind of workouts & exercises you want to do and I'll match you with someone who has similar interests! So ... what would you like to do now?");
//                        break;
//                    case 1: 
//                    case 3: Alice.sendMessage(chat, "Great! Biking is awesome! I'll see if I know anyone who wants to do just that!");
//                        break;
//                    case 4: Alice.sendMessage(chatID, "Hey " + firstname + "! I found Lavine who likes biking too! Here's her phone#: " + msg.text);
//                        break;
//                }
//                if(state === 3)
//                    Alice.sendMessage(chat, "Hey " + firstname + "! I found Yomna who likes biking too! What's your phone# so I can connect you?");
//                state++;
        });
        lastMessage = data.res[data.res.length-1].message.date;
    });
}

setInterval(getMessages, 1500);
