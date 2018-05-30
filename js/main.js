$(document).ready(function(){
        $('#loginfacebook').click(function(){

            loginUsingFacebook();

        });
        $('#logoutfacebook').click(function(){

            logoutFacebook();

        });
    });

var controller = new ScrollMagic.Controller();

var Scene1Left = new ScrollMagic.Scene({
	triggerElement: '#traslateLeft1'
})
.setClassToggle('#traslateLeft1', 'fadeInLeftActive')
.addTo(controller);

var Scene1Right = new ScrollMagic.Scene({
	triggerElement: '#traslateRight1'
})
.setClassToggle('#traslateRight1', 'fadeInRightActive')
.addTo(controller);

var Scene2 = new ScrollMagic.Scene({
	triggerElement: '#fadeIn'
})
.setClassToggle('#fadeIn', 'fadeInActive')
.addTo(controller);

var scene = new ScrollMagic.Scene({
	triggerElement: '.black-cube'
})
.setClassToggle('.black-cube', 'show')
.addTo(controller);
