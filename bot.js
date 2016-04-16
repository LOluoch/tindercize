var bot = require('telegram-bot-bootstrap');
var fs = require('fs');
var lastMessage = new Date().getTime();

var token = "171177333:AAH1KcTa_ysvrqe3uuQrN7oJymhpwqbAIas";
var Alice = new bot(token);

var users = [];
var state = 0;
var chatID = ""

function getMessages()
{
    Alice.getUpdates().then(function(rawData){
        data = JSON.parse(rawData);
        data.result.forEach(function(result,index)
        {
            msg = result.message;
            id = result.from.id;
            chat = result.chat.id;
            firstname = result.from.first_name;
            if(msg.date > lastMessage)
            {
                switch(state)
                {
                    case 0: chatID = chat;
                    case 2: Alice.sendMessage(chat, "Hey " + firstname + "! Welcome to FitBot. Just tell me what kind of workouts & exercises you want to do and I'll match you with someone who has similar interests! So ... what would you like to do now?");
                        state++;
                        break;
                    case 1: 
                    case 3: Alice.sendMessage(chat, "Great! Biking is awesome! I'll see if I know anyone who wants to do just that!");
                        state++;
                        break;
                    case 4: Alice.sendMessage(chatID, "Hey " + firstname + "! I found Lavine who likes biking too! Here's her phone#: " + msg.text);
                }
                if(state === 3)
                    Alice.sendMessage(chat, "Hey " + firstname + "! I found Yomna who likes biking too! What's your phone# so I can connect you?");
            }
        });
        lastMessage = data.result[data.result.length-1].message.date;
    });
}

setInterval(getMessages, 1500);
