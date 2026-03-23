// src/pages/attractions/KunkeshwarTemple.jsx
import AttractionDetail from "../attractions/AttractionDetail";

function KunkeshwarTemple() {
  return (
    <AttractionDetail
      title="Kunkeshwar Temple"
      images={[
  {
    src: "https://static.mediawire.in/pr/metadata/47901564/temp/52138844_Kankeshwar_Temple.png?id=47875",
    alt: "Kunkeshwar Mahadev Temple – front view with traditional architecture",
  },
  {
    src: "https://utsav.gov.in/public/uploads/darshan_cover_image/darshan_117/17141288592105861469.jpg",
    alt: "Kunkeshwar Temple deity darshan view",
  },
  {
    src: "https://t3.ftcdn.net/jpg/05/43/38/46/360_F_543384666_jdBc3qC2gwGLHMVyv03ikTQzr19RRQgP.jpg",
    alt: "Ancient stone carvings and structure of Kunkeshwar Shiva Temple",
  },
  {
    src: "https://live.staticflickr.com/185/457667449_9fb3f4854e_b.jpg",
    alt: "Kunkeshwar Temple located next to the beach (placeholder image)",
  },
]}
      about="Kunkeshwar Temple (also known as Kunkeshwar Mahadev) is an ancient Shiva temple situated right next to a beautiful beach in Sindhudurg district. Often called 'Konkan Kashi', the temple features intricate stone carvings and is a major pilgrimage site. The adjacent Kunkeshwar Beach adds to its serene and spiritual charm."
      distance="6.5 km"
      travelTime="10-12 minutes"
      reachList={[
        "By auto-rickshaw from Devgad",
        "By private car or bike via Devgad–Kunkeshwar road",
        "By MSRTC bus from Devgad ST stand to Kunkeshwar",
      ]}
      mapQuery="Kunkeshwar Temple Maharashtra"
    />
  );
}

export default KunkeshwarTemple;