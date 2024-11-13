async function fetchPlaylistRecommendations (songs) {
    const response = await fetch("https://api.music.apple.com/v1/me/recommendations" + songs)
}

async function addToPlaylist (add) {
    const response = await fetch("https://api.music.apple.com/v1/me/library/playlists/{id}/tracks" + add)
}

async function (main){
    console.log("Hello")
    const isRunning = true


while (isRunning){
    console.log("What is your favorite genre?")
    console.log("1: Pop")
    console.log("2: Rock")
    console.log("3: Jazz")
    console.log("4: Classical")
    console.log("5: Hip-Hop")
    console.log("6: Phonk")
    console.log("7: Electronic")
    console.log("8: R&B")
    console.log("9: Reggae")
    console.log("10: Latin")
const choice = prompt('Enter the numer of your choice: ')
}

if (choice === '1'){
const 
}
}