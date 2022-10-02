function make_album(artist_name, album_title, song_count = null) {
    let album = {};
    album['artist_name'] = artist_name;
    album['artist_title'] = album_title;
    if (song_count) {
        album['song_count'] = song_count;
    }
    return album;
}

let album1 = make_album('The Beatles', 'Abbey Road', 12);
console.log(album1);

let album2 = make_album('Justin baber', 'Revolver');
console.log(album2);

let album3 = make_album('Bohmia', 'Sgt. Pepper');
console.log(album3);

let dict1 = {
    'justin':album1,
    'jason' : album2,
    'rahat' : album3,
}

let dict2 = {
    'justin':album1,
    'jason' : album2,
    'rahat' : album3,
}

let dict3 = {
    'justin':album1,
    'jason' : album2,
    'rahat' : album3,
}


console.log(dict1);
console.log(dict2);
console.log(dict3);