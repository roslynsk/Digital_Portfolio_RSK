import React from "react";
import { useParams, Link } from "react-router-dom";
import "./PhotoDetail.css";

import filler2img from "../assets/dog.jpeg";
import filler1img from "../assets/aesthetic.jpg";
import filler3img from "../assets/probw.jpg";

interface Project {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
}

const photographyProjects: Project[] = [
 {
  id: 1,
  date: "11-11-2025",
  title: "Ethereal Essence",
  description: `To capture this aesthetic image, there was a lot of set-up involved. I knew I wanted it to be visually stunning but figuring out how to achieve this proved challenging. With a background in product design, it felt natural for me to use this assignment to visually portray a product in a visually engaging, marketable way. I wanted to try and make the perfume feel desirable to viewers.

To achieve this I experimented with lighting, colour and reflection to create an environment that would enhance the elegance of the bottle. I first tried taking some photos with a dark background and filtered light through different types of glass to give an underwater/reflective feel to the photo. The images came out nice, but I felt it didn’t really do the bottle justice. The bottle was nicely curved and had a pink tinge to the glass and so it felt like the photo needed more colour.

Then I changed my approach. I found a table with a glass top at home and experimented with reflections. I tried different coloured background but still felt it wasn’t exciting enough. This is when I tried putting images on my iPad screen and placing it in such a way so there was barely a clear border between the mirror and screen. I found this to be visually stunning. I loved how the light refracted through the bottle and reflected onto the mirror. I tried turning the bottle in different positions until there was a dark shadow on the edges and side which made the bottle really stand out. I tried different backgrounds that changed the feeling of the image. I found the multi-coloured background to be most exciting, vibrant and suited to the product.

Again, this image was taken with my phone. The wide lens (automatic at 26mm on my iPhone 11) was used and it allowed me to capture the entire bottle and the background together, adding depth to the image. Using a wide aperture (f1.8) allowed me to softly blur the background but keep the bottle sharp and in focus. The ISO was kept low at 160 to make sure there wasn’t too much noise in the image and so the quality stayed good. To control this, I used the exposure tool as I was taking the photo. The shutter speed was at 1/60s as I had the exposure lowered to capture enough light to make the image vivid.

I brought the image into Snapseed and played around after much trial and error I found the raw image to be more beautiful.`,
  image: filler1img
},

  {
    id: 2,
    date: "12‑11‑2025",
    title: "A Puppy's Palate",
    description: `I have always been passionate about animals and so when doing this project, I knew I wanted to capture a candid image of my dog, Nala. 

Before taking any photos, I set the scene. I placed her bed by a large glass door during the afternoon, when the sun was shining in. I pulled a neutral-coloured curtain behind her to ensure there would be no background distraction. I wanted her face to be the sole focus of the image. It was difficult to pull the curtain enough, so it covered the background, but not so much that it blocked the light or created shadows on her face. After setting the scene, it was just a matter of having enough peanut butter to keep her entertained during the shoot. 

I tried many angles and found that straight on looked the nicest. I used the camera on my phone and framed the photo with her nose in the middle so my camera could focus sharply on her face and tongue. I wanted the viewers attention to be brought to this part of the photo as it was expressive and interesting. 

I used natural lighting, allowing one side of her face to be softly lit while the other side has gentle shadows. This contrast created a sense of depth and texture in her fur, making the image feel warm and intimate. I really liked how the lighting brought out the different colours in her fur, making the image a bit more vibrant. 

Unfortunately, I couldn’t manually set the aperture on my phone but tried using the wide, ultra-wide and front lens’, going up to f2.4 to explore options. In the end this photo was taken with f1.8, the default for my back camera. The focal length of the phone camera was the standard wide lens (equivalent to 26mm) and gave a natural, close-up perspective without distorting it. I also couldn’t control shutter speed, so I tried taking bursts of photos and live photos that captured many frames in a short amount of time. I was then able to filter through each frame and choose the best one. The shutter speed ended up being quick enough to capture her tongue moving quickly, resulting in a nice candid photo. 

After taking the image, I brought it into Snapseed to touch it up. I used the circular lens blur tool to place the focus point on her face and slightly blur the rest of the image. This brought the focus even more on her nose and tongue. I then lowered the brightness a tad as this darkened the photo but made the light on her face and tongue stand out even more, creating more contrast. I also used the contrast tool to further increase this. Finally I sharpened the image a bit to make the detail in her fur more defined.`,
    image: filler2img
  },
  {
    id: 3,
    date: "13‑11‑2025",
    title: "Professional Portrait",
    description: `I wanted this picture to convey my inviting, friendly and approachable side while keeping it professional. As I have quite pale skin, I used soft, warm lighting to make myself stand out more from the background. I used a tripod with a phone clamp to position the camera and moved the lighting around to experiment different looks. 
I tried to place the lighting so it would look clean to bring out the detail in my face without any distracting or harsh shadows. I kept the camera at eye level to create a sense of connection with the viewer. I tilted my shoulders a bit to appear more open and approachable. I had learned that facing the camera square on can come across as confrontational and wanted to send a subtle message that I am friendly and engaging.  This was an important message I wanted to portray to potential employers and clients viewing my digital portfolio. 
I chose a plain background and black and white filter to highlight my features and keep the photo as simple and straightforward as possible. I used the phones front camera to be able to position myself right and adjust lighting accordingly. The front camera is 23mm focal length which is slightly wide angle. This was good because it let me capture the upper body and shoulders and didn’t look distorted.
 The built-in aperture is f2.2 for portrait mode and gave the background a soft blur, separating me from the backdrop even more. The ISO was at 125 which gave the photo a sharp and detailed look in parts like my hair, t-shirt and eyes. I found when changing the exposure that this setting was most professional looking.  The shutter speed is automatic as the phone chooses it based on the lighting and exposure. This photo was 1/58s which made it avoid motion blurring if I moved slightly. 
”.

`,
    image: filler3img
  },
];

const PhotoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const photo = photographyProjects.find((p) => p.id === Number(id));

  if (!photo) {
    return <p>Photo not found.</p>;
  }

  return (
    <div className="photo-detail">
      <Link to="/gallery" className="back-link">← Back </Link>

      <div className="photo-header">
        <div className="photo-date">{photo.date}</div>
        <h1 className="photo-title">{photo.title}</h1>
      </div>

      <div className="photo-content">
        <div className="photo-description">
          {photo.description.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className="photo-image-container">
          {photo.image && <img src={photo.image} alt={photo.title} className="photo-image" />}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
