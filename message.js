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
        }],
        Economy: [],
        Literature: []
    },
    areasKnowlege: ['Science', 'History', 'Economy', 'Literature'],
    getMessage () {
        const option = Math.floor(Math.random()*this.areasKnolege.length);
        const area = this.areasKnolege[option];
        const randomNumber = Math.floor(Math.random()*this.messages[area].length);
        const messageObject = this.messages[area][randomNumber];
        return `${area.toUpperCase()}: ${messageObject.author} ones said that '${messageObject.quote}'`
    } 
}

console.log(message.getMessage())