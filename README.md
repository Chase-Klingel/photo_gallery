Earlier this week, I decided to learn GSAP (GreenSock Animation Platform) because I have always been really intrigued by websites who create subtle
yet elegant animations to make the user experience more exciting. I actually
got the idea for building this photo gallery from finding http://www.storytrail.co/.

I was very happy with the overall smoothness of clicking from one image to the next. Figuring out how to resize the images, while also
maintaining a smooth animation took some serious effort, but I think it turned out well. I am also proud to say that it resizes for mobile and works in all major browsers (Opera, Firefox, Safari, Chrome) and no css frameworks were involved.

The coolest part in terms of the code for this photo gallery is how I stacked the photos that are on the outer edges. Using the z-index property, I had the images absolutely positioned and stacked on top of one another and based on what number they were in the gallery, their z-index would change and rise to the top in order for the user to see a sneak-peek preview of it.

There are always improvements to be made. The css could be checked to be more DRY. I also think my solution for handling an image click on the right or left side of the page could have been better. You'll notice on lines 17 and 41 in main.js that I check if the 'e.pageX' is less than 500 and if so, I handle the image movements in reverse order. As I was coming up with this solution, I just got that feeling that there could be a better way. I'm excited to keep working on this project!
