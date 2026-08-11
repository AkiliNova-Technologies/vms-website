import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Victoria Montessori School",
  description:
    "A glimpse into life at Victoria Montessori School — our campus, classrooms and community.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Gallery"
          title="A Glimpse Into Life at Victoria Montessori"
          description="Our campus, our classrooms, and the everyday moments that make up our school community."
          image="/about-image.jpeg"
          breadcrumb="Gallery"
        />

        <section className="py-16 sm:py-24">
          <div className="container-page">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
