const prompt = require ('prompt-sync')()


const apiKey1 = "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"

const apiKey2 = "BQCGxLjllcjk7ylFr7v8X27NtXZ0nUaU7Yp8QuUWqcIzxRrYdMPYSDTPDudcpGyNm_xoFsRbo_B3DtZqTShkRJSLLH5Ij0LWNkaGdPdUMzyOp7MkJH6pNfTBcJSQRgcELiZJvHVi_UDQvQDz1eKYKc2hGIlf1m54DhDnrNMI1RuQIl6wZFGuiIyBkUNYpEHYWjZdEs4oj7E9H3Tr3SzN17IzHjXaQP_0DzDMlxSqdLm2C0OW65lZEXHbRYQAsCEOc01FsJNjLyUb93hiksQkeTuYITkEzQIMnK99zVjXId8bZFRyinOqW9gLUDWOgWchTO-p3yofpB6S-5mkIrIq4N5c7opS"

const requestUrlBase ="https://api.spotify.com/v1/search"

async function fetchMusicData(query) {

const requestUrl = `${requestUrlBase}?q=${query}&type=track&limit=10`
console.log("Request URL: ", requestUrl)
try {
    const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey1}`,
            'Content-Type': 'application/json'
        }
    }

    )

    if (!response.ok) {
        throw new Error('Error fetching data')
    }

    const data = await response.json()
    console.log("Music Data:", data)
//go through the list of tracks returned 
    for (let i = 0; i< data.tracks.items.length; i++){
        const track = data.tracks.items[i]
        const artist = track.artists[0].name
        console.log(`${i + 1}. ${track.name} by ${artist}`)
    }

    return data.tracks.items

} catch (error) {
    console.log("Error:", error.message)
}
  
    
 
}
fetchMusicData()

async function main (){

const query = prompt ("Enter a genre, artist or mood (e.g. 'Pop', 'Chill'): ")
await fetchMusicData(query)

if(!query){
    console.log("Please enter a valid option:")
    return
}
const tracks = await fetchMusicData(query)

if (tracks && tracks.length > 0) {
    const userChoice = prompt("Do you want to add these tracks to a playlist? (yes or no)")

    if(userChoice === "yes"){
        await submitData(tracks)
    } else {
        console.log("not added to playlist")
    }
}
}



async function submitData(tracks){
    try {
    const response = await fetch(postRequestUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey1}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
 }
)
if (!response.ok) {
    throw new Error('Error submitting data')
}

const responseData = await response.json()
console.log("Tracks added to playlist", responseData)



    } catch (error) {
        console.log("error: ", error.message)
    }
}
main()