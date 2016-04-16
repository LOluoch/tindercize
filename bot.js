var bot = require('telegram-bot-bootstrap');
var fs = require('fs');
var lastMessage = 1460810624;

var token = "171177333:AAH1KcTa_ysvrqe3uuQrN7oJymhpwqbAIas";
var Alice = new bot(token);

var users = [];

function getMessages() {
    Alice.getUpdates().then(function(rawData){
        data = JSON.parse(rawData);
        data.result.forEach(function(result,index){
            msg = result.message;
            id = results.from.id;
            chat = result.chat.id;
            if(msg.date > lastMessage){
                if(msg.text == "/start")
                {
                    users.push(id: {"phone": "0", "state": 0});
                    Alice.sendMessage(chat, "Welcome to FitBot. Just tell me what kind of workout/exercises you want to do and I'll match you with someone who has similar interests!");
                }
            }
        });
        lastMessage = data.result[data.result.length-1].message.date;
    });
}

setInterval(getMessages, 1500);