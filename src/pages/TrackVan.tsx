import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOutSection from "@/components/ReachOutSection";
import VigyanRathMap from "@/components/VigyanRathMap";
import { MapPin, Calendar, Navigation } from "lucide-react";

interface Mission {
  id: string;
  date: string;
  location: string;
  district: string;
  state: string;
  studentsReached?: number;
  type: "current" | "historical";
}

const TrackVan = () => {
  const [selectedMission, setSelectedMission] = useState<string | undefined>(undefined);

  const missions: Mission[] = [
    {
      id: "current-1",
      date: "December 2024",
      location: "Government High School",
      district: "Tumkur",
      state: "Karnataka",
      studentsReached: 450,
      type: "current"
    },
    {
      id: "current-2",
      date: "January 2025",
      location: "Primary School",
      district: "North Goa",
      state: "Goa",
      studentsReached: 320,
      type: "current"
    },
    {
      id: "hist-1",
      date: "October 2024",
      location: "Rural High School",
      district: "Bangalore Rural",
      state: "Karnataka",
      studentsReached: 580,
      type: "historical"
    },
    {
      id: "hist-2",
      date: "September 2024",
      location: "Government School",
      district: "Palakkad",
      state: "Kerala",
      studentsReached: 420,
      type: "historical"
    },
    {
      id: "hist-3",
      date: "August 2024",
      location: "Zilla Parishad School",
      district: "Pune",
      state: "Maharashtra",
      studentsReached: 650,
      type: "historical"
    },
    {
      id: "hist-4",
      date: "July 2024",
      location: "Government Higher Secondary",
      district: "Pondicherry",
      state: "Pondicherry",
      studentsReached: 380,
      type: "historical"
    },
    {
      id: "hist-5",
      date: "June 2024",
      location: "Aided School",
      district: "Kakinada",
      state: "Andhra Pradesh",
      studentsReached: 520,
      type: "historical"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-primary">
                Track VigyanRath Schedule
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Follow the VigyanRath journey across India and see where we've been
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Mission History Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border sticky top-24">
                  <div className="flex items-center gap-3 mb-6">
                    <Navigation className="w-6 h-6 text-primary" />
                    <h2 className="font-heading font-bold text-2xl text-primary">Mission History</h2>
                  </div>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                    <button
                      onClick={() => setSelectedMission(undefined)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        !selectedMission
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <p className="font-heading font-semibold text-sm text-primary">View All Locations</p>
                      <p className="text-xs text-muted-foreground mt-1">Show complete journey map</p>
                    </button>

                    {/* Current Locations */}
                    <div className="pt-4">
                      <h3 className="font-heading font-semibold text-sm text-accent mb-2 px-2">
                        Current Locations
                      </h3>
                      {missions.filter(m => m.type === "current").map((mission) => (
                        <button
                          key={mission.id}
                          onClick={() => setSelectedMission(mission.id)}
                          className={`w-full text-left p-4 rounded-lg border transition-all mb-2 ${
                            selectedMission === mission.id
                              ? "border-accent bg-accent/5"
                              : "border-border hover:border-accent/50 hover:bg-accent/5"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4 text-accent" />
                            <p className="font-heading font-semibold text-sm">{mission.date}</p>
                          </div>
                          <p className="text-sm text-foreground">{mission.location}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {mission.district}, {mission.state}
                          </p>
                          {mission.studentsReached && (
                            <p className="text-xs text-primary mt-2 font-semibold">
                              {mission.studentsReached} students
                            </p>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Historical Locations */}
                    <div className="pt-4">
                      <h3 className="font-heading font-semibold text-sm text-primary mb-2 px-2">
                        Recent Visits
                      </h3>
                      {missions.filter(m => m.type === "historical").map((mission) => (
                        <button
                          key={mission.id}
                          onClick={() => setSelectedMission(mission.id)}
                          className={`w-full text-left p-4 rounded-lg border transition-all mb-2 ${
                            selectedMission === mission.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50 hover:bg-primary/5"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4 text-primary" />
                            <p className="font-heading font-semibold text-sm">{mission.date}</p>
                          </div>
                          <p className="text-sm text-foreground">{mission.location}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {mission.district}, {mission.state}
                          </p>
                          {mission.studentsReached && (
                            <p className="text-xs text-primary mt-2 font-semibold">
                              {mission.studentsReached} students
                            </p>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Display */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      <h2 className="font-heading font-bold text-2xl text-primary">
                        {selectedMission ? "Location Details" : "VigyanRath Journey Map"}
                      </h2>
                    </div>
                    <div className="flex gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent"></div>
                        <span className="text-muted-foreground">Current</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">Historical</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-[600px]">
                    <VigyanRathMap selectedMission={selectedMission} />
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-xl">
                    <p className="text-muted-foreground text-sm text-center">
                      <strong>Note:</strong> Click on any mission in the history to view its location on the map. 
                      Red markers indicate current locations, green markers show historical visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReachOutSection />
      </main>

      <Footer />
    </div>
  );
};

export default TrackVan;
