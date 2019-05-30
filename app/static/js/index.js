function login() {
    var client_id = "4ecbe805fa464b37b1616785ace071d6";
    var redirect_uri = "http://localhost:8000/callback/";
    var scope = "user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private%20user-top-read%20playlist-read-private";
    var state = "34fFs29kd09";
    var authorize_uri = "https://accounts.spotify.com/authorize?";
    var url = authorize_uri + "client_id=" + client_id + "&response_type=token" + "&redirect_uri=" + redirect_uri + "&scope=" + scope + "&state=" + state;
    location.href = url;
}