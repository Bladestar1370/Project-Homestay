// src/components/attractions/MithmumbariBeach.jsx
import AttractionDetail from "../attractions/AttractionDetail";

function MithmumbariBeach() {
  return (
    <AttractionDetail
      title="Mithmumbari Beach"
      images={[
        "https://www.tripadvisor.com/Attraction_Review-g6749529-d24090593-Reviews-Mithmumbari_Beach-Devgad_Sindhudurg_District_Maharashtra.html", // Note: Replace with direct image if you extract one; Tripadvisor often has user photos of clean white sand & long shoreline
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomePlaceholderForMithmumbari", // Placeholder - search & replace with actual public domain / free image URLs of Mithmumbari (clean, long, uncrowded beach with white sand)
        "https://www.instagram.com/explore/locations/726944050794479/mithmumbari-beach", // Note: Instagram location link; use a direct image in production
      ]}
      about="Mithmumbari Beach is a pristine, uncrowded, and very long white-sand beach in Devgad, often called one of the cleanest and most beautiful in the area. Nestled between Devgad and Kunkeshwar beaches, it offers peaceful vibes, scenic coastal drives, and a perfect spot for relaxation away from crowds."
      distance="3–5 km"
      travelTime="8–15 minutes"
      reachList={[
        "By auto-rickshaw (₹80–150)",
        "By private car, bike, or scooter (scenic route via Taramumbari bridge)",
        "Local shared transport available from Devgad bus stand / town",
        "Easy access with beautiful coastal road drive",
      ]}
      mapQuery="Mithmumbari Beach Devgad Maharashtra"
    />
  );
}

export default MithmumbariBeach;