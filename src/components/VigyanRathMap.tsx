import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom icon for current location
const currentLocationIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom icon for historical locations
const historicalLocationIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  date: string;
  district: string;
  state: string;
  studentsReached?: number;
  type: "current" | "historical";
}

interface VigyanRathMapProps {
  selectedMission?: string;
}

// Component to update map view when selection changes
function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

const VigyanRathMap = ({ selectedMission }: VigyanRathMapProps) => {
  const [locations, setLocations] = useState<Location[]>([
    // Current locations
    {
      id: "current-1",
      name: "Government High School",
      lat: 13.3409,
      lng: 77.1172,
      date: "December 2024",
      district: "Tumkur",
      state: "Karnataka",
      studentsReached: 450,
      type: "current"
    },
    {
      id: "current-2",
      name: "Primary School",
      lat: 15.2993,
      lng: 74.1240,
      date: "January 2025",
      district: "North Goa",
      state: "Goa",
      studentsReached: 320,
      type: "current"
    },
    // Historical locations
    {
      id: "hist-1",
      name: "Rural High School",
      lat: 12.9716,
      lng: 77.5946,
      date: "October 2024",
      district: "Bangalore Rural",
      state: "Karnataka",
      studentsReached: 580,
      type: "historical"
    },
    {
      id: "hist-2",
      name: "Government School",
      lat: 10.8505,
      lng: 76.2711,
      date: "September 2024",
      district: "Palakkad",
      state: "Kerala",
      studentsReached: 420,
      type: "historical"
    },
    {
      id: "hist-3",
      name: "Zilla Parishad School",
      lat: 18.5204,
      lng: 73.8567,
      date: "August 2024",
      district: "Pune",
      state: "Maharashtra",
      studentsReached: 650,
      type: "historical"
    },
    {
      id: "hist-4",
      name: "Government Higher Secondary",
      lat: 11.9416,
      lng: 79.8083,
      date: "July 2024",
      district: "Pondicherry",
      state: "Pondicherry",
      studentsReached: 380,
      type: "historical"
    },
    {
      id: "hist-5",
      name: "Aided School",
      lat: 16.7050,
      lng: 81.1018,
      date: "June 2024",
      district: "Kakinada",
      state: "Andhra Pradesh",
      studentsReached: 520,
      type: "historical"
    }
  ]);

  const [mapCenter, setMapCenter] = useState<[number, number]>([13.0827, 80.2707]); // Chennai
  const [mapZoom, setMapZoom] = useState(6);

  // Filter locations based on selected mission
  const filteredLocations = selectedMission 
    ? locations.filter(loc => loc.id === selectedMission)
    : locations;

  // Update map center when mission is selected
  useEffect(() => {
    if (selectedMission) {
      const selected = locations.find(loc => loc.id === selectedMission);
      if (selected) {
        setMapCenter([selected.lat, selected.lng]);
        setMapZoom(10);
      }
    } else {
      // Show all of South India
      setMapCenter([13.0827, 80.2707]);
      setMapZoom(6);
    }
  }, [selectedMission, locations]);

  // Create route polyline from historical locations
  const routeCoordinates = locations
    .filter(loc => loc.type === "historical")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(loc => [loc.lat, loc.lng] as [number, number]);

  return (
    <div className="h-full w-full rounded-xl overflow-hidden border border-border shadow-lg">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <MapUpdater center={mapCenter} zoom={mapZoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Historical route polyline */}
        {!selectedMission && routeCoordinates.length > 1 && (
          <Polyline 
            positions={routeCoordinates} 
            color="hsl(var(--primary))"
            weight={3}
            opacity={0.6}
            dashArray="10, 10"
          />
        )}

        {/* Markers */}
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={location.type === "current" ? currentLocationIcon : historicalLocationIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-heading font-bold text-lg text-primary mb-2">
                  {location.name}
                </h3>
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold">Date:</span> {location.date}</p>
                  <p><span className="font-semibold">District:</span> {location.district}</p>
                  <p><span className="font-semibold">State:</span> {location.state}</p>
                  {location.studentsReached && (
                    <p><span className="font-semibold">Students Reached:</span> {location.studentsReached}</p>
                  )}
                  <div className="mt-2 pt-2 border-t border-border">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                      location.type === "current" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {location.type === "current" ? "Current Location" : "Historical Visit"}
                    </span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default VigyanRathMap;
