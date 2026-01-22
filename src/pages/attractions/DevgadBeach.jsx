import AttractionDetail from "..//attractions/AttractionDetail";

function DevgadBeach() {
  return (
    <AttractionDetail
      title="Devgad Beach"
      images={[
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Devgad_beach.jpg",
        "https://thumbs.dreamstime.com/b/rocky-beach-devgad-konkan-devgad-beach-sindhudurg-district-maharashtra-state-konkan-india-asia-260648739.jpg",
        "https://shepherdtraveller.com/wp-content/uploads/2021/04/Devgad-Zipline-Best-zipline-in-India-Shepherd-Traveller.jpg",
      ]}
      about="Devgad Beach is a calm, clean, and less crowded beach in the Konkan region, known for its golden sand and peaceful sunsets."
      distance="3–6 km"
      travelTime="5–12 minutes"
      reachList={[
        "By auto-rickshaw (₹50–120)",
        "By private car or bike",
        "Walking if nearby",
        "Local shared autos available",
      ]}
      mapQuery="Devgad Beach Maharashtra"
    />
  );
}

export default DevgadBeach;
