FIXED PREMIUM PORTFOLIO WEBSITE

Open:
1. Extract ZIP.
2. Open the folder.
3. Double-click index.html.

Important:
Keep these files/folders together:
- index.html
- style.css
- script.js
- assets folder
- videos folder

Do not move only index.html outside the folder, otherwise the premium design can break.

Contact:
Open index.html and change:
- yourmail@example.com
- https://instagram.com/yourusername

Missing videos when package was created:
None


FINAL CONTACT INFO ADDED

Email:
ietkaozcan@gmail.com

Instagram:
https://www.instagram.com/etkaozcn

Website is ready with videos and contact information.


FIXED VERSION
Videos are now visible without needing JavaScript.
This makes the website safer to open from local folders, phone file apps, and simple browser previews.

If videos still do not show:
1. Extract the ZIP first.
2. Keep index.html, style.css, assets, and videos in the same folder.
3. Open index.html from the extracted folder, not from inside the ZIP preview.


CLEAN CENTERED VIDEO VERSION
- Removed video descriptions such as Selected Work, Visual Story, Cinematic Work.
- Videos are smaller, centered, and not stretched too wide.
- Videos are visible without JavaScript.


NO VIDEO TEXT VERSION
- Removed poster text inside the video preview images.
- Removed video labels/descriptions.
- Removed poster references from the HTML video tags.


WHITE VIDEO FRAME VERSION
- Added a medium-thickness white frame around each video player.
- Kept the premium black minimalist style.
- Video text labels remain removed.


EASY VIDEO MANAGEMENT VERSION

Now videos are controlled from one file:

videos.js

HOW TO ADD A VIDEO
1. Put your MP4 file inside the videos folder.
2. Name it for example:
   video-4.mp4
3. Open videos.js.
4. Add this line inside the list:
   { src: "videos/video-4.mp4" },

HOW TO REMOVE A VIDEO
1. Open videos.js.
2. Delete the line of the video you do not want.
3. Save.
4. Open index.html again.

This version works locally and online because it does not use a database.
For an online admin panel, this can later be connected to GitHub + Netlify + Decap CMS or to Cloudinary/Vimeo.
