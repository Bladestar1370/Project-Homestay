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
      about="Devgad Fort and Devgad Lighthouse together form a beautiful coastal attraction in the Konkan region. The historic fort reflects Maratha architecture, while the nearby lighthouse offers stunning panoramic views of the Arabian Sea. It’s a perfect spot to enjoy history, scenic landscapes, and peaceful sunsets."
      distance="2 km"
      travelTime="5-7 minutes"
      reachList={[
        "Extremely close to Devgad Beach – easily walkable or short auto/bike ride",
        "By private car or bike",
        "Best visited in late afternoon for sunset views from the lighthouse area",
      ]}
      mapQuery="Devgad Fort, Devgad, Sindhudurg, Maharashtra"
    />
  );
}

export default DevgadFortAndLighthouse;