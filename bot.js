var bot = require('telegram-bot-bootstrap');
var fs = require('fs');
var lastMessage = 1460810624;

var token = "171177333:AAH1KcTa_ysvrqe3uuQrN7oJymhpwqbAIas";
var Alice = new bot(token);

function getMessages() {
    Alice.getUpdates().then(function(rawData){
        data = JSON.parse(rawData);
        data.result.forEach(function(result,index){
            if(result.message.date > lastMessage){
                if(result.message.text == "/start")
                {
                    Alice.sendMessage(result.message.chat.id, "You have started.");
                    console.log("You have started... sent to " + result.message.chat.first_name + " " + result.message.chat.last_name);
                }
                else{
                    Alice.sendMessage(result.message.chat.id, "I don't know how to respond to that.");
                    console.log("I dont know... sent to " + result.message.chat.first_name + " " + result.message.chat.last_name);
                }
            }
        });
        lastMessage = data.result[data.result.length-1].message.date;
    });
}

setInterval(getMessages, 1500);