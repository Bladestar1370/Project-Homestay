import AttractionDetail from "../attractions/AttractionDetail";

function VijaydurgFort() {
  return (
    <AttractionDetail
      title="Vijaydurg Fort"
      images={[
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bastions_of_vijaydurg.jpg/960px-Bastions_of_vijaydurg.jpg?20101107205403",
    alt: "Bastions and sea walls of Vijaydurg Fort",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Vijaydurg_Fort_08.jpg/960px-Vijaydurg_Fort_08.jpg?20160608042536",
    alt: "Panoramic view of Vijaydurg Fort from the sea side",
  },
  {
    src: "https://maharashtratourism.gov.in/wp-content/uploads/2024/11/shutterstock_1779313865-w.jpg",
    alt: "Vijaydurg Fort – one of the strongest sea forts in Maharashtra",
  },
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
