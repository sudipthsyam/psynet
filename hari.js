var options = {
    strings: ["Wishing you the happiest of birthdays! May this year be filled with love, laughter, and all the wonderful things you deserve. 🎂🎉😊", "I'm aware that I've turned your day into a mess, and I deeply regret it. My intention, as always, was to bring joy and make you feel good, but unfortunately, I ended up ruining your mood.", "I deeply regret my actions, as I always aspire to be by your side and contribute to making your life better in every possible way..",  "I want you to understand that your happiness is everything to me, and I'm determined to fix things. We all mess up sometimes, but I swear I'll learn from this and make our time together even happier and more unforgettable. Your smile is what matters most to me, and I'll go to any lengths to ensure it's glowing brightly. 😊❤️🌟", "As you asked if I've been mesmerized by someone's beauty, yes, but not in real life. It was the photo of you in a saree that captivated me, and I couldn't help but gaze at it for a good five minutes.", "Tyou've been the driving force behind many things i have changed in my life, inspiring me to work harder. Thanks to you, I've transformed from someone lonely(vikaram ellathe jeevi) to someone who truly cares.", "Once again, I want you to know that we're all here for you, and I'll always be by your side, even if you've made a mistake.", "I thought about sharing those quirky pictures of you again, but I don't want to spoil your day, so let's just keep it chill, dude.",  "I thought about sharing those quirky pictures of you again, but I don't want to spoil your day, so let's just keep it chill, dude.", "Love you HARI😘😘, Happy BIRTHDAY"], // Replace "Your strings..." with your actual strings
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: false,
    onComplete: function(self) {
        // Display the first image
        document.body.style.background = "url('hari.jpg') no-repeat center center fixed"; 
        document.body.style.backgroundSize = "cover";
        document.getElementById("typed-output").style.color = "black"; 

        // Wait for 5 seconds then set the second image
        setTimeout(function() {
            // Hide the text
            document.getElementById("typed-output").style.display = "none";
            
            document.body.style.background = "url('monuse.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";

            // Wait another 5 seconds then reset Typed.js to start typing from the beginning
            setTimeout(function() {
                // Destroy the current Typed instance
                self.destroy();

                // Reset the background and text color
                document.body.style.background = "black";
                document.getElementById("typed-output").style.display = "inline"; // Show the text again
                document.getElementById("typed-output").style.color = "white";

                // Create a new instance to start typing from the beginning
                new Typed("#typed-output", options);
            }, 5000);
        }, 5000);
    }
};

// Initialize Typed.js for the first time
var typed = new Typed("#typed-output", options);
