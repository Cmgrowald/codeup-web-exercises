"use strict";

(() => {



const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 1
const atLeast3 = users.filter(users => users.languages.length >= 3)
    console.log(atLeast3);
// 2
    const userEmails = users.map(users => users.email)
    console.log(userEmails);
// 3
    const yearsExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0)
    const averageExperience = yearsExperience / users.length;
    console.log(averageExperience);
//4
    const longestEmail = users.reduce((longest, user) => {
        return user.email.length > longest.length ? user.email : longest;
    }, '');
    console.log('Longest email:', longestEmail);

//5
const usersString = users.reduce((accumulation, user, index) =>{
    if (index === users.length - 1) {
        return accumulation + user.name;
    } else {
        return accumulation + user.name + ', ';
    }
}, `User's names: `);
console.log(usersString);


})()