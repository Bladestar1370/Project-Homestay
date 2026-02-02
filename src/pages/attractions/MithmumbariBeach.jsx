// src/components/attractions/MithmumbariBeach.jsx
import AttractionDetail from "../attractions/AttractionDetail";

function MithmumbariBeach() {
  return (
    <AttractionDetail
      title="Mithmumbari Beach"
      images={[
        {
          src: "https://media.gettyimages.com/id/1769313865/photo/windmills-on-mithmumbari-beach-devgad.jpg", // Similar stock / representative
          alt: "Pristine long white-sand stretch of Mithmumbari Beach with windmills in background",
        },
        {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/8e/4a/9f/mithmumbari-beach.jpg", // Typical Tripadvisor direct if available; replace with real one
          alt: "Clean, uncrowded Mithmumbari Beach near Devgad – golden sand and calm sea",
        },
        {
          src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Generic beautiful Konkan-style beach as fallback (replace with specific if you find)
          alt: "Serene coastal view at Mithmumbari Beach, perfect for relaxation",
        },
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