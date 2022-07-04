import spotifyAPi from "spotify-web-api-js";
import { token } from "../config.json";
spotifyAPi.setAccessToken(token);
const Spotify = () => {
    return topArtists.map(artist => (
        <div key={topArtists.id}>
            {topArtists.images.length ? <img width={"100%"} src={topArtists.images[0].url} alt=""/> : <div>No Image</div>}
            {topArtists.name}
        </div>
    ))
}


export default Spotify;

