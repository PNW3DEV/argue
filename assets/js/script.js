/*
 Theme Name: PHOENIX APP LANDING PAGE - script.js
 Author: Phoenixcoded
 Author URI: http://www.phoenixcoded.com
 Version: 1.0
 */


/* Section Background */
"use strict";
$('section').each(function(){
    var image = $(this).attr('data-image');
    if (image){
        $(this).css('background-image', 'url('+image+')');
    }
});

// JavaScript Document

$("#close-sub").on('click', function(){
    $("#header-box").toggle(700);
    $("#close-sub").toggleClass("active");
});

function init() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
        start();
    }, 2000);
}

$(window).on('load', function(){
    $('#loader_top').fadeOut('slow',function(){$(this).add();});
});


		$(document).ready(function(){

		/*Magnific Pop-Up Js Starts*/
    $('#video-modal').magnificPopup({
        type: 'iframe',
        closeOnBgClick: false,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '<div class="mfp-title">Some caption</div>'+
            '</div>'
        },
        callbacks: {
            markupParse: function(template, values, item) {
                values.title = item.el.attr('title');
            }
        },
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });
/*Magnific Pop-Up Js Ends*/


		/*Screenshots Owl Slider*/


    $('#screenshots-owl').owlCarousel({
        dots:false,
        autoplay:true,
        slideSpeed : 10,
        paginationSpeed : false,
        loop:true,
        margin:1,
        responsiveClass:true,
        responsive:{
             0:{                        // width >=0px && width <=399px no. of screenshots display 1
                items:2,
                nav:false,
                dots: false
            },
            400:{                        // width >=400px && width <=699px no. of screenshots display 2
                items:3,
                nav:false
            },
            700:{                        // width >=700px && width <=999px no. of screenshots display 3
                items:4,
                nav:false
            },
            1000:{                                    // width =>1000px no. of screenshots display 5
                items:6,
                nav:true,
                loop:true
            },
            1100:{
                items:7,
                nav:true,
                loop:true
            },
            1500:{
                items:6,
                nav:true,
                loop:true
            }
        }
    });

    /*Testimonial Slider Starts*/
    $("#testimonial-owl").owlCarousel({
        dots: false,
        nav:false,
        autoplay:true,
        loop:true,
        margin:20,
        responsiveClass:true,
        items:1
    });

    /*Testimonial Slider Ends*/
    /*Tweet Starts*/
    var tweet=$('.tweet');
    if(tweet.length!=0){
        tweet.twittie({
            username: 'phoenixcoded',
            dateFormat: '%b. %d, %Y',
            template: '<div class="circle">{{avatar}}</div><h3>{{tweet}}</h3> <time class="date">{{date}}</time>',
            count: 10
        },function()
        {
            $(".tweet ul").addClass("tweet_slider item");
           /* $(".twitter li").addClass("item");*/
            $(".tweet_slider").owlCarousel(
            {
                dots: false,
                autoplay: true,
                loop:true,
                margin:20,
                responsiveClass:true,
                responsive:
                {
                    0:{
                        items:1,
                        nav:false
                    },
                    400:{
                        items:1,
                        nav:false
                    },
                    700:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:1,
                        nav:true,
                        loop:true
                    }
                }
            });
        });
    }
    /*Tweet Ends*/

    /*Screenshots Lighbox*/
    var $gallery = $('.gallery a').simpleLightbox();

        $gallery.on('show.simplelightbox', function(){
            console.log('Requested for showing');
        })
        .on('shown.simplelightbox', function(){
            console.log('Shown');
        })
        .on('close.simplelightbox', function(){
            console.log('Requested for closing');
        })
        .on('closed.simplelightbox', function(){
            console.log('Closed');
        })
        .on('change.simplelightbox', function(){
            console.log('Requested for change');
        })
        .on('next.simplelightbox', function(){
            console.log('Requested for next');
        })
        .on('prev.simplelightbox', function(){
            console.log('Requested for prev');
        })
        .on('nextImageLoaded.simplelightbox', function(){
            console.log('Next image loaded');
        })
        .on('prevImageLoaded.simplelightbox', function(){
            console.log('Prev image loaded');
        })
        .on('changed.simplelightbox', function(){
            console.log('Image changed');
        })
        .on('nextDone.simplelightbox', function(){
            console.log('Image changed to next');
        })
        .on('prevDone.simplelightbox', function(){
            console.log('Image changed to prev');
        })
        .on('error.simplelightbox', function(e){
            console.log('No image found, go to the next/prev');
            console.log(e);
        });
     /*Screenshots Lighbox Ends*/

});

/* ----------------------------------------
 Subscriber mail chimp
 -------------------------------------------
 */
$("#subscribe-btn").on("click", function(){

    //Subscriber email address
    var input_subscriber_email=$("input#subscriber_email");
    var subscriber_email = input_subscriber_email.val();
    if (subscriber_email == "") {
        input_subscriber_email.focus();
        return false;
    }
    else
    {
        var atpos = subscriber_email.indexOf("@");
        var dotpos = subscriber_email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=subscriber_email.length) {
            alert("Enter valid email address");
            return false;
        }
    }
    //Datastring pass to mail.php
    var dataString = '&subscriber_email=' + subscriber_email;
    var form = $(this);
    form.serialize();
    $.ajax({
        type: "POST", url: "mail/mailchimp.php",	data: dataString, success: function() {
            alert('You are subscribe with our newsletter');
            $('#subscribe-btn').attr('disabled','true');
        }
    });
});

/* ----------------------------------------
 Contact Form
 -------------------------------------------
 */

$("#submit-form").on("click", function(){
    send_form();
    return false;
});

function send_form(){
    //Firstname
    var input_first_name=$("input#first_name");
    var first_name = input_first_name.val();
    if (first_name == "") {
        input_first_name.focus();
        input_first_name.attr("placeholder", "Name must required");
        return false;
    }
    //Email
    var input_contact_email=$("input#contact_email");
    var email = input_contact_email.val();
    if (email == "") {
        input_contact_email.focus();
        input_contact_email.attr("placeholder", "Email address must required");
        return false;
    }
    else
    {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
            alert("Not a valid e-mail address");
            input_contact_email.focus();
            input_contact_email.attr("placeholder", "Please enter valid email address");
            return false;
        }
    }
    //Subject
    var input_subject=$("input#subject");
    var subject =input_subject.val();
    if (subject == "") {
        input_subject.focus();
        input_subject.attr("placeholder", "Subject must required..");
        return false;
    }

    //Message
    var contact_message=$("#contact_message");
    var message = contact_message.val();
    if (message == "") {
        contact_message.focus();
        contact_message.attr("placeholder", "Message field must required");
        return false;
    }
    //Datastring pass to mail.php
    var dataString = '&Name=' + first_name + '&subject=' + subject + '&email=' + email + '&message=' + message;
    var form = $(this);
    form.serialize();
    $.ajax({
        type: "POST", url: "mail/mail.php",	data: dataString, success: function() {
            alert('Thanks for your contact. Our team contact you soon as possible');
            $("#submit-form").attr('disabled','true');
        }
    });
}
