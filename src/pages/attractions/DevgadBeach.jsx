import AttractionDetail from "..//attractions/AttractionDetail";

function DevgadBeach() {
  return (
    <AttractionDetail
      title="Devgad Beach"
      images={[
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/99/51/e5/devgad-beach.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/91/df/48/devgad-beach.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/9c/7e/aa/devgad-beach.jpg",
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
