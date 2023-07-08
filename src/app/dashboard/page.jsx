import Hero from "@/components/Hero";
import {
  Availibility,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Todo,
} from "@/components/features/card";

import FeatureTitle from "@/components/features/title";
import { MusicVisual } from "@/components/features/visual";

const features = [
  { title: "Use your calendar as a todo, list", id: "todo-list", card: Todo },
  { titte: "Color your  calendar to  organize", id: "colors", card: Colors },
  {
    title: "Instantly, know, ifßomeone is available",
    id: "availability",
    card: Availibility,
  },
  { title: "Track what  you  listened  to when", id: "music", card: Music },
  {
    title: "Send scheduling  links guests  love",
    id: "scheduling—links",
    card: SchedulingLinks,
  },
  { title: "Always  know what  your  team is  up  to", id: "team", card: Team },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      <MusicVisual />
      <div className="flex w-full gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 flex h-screen items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100">
            {features.map((feature) => (
              <feature.card key={feature.id} id={feature.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  );
}
