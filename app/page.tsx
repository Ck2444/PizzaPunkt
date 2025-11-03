import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductGroupList } from '@/components/shared/product-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Alle Pizzen" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14px">
        <div className="flex gap-[60px]">
          {/* Filers */}

          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Product list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Pizzen"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 2,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 3,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 4,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 5,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 6,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 7,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                ]}
              />

              <ProductGroupList
                title="Kombos"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 2,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 3,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 4,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 5,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 6,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                  {
                    id: 7,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://chowdeck.com/store/_next/image?url=https%3A%2F%2Ffiles.chowdeck.com%2Ffit-in%2F1200x675%2Fimages%2F2024%2F2024-05-08%2F8iCMsjgWw8lUJLUyaTlsq.png&w=3840&q=75',
                    price: 17,
                    items: [{ price: 17.99 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
