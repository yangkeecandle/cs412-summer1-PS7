const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


const redis = require('redis');
const client = redis.createClient();

require('dotenv').config()
/* GET home page. */

router.route('/')
    .get((req, res, next) => {
        res.render('index',{
            city: null,
            temp: null
        });


    })
    .post(async(req, res, next) => {
        console.log(req.body);
        const city = req.body.city;
        const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

        const response = await fetch(url_api)
        const data = await response.json();
        const temp = data.main.temp;
        if (data.message === 'city not found') {
            const temp = 0;
        }
        try {

            client.exists(city, (err, response) => {
                if(err) {throw new Error(err)}
                if(response == 1) {
                    client.get(city, (err, response) => {
                        //res.send(`<h2>${city} has temperature of ${response} </h2>`)
                        res.send(JSON.stringify(response + ' cached'))
                    })
                }
                else {
                    console.log('Fetching Data...')

                    client.setex(city, 30, temp);
                    //const temp = data.main.temp;
                    res.send(JSON.stringify(temp + ' not cached'))

                }
            })



        } catch (err){
            res.render('index', {
                city: 'something wrong',
                temp: null
            })
        }
        /*
        try {
            await fetch(url_api)
                .then(res => res.json())
                //client.setex(city, 30, data.name)
                .then(data => {
                    if (data.message === 'city not found') {
                        res.render('index', {
                            city: data.message,
                            //des: null,
                            // icon: null,
                            temp: null
                        })
                    } else {
                        const city = data.name;
                        //const des = data.weather[0].description;
                        //const icon = data.weather[0].icon;
                        const temp = data.main.temp;

                        res.render('index', {
                            city, temp
                        });
                    }
                });

        } catch (err) {
            res.render('index', {
                city: 'something wrong',
                temp: null
            })
        }
        */
    })


module.exports = router;