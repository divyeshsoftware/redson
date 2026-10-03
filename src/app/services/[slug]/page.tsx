import Contents from '@/components/service-details/Contents';
import CTA from '@/components/shared/cta/CTA';
import { IService } from '@/interface';
import { generateMetadata as createMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const services = getMarkDownData<IService>('src/data/services');
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const services = getMarkDownData<IService>('src/data/services');
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return createMetadata('Associate Division - Redson Group');
  }

  return createMetadata(
    `${service.title} - Redson Group`,
    service.description
  );
}

const ServiceDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Contents slug={slug} />
      <CTA
        className="dark:bg-background-6 bg-white my-16"
        badgeClass="hidden"
        ctaHeading="Inquire About This Division’s"
        spanText="Capabilities & Orders"
        description="Our technical and commercial teams are ready to provide product specifications, batch COAs, and competitive quotes."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Contact This Division"
      />
    </main>
  );
};

export default ServiceDetailPage;
