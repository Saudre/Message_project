const message = {
    messages: {
        Science: [{
            quote: 'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
            author: 'Albert Einstein'
        },{
            quote: "If you can't explain it simply, you don't understand it well enough.",
            author: 'Albert Einstein'
        },{
            quote: "The good thing about science is that it's true whether or not you believe in it.",
            author: 'Neil deGrasse Tyson'
        },{
            quote: "Science is not only a disciple of reason but also one of romance and passion.",
            author: "Stephen Hawking"
        },{
            quote: "If you want to have good ideas, you must have many ideas.",
            author: "Linus Pauling"
        }],
        History: [{
            quote: "History is a pack of lies about events that never happened told by people who weren't there.",
            author: "George Santayana"
        },{
            quote: "Our hisory is not our destiny.",
            author: "Alan Cohen"
        },{
            quote: "Anybody can make history. Only a great man can write it.",
            author: "Oscar Wild"
        },{
            quote: "Human history in essence is the history of ideas.",
            author: "H. G. Wells"
        },{
            quote: "History is the present. That's why every generation writes it anew. But what must people think of as history is its end product, myth.",
            author: "E. L. Doctorow"
        }],
        Economy: [{
            quote: "Economy does not consist in saving the coal, but in using the time while it burns.",
            author: "Ralph Waldo Emerson"
        },{
            quote: "It's a recession when your neighbor loses his job; it's a depression when you lose yours.",
            author: "Harry S. Truman"
        },{
            quote: "Marxism is the opium of the Marxists.",
            author: "Joan Robinson"
        },{
            quote: "Policymakers think that if they get the abstractions right, that will drive behavior in the desired direction. But the world happens in real time.",
            author: "Sendhil Mullainathan"
        },{
            quote: "No gain is so certain as that which proceeds for the economical use of what you already have.",
            author: "Latin Proverb"
        }],
        Literature: [{
            quote: "The goal isn’t to live forever, the goal is to create something that will.",
            author: "Chuck Palahniuk"
        },{
            quote: "The only limits for tomorrow are the doubts we have today.",
            author: "Pittacus Lore"
        },{
            quote: "If I got rid of my demons, I’d lose my angels.",
            author: "Tennessee Williams"
        },{
            quote: "Above all, don’t lie to yourself.",
            author: "Fyodor Dostoyevsky"
        },{
            quote: "It is never too late to be wise.",
            author: "Daniel Defoe"
        }]
    },
    areasKnowlege: ['Science', 'History', 'Economy', 'Literature'],
    getMessage () {
        const option = Math.floor(Math.random()*this.areasKnowlege.length);
        const area = this.areasKnowlege[option];
        const randomNumber = Math.floor(Math.random()*this.messages[area].length);
        const messageObject = this.messages[area][randomNumber];
        return console.log(`${area.toUpperCase()}: ${messageObject.author} ones said that '${messageObject.quote}'`);
    } 
}

message.getMessage()