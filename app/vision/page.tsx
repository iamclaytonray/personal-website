import type { Metadata } from "next";
import { VisionDocument, type VisionMessages } from "./vision-document";
import en from "./messages/en.json";

export const metadata: Metadata = {
  title: "The Vision — Clayton",
  description:
    "The thesis behind what I'm building: technology that helps people become more truthful, more connected, and more present to one another. Boardbox, WithCoach, Raft — and Raft Cities, the life's work underneath it all.",
};

export default function Vision() {
  return <VisionDocument lang="en" messages={en as VisionMessages} />;
}
