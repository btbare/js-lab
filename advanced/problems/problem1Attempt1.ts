//d'art//
class Museum{
    private title: String;
    private date: Number;
    private artist: String;

    constructor(title:String, artist:String, date:Number) {
        this.title = title;
        this.date = date;
        this.artist = artist;
    }

}

let entries = [
    //objet d'art ( ͡° ͜ʖ ͡°) //
   new Museum("Mona Lisa", "Leonardo da Vinci", 1503),
   new Museum("The Starry Night", "Vincent van Gogh", 1889),
   new Museum("The Scream", "Edvard Munch", 1893),
   new Museum("Guernica", "Pablo Picasso", 1937),
   new Museum("Girl With a Pearl Earring", "Johannes Vermeer", 1665),
   new Museum("The Birth of Venus", "Sandro Botticelli", 1485),
   new Museum("Las Meninas", "Diego Velázquez", 1656),
   new Museum("Creation of Adam", "Michelangelo", 1512),
]