import { profileData } from "@/data/socials";

const shareImages = [
  {
    url: "/opengraph-image",
    alt: `${profileData.name} | ${profileData.role}`,
  },
];

export function pageMetadata({ title, description, path }) {
  const shareTitle = `${title} | ${profileData.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: `${profileData.name} Portfolio`,
      locale: "en_US",
      type: "website",
      images: shareImages,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      creator: profileData.handle,
      images: shareImages,
    },
  };
}
