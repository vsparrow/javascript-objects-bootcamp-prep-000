// Assign an object to the variable playlist and initialize the object with a key-value pair —
// the keys will be artist names and the values will be song titles. (What limitation does this impose on our playlist?)
//
playlist = {"Sean2" : "2cool4me"}
// Create a function updatePlaylist that accepts three parameters: the playlist (an object),
// an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object.
//  The function should return the whole playlist.
//
function updatePlaylist(playlist,artist,title){
  playlist[artist]=title;
  return playlist
}
// Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should
// delete the key-value pair from the playlist and return the updated playlist.
function removeFromPlaylist(playlist,artist){
  delete playlist[artist];
  return playlist;
}
