type PageParams = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: PageParams }) {
  const { id } = await params;
  return <p>Product {id}</p>;
}
