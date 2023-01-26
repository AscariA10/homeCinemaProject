const qStr = 'Queue';

export class Queue {
    constructor() {
        this.queueArray = [];
        this.length = 0;

    }

    // add new Movie to object 'Queue'
    addMovieToQueue(movie) {
        this.queueArray.splice(0, 0, movie);
        this.updateLocalStorage()

    }

    // delete the movie from 'Queue'
    deleteMovieFromQueue(movie) {
        if(this.queueArray.includes(movie)) {
            this.queueArray.splice(this.queueArray.indexOf(movie), 1);
            this.updateLocalStorage();
        } else console.log('can\'t find the movie to delete');
    }


    // update 'Queue' 
    updateLocalStorage() {
        localStorage.setItem(qStr, JSON.stringify(this.queueArray));
        this.length = this.queueArray.length;
        // console.log('Queue array length: ' + this.length + ' items.');
        // console.log('Queue array : ' + this.queueArray.map(el => el.title).join(', '));
    } 

    
    // get 'Queue' from localStorage
    getItem(){
        if(localStorage.getItem(qStr)) {
            return JSON.parse(localStorage.getItem(qStr));
        }
    }
}
