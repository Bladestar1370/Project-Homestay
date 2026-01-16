import AttractionDetail from "../attractions/AttractionDetail";

function VijaydurgFort() {
  return (
    <AttractionDetail
      title="Vijaydurg Fort"
      images={[
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/45/71/3c/vijaydurg-fort.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/59/aa/af/vijaydurg-fort.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/36/5d/6b/vijaydurg-fort.jpg",
      ]}
      about="Vijaydurg Fort is one of the strongest sea forts in India and a key part of Maratha naval history."
      distance="29–30 km"
      travelTime="40–50 minutes"
      reachList={[
        "By road via Devgad–Vijaydurg route",
        "MSRTC buses available",
        "Taxi or bike is best option",
      ]}
      mapQuery="Vijaydurg Fort Maharashtra"
    />
  );
}

export default VijaydurgFort;
