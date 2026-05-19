export type CaseStudy = {
  id: string
  title: string
  description: string
  image: string
  images?: string[]
  category: string
}

/** Превью: при необходимости замените URL на файлы из `/public/cases/`. */
export const cases: CaseStudy[] = [
  {
    id: 'pahlava',
    title: 'Cafe Pahlava',
    description: 'Кафе «Pahlava», г. Астана — айдентика и digital для премиального гастрономического пространства.',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    category: 'Food & Beverage',
  },
  {
    id: 'shishka-expo',
    title: 'ШИШКА EXPO',
    description: 'Лаундж-бар премиум-класса: атмосфера, брендинг и визуальная система.',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    category: 'Lounge Bar',
  },
  {
    id: 'doner-dm',
    title: 'DONER DM',
    description: 'Кафе быстрого питания, г. Караганда. Фирменный стиль и сервис 24/7.',
    image:
      'https://images.unsplash.com/photo-1561758033-d89a9ad46332?auto=format&fit=crop&w=1200&q=80',
    category: 'Fast Food',
  },
  {
    id: 'parking-detailing',
    title: 'Parking Detailing',
    description: 'Профессиональный детейлинг, г. Караганда — бренд и digital-присутствие.',
    image:
      'https://images.unsplash.com/photo-1607860108854-5fab24bac10c?auto=format&fit=crop&w=1200&q=80',
    category: 'Auto',
  },
  {
    id: 'miababy',
    title: 'MIABABY',
    description: 'Онлайн-магазин товаров для малышей: UX, контент и визуальная коммуникация.',
    image:
      'https://images.unsplash.com/photo-1515488043661-04fab204513e?auto=format&fit=crop&w=1200&q=80',
    category: 'E‑commerce',
  },
  {
    id: 'jansaya',
    title: 'САНАТОРИЙ ЖАНСАЯ',
    description: 'Санаторий в пос. Сарыагаш, ЮКО — премиальный оздоровительный комплекс.',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    category: 'Wellness',
  },
  {
    id: 'sapfirdent',
    title: 'sapfirdent',
    description: 'Сеть стоматологии г. Астана — комплексный digital и брендинг клиник.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    category: 'Стоматология',
  },
  {
    id: 'geely-orbis',
    title: 'Geely Astana (Orbis Auto)',
    description: 'Дилерский центр Geely в Астане — кампании, соцсети и медиа.',
    image: '/cases/geely-monjaro.jpg',
    category: 'Automotive',
  },
  {
    id: 'qazqar',
    title: 'QAZQAR',
    description: 'Агентство по прокату автомобилей — интерфейсы, бронирование и айдентика.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    category: 'Car Rental',
  },
  {
    id: 'neopreschool',
    title: 'NEOPRESCHOOL',
    description: 'Образовательный центр, г. Алматы — digital-экосистема для школы.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    category: 'Education',
  },
  {
    id: 'easy-turkche',
    title: 'EASY_TURKCHE',
    description: 'Онлайн-школа турецкого и английского — платформа и контент.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    category: 'EdTech',
  },
  {
    id: 'azmar-premium',
    title: 'AZMAR PREMIUM',
    description: 'Частная школа начальных классов, г. Караганда — бренд и коммуникации.',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    category: 'Education',
  },
  {
    id: 'neoclinic',
    title: 'NEOCLINIC',
    description: 'Клиника высшей медицины, г. Астана — digital и репутация.',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    category: 'Медицина',
  },
  {
    id: 'gang-bang',
    title: 'GANG BANG',
    description: 'Бар, г. Астана — визуальный стиль и промо.',
    image:
      'https://images.unsplash.com/photo-1566417713940-d0291177fb99?auto=format&fit=crop&w=1200&q=80',
    category: 'HoReCa',
  },
  {
    id: 'adellina-iskakova',
    title: 'Adellina Iskakova',
    description: 'Личный бренд — контент, позиционирование и соцсети.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
    category: 'Personal Brand',
  },
  {
    id: 'twinmos',
    title: 'TwinMOS',
    description: 'Магазин электроники — e‑commerce и digital-кампании.',
    image:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80',
    category: 'Electronics',
  },
  {
    id: 'otlichnaya-mebel',
    title: 'Отличная Мебель',
    description: 'Мебель и интерьер — каталог, визуал и продвижение.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    category: 'Furniture',
  },
  {
    id: 'asyl-pidjak',
    title: 'ASYL PIDJAK',
    description: 'Ерлер костюмдері — мужские костюмы премиум-сегмента.',
    image:
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
    category: 'Fashion',
  },
  {
    id: 'sayuri',
    title: 'SAYURI',
    description: 'Flowers and Decor — флористика и оформление событий.',
    image:
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80',
    category: 'Retail',
  },
  {
    id: 'm32-dental',
    title: 'M32 Dental Clinic',
    description: 'Стоматологическая клиника — сайт, бренд и лидогенерация.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    category: 'Healthcare',
  },
  {
    id: 'sarah-home',
    title: 'Sarah Home',
    description: 'Салон штор — премиальный каталог и digital.',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    category: 'Interior',
  },
  {
    id: 'volton',
    title: 'VOLTON',
    description: 'Электроника и энергетика — omnichannel и performance.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    category: 'Electronics',
  },
  {
    id: 'pro-cyber-club',
    title: 'PRO cyber club',
    description: 'Киберклуб — айдентика, сайт и комьюнити.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    category: 'Gaming',
  },
  {
    id: '4tech',
    title: '4TECH',
    description: 'Магазин электроники — digital-витрина и реклама.',
    image:
      'https://images.unsplash.com/photo-1550009158-9eb35e33960c?auto=format&fit=crop&w=1200&q=80',
    category: 'Retail Tech',
  },
  {
    id: 'demi-porselen',
    title: 'Demi Porselen',
    description: 'Посуда и фарфор — премиальный визуал и контент.',
    image:
      'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1200&q=80',
    category: 'Lifestyle',
  },
  {
    id: 'joy-gardens',
    title: 'JOY GARDENS',
    description: 'Ландшафтный дизайн — портфолио и лидогенерация.',
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    category: 'Landscaping',
  },
  {
    id: 'qazaq-shanyraq',
    title: 'QAZAQ SHANYRAQ',
    description: 'Мясной бутик — брендинг и digital-коммуникации.',
    image:
      'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=1200&q=80',
    category: 'Food Retail',
  },
  {
    id: 'amano-style',
    title: 'AMANO STYLE',
    description: 'Мода и стиль — lookbook и соцсети.',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    category: 'Fashion',
  },
  {
    id: 'dero',
    title: 'DERO',
    description: 'Мебельная компания — каталог и B2B-презентации.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    category: 'Furniture',
  },
  {
    id: 'zerkalo',
    title: 'ZERKALO COFFEE',
    description: 'Кофейня — отражение вкуса: бренд, меню и digital.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    category: 'Coffee',
  },
  {
    id: 'mr-b-academy',
    title: 'MRB Academy',
    description: 'Школа подготовки к IELTS — платформа и маркетинг.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    category: 'Education',
  },
  {
    id: 'happy-club',
    title: 'happy club',
    description: 'Магазин детских товаров — e‑commerce и контент.',
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80',
    category: 'Kids Retail',
  },
  {
    id: 'more-projects',
    title: 'И ещё многие другие проекты…',
    description:
      'Расширенное портфолио: от локальных брендов до федеральных кампаний — расскажем на встрече.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    category: 'Portfolio',
  },
]
