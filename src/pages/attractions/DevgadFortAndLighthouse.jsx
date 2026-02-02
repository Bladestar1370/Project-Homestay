// src/pages/attractions/DevgadFortAndLighthouse.jsx
import AttractionDetail from "../attractions/AttractionDetail";

function DevgadFortAndLighthouse() {
  return (
    <AttractionDetail
      title="Devgad Fort & Lighthouse"
      images={[
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Devgad_fort.JPG",
    alt: "Devgad Fort ruins overlooking the Arabian Sea",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4c/86/59/entrance.jpg?w=1000&h=-1&s=1",
    alt: "Entrance to Devgad Fort with historic stone architecture",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f0/a2/bc/devgad-fort-external.jpg?w=1000&h=-1&s=1",
    alt: "Exterior view of Devgad Fort walls and bastions",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4c/87/23/lighthouse.jpg?w=1000&h=-1&s=1",
    alt: "Devgad Lighthouse inside the fort premises with sea views",
  },
]}
      about="Devgad Fort (also known as Janjira Devgad Fort) is a historic coastal fort situated right at the mouth of Devgad Creek where it meets the Arabian Sea. Built during the Maratha era (around 1705 by Kanhoji Angre), it is now mostly in ruins but offers excellent panoramic views of the sea, creek, and coastline. Inside the fort premises stands the active Devgad Lighthouse (established in the early 20th century), which provides one of the best 360° sunset viewpoints in the area. Small temples (Ganesh & Hanuman) and old bastions add to the charm. It's a peaceful, low-crowd spot perfect for history, photography, and relaxing by the sea."
      distance="1–3 km"
      travelTime="5–10 minutes"
      reachList={[
        "Extremely close to Devgad town center and Devgad Beach – easily walkable or short auto/bike ride",
        "Accessible by car/bike from Devgad Bus Stand or main market",
        "Small entry fee usually ₹10–20 per person",
        "Best visited in late afternoon for sunset views from the lighthouse area",
      ]}
      mapQuery="Devgad Fort, Devgad, Sindhudurg, Maharashtra"
    />
  );
}

export default DevgadFortAndLighthouse;