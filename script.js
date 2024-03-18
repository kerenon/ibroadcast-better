const originalSetup = iBroadcastPlay.prototype.setup;

iBroadcastPlay.prototype.setup = function() {
    originalSetup.call(this);
    this.ongettrackurl = (trackId)=>{
        if (trackId == undefined || trackId == null) {
            return null;
        }
        let playurl = ib.hosts.streaming;
        playurl += music.library.tracks[trackId][music.library.tracks.map.file];
        if (cookies.origbitrate && music.user.premium) {
            playurl = playurl.replace(/128/, 'orig');
        }
        if (! cookies.origbitrate && music.user.premium) {
            playurl = playurl.replace(/128/, 320);
        }
        playurl += "?Expires=" + music.library.expires + "&Signature=" + music.user.token + "&platform=" + ib.client + "&version=1.1&user_id=" + music.user.id + "&file_id=" + trackId;
        ib.log("- play url: " + playurl, this);
        return (playurl);
    };
};
