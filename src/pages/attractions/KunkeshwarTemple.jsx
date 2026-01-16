// src/pages/attractions/KunkeshwarTemple.jsx
import AttractionDetail from "../attractions/AttractionDetail";

function KunkeshwarTemple() {
  return (
    <AttractionDetail
      title="Kunkeshwar Temple"
      images={[
        "https://static.mediawire.in/pr/metadata/47901564/temp/52138844_Kankeshwar_Temple.png?id=47875",
        "https://utsav.gov.in/public/uploads/darshan_cover_image/darshan_117/17141288592105861469.jpg",
        "https://t3.ftcdn.net/jpg/05/43/38/46/360_F_543384666_jdBc3qC2gwGLHMVyv03ikTQzr19RRQgP.jpg",
        "https://example.com/kunkeshwar-beach-temple.jpg", // replace if you have better photo
      ]}
      about="Kunkeshwar Temple (also known as Kunkeshwar Mahadev) is an ancient Shiva temple situated right next to a beautiful beach in Sindhudurg district. Often called 'Konkan Kashi', the temple features intricate stone carvings and is a major pilgrimage site. The adjacent Kunkeshwar Beach adds to its serene and spiritual charm."
      distance="14–18 km"
      travelTime="20–35 minutes"
      reachList={[
        "By auto-rickshaw or taxi from Devgad (₹100–250 one way)",
        "By private car or bike via Devgad–Kunkeshwar road",
        "By MSRTC bus from Devgad ST stand to Kunkeshwar",
        "Nearest railway station: Kankavli or Nandgaon (≈45–55 km)",
      ]}
      mapQuery="Kunkeshwar Temple Maharashtra"
    />
  );
}

export default KunkeshwarTemple;