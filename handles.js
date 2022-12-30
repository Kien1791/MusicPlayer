var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var player = $('.player')
var playlist =$('.playlist')
var btn_playlist = $('.btn-playlist')
var btn_back = $('.btn-back')

var btn_toggle = $('.btn-toggle')
var btn_pause = $('.btn-pause')
var btn_play = $('.btn-play')

var app = {
    

    handles(){
        /* show playlists when click button playlist*/
        btn_playlist.onclick = function(){
            player.classList.toggle('hidden')
            playlist.classList.toggle('hidden')
        }
        /* back to player when click button back*/
        btn_back.onclick = function(){
            player.classList.toggle('hidden')
            playlist.classList.toggle('hidden')
        },
        btn_toggle.onclick = function(){
            btn_play.classList.toggle('hidden')
            btn_pause.classList.toggle('hidden')
        }

    },
    

    start(){
        this.handles()
    }
}

app.start()