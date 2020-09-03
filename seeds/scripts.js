const { 
    addresses, 
    phoneNumbers, 
    firstNames, 
    lastNames, 
    details 
} = require('./seeds')

const Job = require('../models/Job')
const User = require('../models/User')

const seedUsers = (x) => {
    const users = []
    
    for (let i = 0; i < users.length; i += 1) {
        const rand = Math.floor(Math.random() * 1000)
        const rand2 = Math.floor(Math.random() * 1000)
        const rand3 = Math.floor(Math.random() * 1000)
        const newUser = {
            firstName: firstNames[ rand % (firstNames.length)],
            lastName: lastNames[ rand2 % (lastNames.length)],
            email: `${lastNames[ rand2 % (lastNames.length)]}${firstNames[ rand % (firstNames.length)]}@wehaulbetter.com`,
            password: 'password',
            password2: 'password',
            phoneNumber: phonNumbers[rand3 % (phoneNumbers.length)],
            userType: 'user'
        }
        users.push(newUser)
    }

    return users;
}


export const seedJobs = (x) => {
    const users = seedUsers(x);
    const objects = []


    const demoUsers = [{email: 'kodi@wehaul.com', password:'password', firstName: 'Kodi', lastName: 'Codes', userType: 'hauler'},{ email: 'shanelle@wehaul.com', password: 'password', firstName: 'Shanelle', lastName: 'Valencia', phoneNumber: '1234567890', userType: 'user' }]
    const demoUser = new User(demoUsers[0]);
    
    demoUser.save()  .then((user) => {

        })
    const demoHauler = new User(demoUsers[1]);
    demoHauler.save().then((user) => {});
    
    const jobSize = ['Car','Van','Truck']



    for (let i = 0; i < users.length; i += 1) {
        const rand = Math.floor(Math.random() * 1000);
        const rand2 = Math.floor(Math.random() * 1000);
        const rand3 = Math.floor(Math.random() * 1000);
        const rand4 = Math.floor(Math.random() * 3);
        const newUser = new User(users[i])
        
            newUser.save()
                .then((savedUser) => {
                    objects.push(savedUser);
                })

        const startAddress = addresses[rand % addresses.length]
        const endAddress = addresses[rand2 % addresses.length]
        const detail = details[rand3 % details.length]
        const job = {
            user: newUser._id,
            type: jobSize[rand4],
            startAddress: startAddress,
            endAddress: endAddress,
            details: detail,
            status: 0
        }

        const newJob = new Job(job);
        
        newJob.save()
            .then((job) => {
                objects.push(job)
            })
    }

    return objects;
}

