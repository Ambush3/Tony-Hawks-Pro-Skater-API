const express = require('express');
const app = express();
const path = require('path');
const port = 8000

// middleware
app.use(express.json());


const skaters = {
    'tony hawk': {
        'footing': 'Goofy',
        'board': 'Birdhouse',
        'shoe': 'Vans',
        'style': 'Vert',
        'air': 7,
        'hang time': 5,
        'ollie': 2,
        'speed': 6,
        'spin': 8,
        'landing': 5,
        'switch': 2,
        'rail balance': 2,
        'lip balance': 6,
        'manuals': 7
    },

    'bob burnquist': {
        'footing': 'Regular',
        'board': 'Flip',
        'shoe': 'Es',
        'style': 'Vert',
        'air': 6,
        'hang time': 5,
        'ollie': 5,
        'speed': 6,
        'spin': 5,
        'landing': 3,
        'switch': 8,
        'rail balance': 2,
        'lip balance': 7,
        'manuals': 4
    },

    'steve caballero': {
        'footing': 'Goofy',
        'board': 'Powell Peralta',
        'shoe': 'Vans',
        'style': 'All Around',
        'air': 6,
        'hang time': 5,
        'ollie': 5,
        'speed': 6,
        'spin': 3,
        'landing': 5,
        'switch': 5,
        'rail balance': 6,
        'lip balance': 5,
        'manuals': 4
    },

    'kareem campbell': {
        'footing': 'Regular',
        'board': 'City Stars',
        'shoe': 'Axion Footwear',
        'style': 'Street',
        'air': 7,
        'hang time': 2,
        'ollie': 6,
        'speed': 5,
        'spin': 8,
        'landing': 4,
        'switch': 5,
        'rail balance': 6,
        'lip balance': 2,
        'manuals': 5
    },

    'rune glifberg': {
        'footing': 'Regular',
        'board': 'Flip',
        'shoe': 'Etnies',
        'style': 'Vert',
        'air': 7,
        'hang time': 7,
        'ollie': 5,
        'speed': 6,
        'spin': 5,
        'landing': 3,
        'switch': 4,
        'rail balance': 4,
        'lip balance': 6,
        'manuals': 3
    },

    'eric koston': {
        'footing': 'Goofy',
        'board': 'Girl',
        'shoe': 'Es',
        'style': 'Street',
        'air': 4,
        'hang time': 3,
        'ollie': 7,
        'speed': 5,
        'spin': 4,
        'landing': 4,
        'switch': 7,
        'rail balance': 7,
        'lip balance': 3,
        'manuals': 4
    },

    'bucky lasek': {
        'footing': 'Regular',
        'board': 'Powell Peralta',
        'shoe': 'Vans',
        'style': 'Vert',
        'air': 7,
        'hang time': 7,
        'ollie': 3,
        'speed': 6,
        'spin': 7,
        'landing': 3,
        'switch': 5,
        'rail balance': 3,
        'lip balance': 7,
        'manuals': 2
    },

    'rodney mullen': {
        'footing': 'Regular',
        'board': 'Almost',
        'shoe': 'Globe',
        'style': 'Street',
        'air': 2,
        'hang time': 2,
        'ollie': 6,
        'speed': 5,
        'spin': 8,
        'landing': 2,
        'switch': 8,
        'rail balance': 7,
        'lip balance': 2,
        'manuals': 8
    },

    'chad muska': {
        'footing': 'regular',
        'board': 'Shorty"s',
        'shoe': 'Circa',
        'style': 'Street',
        'air': 4,
        'hang time': 3,
        'ollie': 8,
        'speed': 6,
        'spin': 4,
        'landing': 7,
        'switch': 5,
        'rail balance': 8,
        'lip balance': 3,
        'manuals': 2
    },

    'andrew reynolds': {
        'footing': 'Regular',
        'board': 'Baker',
        'shoe': 'Emerica',
        'style': 'Street',
        'air': 4,
        'hang time': 2,
        'ollie': 8,
        'speed': 4,
        'spin': 5,
        'landing': 7,
        'switch': 5,
        'rail balance': 8,
        'lip balance': 4,
        'manuals': 3
    },

    'geoff rowley': {
        'footing': 'Regular',
        'board': 'Flip',
        'shoe': 'Vans',
        'style': 'Street',
        'air': 6,
        'hang time': 2,
        'ollie': 6,
        'speed': 4,
        'spin': 5,
        'landing': 5,
        'switch': 4,
        'rail balance': 8,
        'lip balance': 7,
        'manuals': 3
    },

    'elissa steamer': {
        'footing': 'Regular',
        'board': 'Toy Machine',
        'shoe': 'Vans',
        'style': 'Street',
        'air': 6,
        'hang time': 4,
        'ollie': 5,
        'speed': 5,
        'spin': 5,
        'landing': 4,
        'switch': 5,
        'rail balance': 6,
        'lip balance': 5,
        'manuals': 5
    },

    'jamie thomas': {
        'footing': 'Regular',
        'board': 'Zero',
        'shoe': 'Circa',
        'style': 'Street',
        'air': 4,
        'hang time': 3,
        'ollie': 7,
        'speed': 6,
        'spin': 4,
        'landing': 8,
        'switch': 4,
        'rail balance': 7,
        'lip balance': 4,
        'manuals': 3
    }
}


app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})


app.get('/api/:skaters', (req, res) => {
    const skatersName = req.params.skaters;
    if (skaters[skatersName]) {
        res.json(skaters[skatersName])
    } else {
        res.json(skaters['Skater doesn\'t exist'])
    }
})

// app.get('/api/:skaters', (req, res) => {
app.post('/api/skaters', (req, res) => {
    const newSkater = {
        'name': req.body.name,
        'footing': req.body.footing,
        'board': req.body.board,
        'shoe': req.body.shoe,
        'style': req.body.style,
        'air': req.body.air,
        'hang time': req.body.hangTime,
        'ollie': req.body.ollie,
        'speed': req.body.speed,
        'spin': req.body.spin,
        'landing': req.body.landing,
        'switch': req.body.switch,
        'rail balance': req.body.railBalance,
        'lip balance': req.body.lipBalance,
        'manuals': req.body.manuals
    }
    // create new skater
    // add new skater to skaters object
    skaters[newSkater.name] = newSkater;
    res.send(skaters[newSkater.name])
    res.send(skaters[newSkater.footing])
    res.send(skaters[newSkater.board])
    res.send(skaters[newSkater.shoe])
    res.send(skaters[newSkater.style])
    res.send(skaters[newSkater.air])
    res.send(skaters[newSkater.hangTime])
    res.send(skaters[newSkater.ollie])
    res.send(skaters[newSkater.speed])
    res.send(skaters[newSkater.spin])
    res.send(skaters[newSkater.landing])
    res.send(skaters[newSkater.switch])
    res.send(skaters[newSkater.railBalance])
    res.send(skaters[newSkater.lipBalance])
    res.send(skaters[newSkater.manuals])
})

const { application } = require('express');
// app.get('/api/:name', (req, res) => {
//     const skaterName = request.params.name.toLowerCase()
//     if (skaters[skaterName]) {
//         res.json(skaters[skaterName])
//     } else {
//         res.json(skaters['unknown'])
//     }
// })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})  
