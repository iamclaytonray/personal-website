import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  VisionDocument,
  type Locale,
  type VisionMessages,
} from "../vision-document";
import zh from "../messages/zh.json";
import th from "../messages/th.json";
import ka from "../messages/ka.json";

const MESSAGES: Record<string, VisionMessages> = {
  zh: zh as VisionMessages,
  th: th as VisionMessages,
  ka: ka as VisionMessages,
};

// Only these locales are built; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(MESSAGES).map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const m = MESSAGES[lang];
  if (!m) return {};
  return {
    title: `${m.eyebrows.vision} — Clayton`,
    description: m.opening.lead,
  };
}

export default async function LocalizedVision({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const messages = MESSAGES[lang];
  if (!messages) notFound();
  return <VisionDocument lang={lang as Locale} messages={messages} />;
}
