import { Heart, Users } from "lucide-react";

const SponsorThanks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-12 shadow-xl border-2 border-accent/20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className="w-10 h-10 text-accent" />
              <h2 className="font-heading font-bold text-4xl text-center text-primary">
                Special Thanks to Our Partners
              </h2>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 mb-8 border border-accent/20">
              <h3 className="font-heading font-bold text-2xl mb-6 text-center text-accent">
                VVV & Sons Edible Oils Ltd (Idhayam Oils)
              </h3>
              <div className="text-foreground/90 space-y-4">
                <p className="text-center mb-6">
                  <strong>With Rotary Club of Virudhunagar under Rotary District 3212</strong>
                </p>
                <p>
                  Our heartfelt gratitude to <strong>Idhayam Oils</strong> for their unwavering support in sponsoring <strong>Project 1</strong>. 
                  The entire monthly expenses—including teachers' remuneration, fuel, boarding facilities, chemicals, and consumables—are fully taken care of by Idhayam.
                </p>
                <div className="bg-card rounded-lg p-6 my-6">
                  <h4 className="font-heading font-bold text-xl mb-4 text-primary text-center">Project 1 Impact</h4>
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">271,547</div>
                      <div className="text-sm text-muted-foreground">Students Reached</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">11,800</div>
                      <div className="text-sm text-muted-foreground">Teachers Trained</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">960</div>
                      <div className="text-sm text-muted-foreground">Program Events</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">48,280</div>
                      <div className="text-sm text-muted-foreground">Kilometers Traveled</div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    From October 2021 till 13th November 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="font-heading font-bold text-2xl text-primary">
                  Supporting Rotary Clubs
                </h3>
              </div>
              <p className="text-foreground/90 mb-4">
                We also extend our sincere thanks to the following Rotary Clubs for their continued support:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Rotary District 3203
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Rotary District 2984
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Rotary District 3000
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Rotary District 3204 (Kerala)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Rotary District 3170 (Karnataka, Maharashtra, Goa)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Inner Wheel Club District 317 (Hubli Midtown)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorThanks;
