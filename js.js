var fire_state = false
var fire_sound = new Audio("sounds/fire.mp3")
var forest_state = false
var forest_sound = new Audio("sounds/shelest-liste_-1.mp3")
var rain_state = false
var rain_sound = new Audio("sounds/rain.mp3")
var groza_state = false
var groza_sound = new Audio("sounds/nevidomiy-3d-zvuk-prirody-voshititelnye-zvuki-grozy.mp3")
var sea_state = false
var sea_sound = new Audio("sounds/zvuk-priboja-3d.mp3")
var cicads_state = false
var cicads_sound = new Audio("sounds/nochnye-cikady-i-sverchki.mp3")
var sverch_state = false
var sverch_sound = new Audio("sounds/zvuki-sverchkov1.mp3")
var birds_state = false
var birds_sound = new Audio("sounds/46dd16301231810.mp3")

function fire() {    
    if (fire_state) {
        fire_state = false
        fire_sound.pause()
        $("#fire").css({'background-color': 'lightgray', 'box-shadow' : 'none'})
    } else {
        fire_state = true
        fire_sound.play()
        $("#fire").css({'background-color': '#F84B56', 'box-shadow': '0 0 50px #F84B56'})
    }
}
function forest() {    
    if (forest_state) {
        forest_state = false
        forest_sound.pause()
        $("#forest").css({'background-color': 'lightgray', 'box-shadow' : 'none'})
    } else {
        forest_state = true
        forest_sound.play()
        $("#forest").css({'background-color': '#5EEC8E', 'box-shadow': '0 0 50px #5EEC8E'})
    }
}
function rain() {    
    if (rain_state) {
        rain_state = false
        rain_sound.pause()
        $("#rain").css({'background-color': 'lightgray', 'box-shadow' : 'none'})
    } else {
        rain_state = true
        rain_sound.play()
        $("#rain").css({'background-color': '#5BE3FF', 'box-shadow': '0 0 50px #5BE3FF'})
    }
}
function groza() {    
    if (groza_state) {
        groza_state = false
        groza_sound.pause()
        $("#groza").css({'background-color': 'lightgray', 'box-shadow' : 'none'})
    } else {
        groza_state = true
        groza_sound.play()
        $("#groza").css({'background-color': '#B3E4FD', 'box-shadow': '0 0 50px #B3E4FD'})
    }
}
function sea() {    
    if (sea_state) {
        sea_state = false
        sea_sound.pause()
        $("#sea").css({'background-color': 'lightgray', 'box-shadow' : 'none'})
    } else {
        sea_state = true
        sea_sound.play()
        $("#sea").css({'background-color': '#44FBCB', 'box-shadow': '0 0 50px #44FBCB'})
    }
}
function cicads() {    
    if (cicads_state) {
        cicads_state = false
        cicads_sound.pause()
        $("#cicads").css({'background-color': 'lightgray', 'box-shadow' : 'none'})
    } else {
        cicads_state = true
        cicads_sound.play()
        $("#cicads").css({'background-color': '#D4B4F7', 'box-shadow': '0 0 50px #D4B4F7'})
    }
}
function sverch() {    
    if (sverch_state) {
        sverch_state = false
        sverch_sound.pause()
        $("#sverch").css({'background-color': 'lightgray', 'box-shadow' : 'none'})
    } else {
        sverch_state = true
        sverch_sound.play()
        $("#sverch").css({'background-color': '#FEB47D', 'box-shadow': '0 0 50px #FEB47D'})
    }
}
function birds() {    
    if (birds_state) {
        birds_state = false
        birds_sound.pause()
        $("#birds").css({'background-color': 'lightgray', 'box-shadow' : 'none'})
    } else {
        birds_state = true
        birds_sound.play()
        $("#birds").css({'background-color': '#FFDE49', 'box-shadow': '0 0 50px #FFDE49'})
    }
}