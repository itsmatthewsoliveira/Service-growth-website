import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content & Visual — Photo Transformation, 3D Renders & Video",
  description:
    "Professional photo transformation, 3D architectural renders, video animation, and social media content for service businesses. Make your work look as good as it actually is. From $497.",
  alternates: {
    canonical: "/services/content",
  },
};

export default function ContentServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
