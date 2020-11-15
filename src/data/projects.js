import namegen from '../assets/images/namegen.png';
import calculator from '../assets/images/calculator.png';
import comingsoon from '../assets/images/comingsoon.png';
import glozzom from '../assets/images/glozzom.png';
import morsecode from '../assets/images/morsecode.png';
import tictactoe from '../assets/images/tictactoe.png';
import brewdog from '../assets/images/brewdog.png';
import portfolio from '../assets/images/portfolio.png';
import No1southeast from '../assets/images/no1-south-east.png';
import todoList from '../assets/images/Todo List.png'

const projects = [
    {
        id: 1,
        name: 'Punk Api',
        cardText: 'This project was created in react and utalise the Punk Beers API, added in a searchbox and uses google sign in Authentication.',
        image: brewdog,
        GitUrl: 'https://github.com/olirob93/Brewdog-Api',
        liveSiteUrl: 'https://brewdog-beers-api.web.app/'
    },

    {
        id: 2,
        name: 'No1-South-East',
        cardText: '4 week client project, the brief was to create a web app that allows users to sign up for exclusive offers for local restaurants.',
        image: No1southeast,
        GitUrl: 'https://github.com/nology-tech/no1-south-east',
        liveSiteUrl: 'https://www.no1southeast.co.uk/'
    },

    {
        id: 3,
        name: 'Vanilla Javascript Tic Tac Toe',
        cardText: 'Using vanilla Javascript created a game of tic tac toe using images to represent the players!',
        image: tictactoe,
        GitUrl: 'https://github.com/olirob93/Tic-Tac-Toe',
        liveSiteUrl: 'https://olirob93.github.io/Tic-Tac-Toe/'
    },

    {
        id: 4,
        name: 'Portfolio Website',
        cardText: 'With the new skills learnt on the course I re-built this portfolio website in React and hosted with firebase.',
        image: portfolio,
        GitUrl: 'https://github.com/olirob93/React-Portfolio',
        liveSiteUrl: ''
    },

    {
        id: 5,
        name: 'Javascript name generator',
        cardText: 'Fun name generator that uses Javascript switch statements to take the first letter of first name and surname and assign and set a name.',
        image: namegen,
        GitUrl: 'https://github.com/olirob93/LOTR-Random-Name-Generator',
        liveSiteUrl: 'https://olirob93.github.io/LOTR-Random-Name-Generator/'
    },

    {
        id: 6,
        name: 'Bootstrap Theme',
        cardText: 'Using HTML5, CSS3, Bootstrap 4, Jquery to create a responsive website template for a software as a service business. In this project I used Jquery Eko light box and Bootstrap carousel features.',
        image: glozzom,
        GitUrl: 'https://github.com/olirob93/Glozzom-Website',
        liveSiteUrl: 'https://olirob93.github.io/Glozzom-Website/'
    },

    {
        id: 7,
        name: 'Vanilla Javascript Calculator',
        cardText: 'Vanilla Javascript project, interacting with the DOM and using array iterators and call back functions',
        image: calculator,
        GitUrl: 'https://github.com/olirob93/Vanilla-Javascript-Calculator',
        liveSiteUrl: 'https://olirob93.github.io/Vanilla-Javascript-Calculator/'
    },
    
    {
        id: 8,
        name: 'Vanilla Javascript Morse Code Converter',
        cardText: '3 Hour coding challenge to produce a Morse Code Coverter',
        image: morsecode,
        GitUrl: 'https://github.com/olirob93/Morse-Code-Converter',
        liveSiteUrl: 'https://olirob93.github.io/Morse-Code-Converter/'
    },

    {
        id: 9,
        name: 'Todo List',
        cardText: 'Todo list in React using class based components. Api integration for random user.',
        image: todoList,
        GitUrl: 'https://github.com/olirob93/TodoList',
        liveSiteUrl: 'https://todolist-3de59.web.app/'
    },


    {
        id: 10,
        name: 'Coming Soon',
        cardText: 'Keep an eye out for my next project! Which is likely to be our client project',
        image: comingsoon,
        GitUrl: '#',
        liveSiteUrl: '#'
    }
];


export default projects