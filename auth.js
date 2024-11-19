const clientId = "37434e9a9708498cb0437cc41811d6d4";
const redirectUri = "https://www.compscihigh.org/";
const scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "app-remote-control",
  "streaming",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "user-follow-modify",
  "user-follow-read",
  "user-library-modify",
  "user-library-read",
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-read-recently-played",
  "user-read-playback-position",
].join("%20");

const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;

console.log("Authorize your app by visiting this URL:", authUrl);

async function getSpotifyToken(authCode) {
  const client_id = "37434e9a9708498cb0437cc41811d6d4";
  const client_secret = "fe11b2a2a53249339e882a077a67deef";
  const redirectUri = "https://www.compscihigh.org/"; // Must match the one in the auth URL

  const authOptions = {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: authCode,
      redirect_uri: redirectUri,
    }),
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authOptions
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${data.error_description}`);
    }

    console.log("Access token:", data.access_token);
    console.log("Refresh token:", data.refresh_token);
    return data;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
} 

getSpotifyToken("");