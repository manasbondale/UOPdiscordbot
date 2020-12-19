const seedrandom = require('seedrandom')
const fs = require('fs')
const easyproblems = require('.././data/scraping-easy-leetcode.json')
const medproblems = require('.././data/scraping-medium-leetcode.json')


function lineCount( text ) {
    var nLines = 0;
    for( var i = 0, n = text.length;  i < n;  ++i ) {
        if( text[i] === '\n' ) {
            ++nLines;
        }
    }
    return nLines;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '0x';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  


const problems_num = easyproblems.length
const problems_array = easyproblems


const problems_medium_num = medproblems.length
const problems_medium_array = medproblems

console.log(medproblems[1])

module.exports = {
	name: 'leetcode',
	description: 'Three random problems for the date',
	execute(message, args) {
        var d = new Date()
        var rng = seedrandom(d.getDate()+d.getMonth()+d.getFullYear())

        //message.channel.send(easyproblems[Math.floor(rng()*easyproblems.length)]['link'])
        //message.channel.send(medproblems[Math.floor(rng()*medproblems.length)]['link'])
    
     

        const Embed = {
            color: getRandomColor(),
            title: 'Daily practice set',
            url: 'http://www.leetcode.com',
            
            description: 'Solve these problems ' + d.getMonth()+'/'+ d.getDate()+'/'+d.getFullYear(),
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
            },
            fields: [
                {
                    name: 'Problem 1 - Easy',
                    value: 'http://'+easyproblems[Math.floor(rng()*easyproblems.length)]['link'] ,
                    text: easyproblems[Math.floor(rng()*easyproblems.length)]['name']
                },
                {
                    name: 'Problem 2 - Easy',
                    value: 'http://'+easyproblems[Math.floor(rng()*easyproblems.length)]['link'] ,
                    text: easyproblems[Math.floor(rng()*easyproblems.length)]['name']
                },
                {
                    name: 'Problem 3 - Easy',
                    value: 'http://'+easyproblems[Math.floor(rng()*easyproblems.length)]['link'] ,
                    text: easyproblems[Math.floor(rng()*easyproblems.length)]['name']
                },
                {
                    name: 'Problem 4 - Medium',
                    value: 'http://'+medproblems[Math.floor(rng()*medproblems.length)]['link'] ,
                    text: medproblems[Math.floor(rng()*medproblems.length)]['name']
                }
            ],
            timestamp: new Date(),
            footer: {
                text: 'Happy coding! Created by Manas Bondale @Kuelf'
                
            },
        };
        
        message.channel.send({ embed: Embed });
        
	},
};