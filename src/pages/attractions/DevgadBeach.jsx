import AttractionDetail from "..//attractions/AttractionDetail";

function DevgadBeach() {
  return (
    <AttractionDetail
      title="Devgad Beach"
      images={[
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Devgad_beach.jpg",
          alt: "Golden sands and calm waters of Devgad Beach",
        },
        {
          src: "https://thumbs.dreamstime.com/b/rocky-beach-devgad-konkan-devgad-beach-sindhudurg-district-maharashtra-state-konkan-india-asia-260648739.jpg",
          alt: "Rocky shoreline at Devgad Beach, Konkan",
        },
        {
          src: "https://shepherdtraveller.com/wp-content/uploads/2021/04/Devgad-Zipline-Best-zipline-in-India-Shepherd-Traveller.jpg",
          alt: "Zipline adventure overlooking Devgad Beach",
        },
      ]}
      about="Devgad Beach is a calm and less crowded coastal spot known for its wide shoreline, soft golden sand, and gentle waves. Surrounded by natural beauty, it offers a peaceful environment ideal for relaxing walks, enjoying fresh sea breeze, and witnessing stunning sunsets. It’s a great place for visitors looking for a quiet and refreshing beach experience."
      distance="1 km"
      travelTime="2-4 minutes"
      reachList={[
        "By auto-rickshaw",
        "By private car or bike",
        "Walking",
        "Local auto can be provided",
      ]}
      mapQuery="Devgad Beach Maharashtra"
    />
  );
}

export default DevgadBeach;
