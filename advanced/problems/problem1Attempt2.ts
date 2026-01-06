let images = [
    {
        title: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        date: 1503
    },
    {
        title: 'The Last Supper',
        artist: 'Leonardo da Vinci',
        date: 1495
    },
    {
        title: 'The Starry Night',
        artist: 'Vincent van Gogh',
        date: 1889
    },
    {
        title: 'The Scream',
        artist: 'Edvard Munch',
        date: 1893
    },
    {
        title: 'Guernica',
        artist: 'Pablo Picasso',
        date: 1937
    },
    {
        title: 'The Kiss',
        artist: 'Gustav Klimt',
        date: 1907
    },
    {
        title: 'Girl With a Pearl Earring',
        artist: 'Johannes Vermeer',
        date: 1665
    }, 
    {
        title: 'The Birth of Venus',
        artist: 'Sandro Botticelli',
        date: 1485
    }, 
    {
        title: 'Las Meninas',
        artist: 'Diego Velázquez',
        date: 1666
    },
    {
        title: 'Creation of Adam',
        artist: 'Michelangelo',
        date: 1512
    },
]

function factory(title:String, artist:String, date:Number){
    return {title:title, artist:artist, date:date}
}

let empty = []
empty.push(factory("The Garden of Eathly Delights", "Hieronymus Bosch", 1503))
console.log(empty)