import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GalleryCollectionGrid from "@/components/gallery/GalleryCollectionGrid";
import { galleryCollections } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery | Victoria Montessori School",
  description:
    "A glimpse into life at Victoria Montessori School our campus, classrooms and community.",
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

        <section className="section-space">
          <div className="container-page">
            <GalleryCollectionGrid collections={galleryCollections} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
