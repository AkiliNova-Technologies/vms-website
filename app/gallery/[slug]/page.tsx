import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Images } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GalleryImageGrid from "@/components/gallery/GalleryImageGrid";
import {
  galleryCollections,
  getGalleryCollection,
} from "@/lib/site-data";

interface GalleryCollectionPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return galleryCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: GalleryCollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getGalleryCollection(slug);

  if (!collection) return {};

  return {
    title: `${collection.title} | Victoria Montessori School`,
    description: collection.description,
  };
}

export default async function GalleryCollectionPage({
  params,
}: GalleryCollectionPageProps) {
  const { slug } = await params;
  const collection = getGalleryCollection(slug);

  if (!collection || collection.images.length === 0) notFound();

  const coverImage =
    collection.images.find((image) => image.src === collection.coverImage) ??
    collection.images[0];

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Gallery"
          title={collection.title}
          description={collection.description}
          image={coverImage.src}
          breadcrumb={collection.title}
        />

        <section className="section-space">
          <div className="container-page">
            <Link
              href="/gallery"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Gallery
            </Link>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-4 sm:mt-10">
              <div>
                <p className="eyebrow">Collection</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                  {collection.title}
                </h2>
              </div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                <Images className="h-5 w-5 text-primary-600" aria-hidden="true" />
                {collection.images.length} {collection.images.length === 1 ? "image" : "images"}
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <GalleryImageGrid images={collection.images} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
