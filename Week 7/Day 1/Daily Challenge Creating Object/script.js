class Video {
    constructor(title, uploader, time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

watch() {
    const watching = `${this.uploader} watched all ${this.time} seconds of ${this.title}`
    return watching
}
}
// const movie = new Video('Harry Potter', 'Alekksander', 3600)
// console.log(movie.watch())
// const movie2 = new Video('LOTR', 'Aragorn', 2500)
// console.log(movie2.watch())

const moviePlaylist = [
    {
        uploader: 'Alexander',
        time: 2600,
        title: 'The goodfellas'
},
{
    uploader: 'Jordan',
    time: 4600,
    title: 'Harry potter'
},
{
    uploader: 'Gary',
    time: 3500,
    title: 'Game of Throne'
},
{
    uploader: 'Aliza',
    time: 2100,
    title: 'Vikings'
},
{
    uploader: 'George',
    time: 3800,
    title: 'Reacher'
}
]


const movies = moviePlaylist.map(({title, uploader, time}) => new Video(title, time, uploader))

console.log(movies)