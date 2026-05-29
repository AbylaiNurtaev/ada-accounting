import dance1Blur from '../assets/cases/dance/dance-1-blur.webp'
import dance1Png from '../assets/cases/dance/dance-1.png'
import dance1 from '../assets/cases/dance/dance-1.webp'
import danceKidsBlur from '../assets/cases/dance/dance-kids-blur.webp'
import danceKidsJpg from '../assets/cases/dance/dance-kids.jpg'
import danceKids from '../assets/cases/dance/dance-kids.webp'
import homeBedroomBlur from '../assets/cases/home/home-bedroom-blur.webp'
import homeBedroomJpg from '../assets/cases/home/home-bedroom.jpg'
import homeBedroom from '../assets/cases/home/home-bedroom.webp'
import homeKitchenBlur from '../assets/cases/home/home-kitchen-blur.webp'
import homeKitchenJpg from '../assets/cases/home/home-kitchen.jpg'
import homeKitchen from '../assets/cases/home/home-kitchen.webp'
import home1Blur from '../assets/cases/home/home-1-blur.webp'
import home1Png from '../assets/cases/home/home-1.png'
import home1 from '../assets/cases/home/home-1.webp'
import kitchenHeroBlur from '../assets/cases/kitchen/kitchen-hero-blur.webp'
import kitchenHeroJpg from '../assets/cases/kitchen/kitchen-hero.jpg'
import kitchenHero from '../assets/cases/kitchen/kitchen-hero.webp'
import kitchen1Blur from '../assets/cases/kitchen/kitchen-1-blur.webp'
import kitchen1Png from '../assets/cases/kitchen/kitchen-1.png'
import kitchen1 from '../assets/cases/kitchen/kitchen-1.webp'
import kitchen2Blur from '../assets/cases/kitchen/kitchen-2-blur.webp'
import kitchen2Png from '../assets/cases/kitchen/kitchen-2.png'
import kitchen2 from '../assets/cases/kitchen/kitchen-2.webp'
import loungeHeroBlur from '../assets/cases/lounge/lounge-hero-blur.webp'
import loungeHeroJpg from '../assets/cases/lounge/lounge-hero.jpg'
import loungeHero from '../assets/cases/lounge/lounge-hero.webp'
import lounge1Blur from '../assets/cases/lounge/lounge-1-blur.webp'
import lounge1Png from '../assets/cases/lounge/lounge-1.png'
import lounge1 from '../assets/cases/lounge/lounge-1.webp'
import lounge2Blur from '../assets/cases/lounge/lounge-2-blur.webp'
import lounge2Png from '../assets/cases/lounge/lounge-2.png'
import lounge2 from '../assets/cases/lounge/lounge-2.webp'
import newYearTablewareHeroBlur from '../assets/cases/new-year-tableware/new-year-tableware-hero-blur.webp'
import newYearTablewareHeroJpg from '../assets/cases/new-year-tableware/new-year-tableware-hero.jpg'
import newYearTablewareHero from '../assets/cases/new-year-tableware/new-year-tableware-hero.webp'
import pahlavaHeroBlur from '../assets/cases/pahlava/pahlava-hero-blur.webp'
import pahlavaHeroJpg from '../assets/cases/pahlava/pahlava-hero.jpg'
import pahlavaHero from '../assets/cases/pahlava/pahlava-hero.webp'
import pahlava1Blur from '../assets/cases/pahlava/pahlava-1-blur.webp'
import pahlava1Png from '../assets/cases/pahlava/pahlava-1.png'
import pahlava1 from '../assets/cases/pahlava/pahlava-1.webp'
import pahlava2Blur from '../assets/cases/pahlava/pahlava-2-blur.webp'
import pahlava2Png from '../assets/cases/pahlava/pahlava-2.png'
import pahlava2 from '../assets/cases/pahlava/pahlava-2.webp'
import tablewareHeroBlur from '../assets/cases/tableware/tableware-hero-blur.webp'
import tablewareHeroJpg from '../assets/cases/tableware/tableware-hero.jpg'
import tablewareHero from '../assets/cases/tableware/tableware-hero.webp'
import tableware1Blur from '../assets/cases/tableware/tableware-1-blur.webp'
import tableware1Png from '../assets/cases/tableware/tableware-1.png'
import tableware1 from '../assets/cases/tableware/tableware-1.webp'
import voltHeroBlur from '../assets/cases/volt/volt-hero-blur.webp'
import voltHeroJpg from '../assets/cases/volt/volt-hero.jpg'
import voltHero from '../assets/cases/volt/volt-hero.webp'
import volt1Blur from '../assets/cases/volt/volt-1-blur.webp'
import volt1Png from '../assets/cases/volt/volt-1.png'
import volt1 from '../assets/cases/volt/volt-1.webp'

export type CaseImage = {
  src: string
  fallback: string
  placeholder: string
}

export type CaseStudy = {
  id: string
  title: string
  description: string
  image: string | CaseImage
  images?: Array<string | CaseImage>
  category: string
}

const caseImage = (src: string, fallback: string, placeholder: string): CaseImage => ({
  src,
  fallback,
  placeholder,
})

export const cases: CaseStudy[] = [
  {
    id: 'pahlava',
    title: 'Cafe Pahlava',
    description: 'Кафе «Pahlava», г. Астана — айдентика и digital для премиального гастрономического пространства.',
    image: caseImage(pahlavaHero, pahlavaHeroJpg, pahlavaHeroBlur),
    images: [
      caseImage(pahlavaHero, pahlavaHeroJpg, pahlavaHeroBlur),
      caseImage(pahlava1, pahlava1Png, pahlava1Blur),
      caseImage(pahlava2, pahlava2Png, pahlava2Blur),
    ],
    category: 'Food & Beverage',
  },
  {
    id: 'shishka-expo',
    title: 'ШИШКА EXPO',
    description: 'Лаундж-бар премиум-класса: атмосфера, брендинг и визуальная система.',
    image: caseImage(loungeHero, loungeHeroJpg, loungeHeroBlur),
    images: [
      caseImage(loungeHero, loungeHeroJpg, loungeHeroBlur),
      caseImage(lounge1, lounge1Png, lounge1Blur),
      caseImage(lounge2, lounge2Png, lounge2Blur),
    ],
    category: 'Lounge Bar',
  },
  {
    id: 'doner-dm',
    title: 'DONER DM',
    description: 'Кафе быстрого питания, г. Караганда. Фирменный стиль и сервис 24/7.',
    image:
      'https://images.unsplash.com/photo-1561758033-d89a9ad46332?auto=format&fit=crop&w=1200&q=80',
    images: [
      caseImage(kitchen1, kitchen1Png, kitchen1Blur),
      caseImage(kitchen2, kitchen2Png, kitchen2Blur),
    ],
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
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Geely_Monjaro.jpg',
    images: ['https://upload.wikimedia.org/wikipedia/commons/2/20/Geely_Monjaro.jpg'],
    category: 'Automotive',
  },
  {
    id: 'qazqar',
    title: 'QAZQAR',
    description: 'Агентство по прокату автомобилей — интерфейсы, бронирование и айдентика.',
    image: '/cases/geely-monjaro.jpg',
    category: 'Car Rental',
  },
  {
    id: 'neopreschool',
    title: 'NEOPRESCHOOL',
    description: 'Образовательный центр, г. Алматы — digital-экосистема для школы.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    category: 'Медицина',
  },
  {
    id: 'gang-bang',
    title: 'GANG BANG',
    description: 'Бар, г. Астана — визуальный стиль и промо.',
    image:
      'https://images.unsplash.com/photo-1566417713940-d0291177fb99?auto=format&fit=crop&w=1200&q=80',
    images: [
      caseImage(danceKids, danceKidsJpg, danceKidsBlur),
      caseImage(dance1, dance1Png, dance1Blur),
    ],
    category: 'HoReCa',
  },
  {
    id: 'adellina-iskakova',
    title: 'Adellina Iskakova',
    description: 'Личный бренд — контент, позиционирование и соцсети.',
    image: caseImage(danceKids, danceKidsJpg, danceKidsBlur),
    images: [caseImage(danceKids, danceKidsJpg, danceKidsBlur)],
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
    image: caseImage(homeBedroom, homeBedroomJpg, homeBedroomBlur),
    images: [
      caseImage(homeBedroom, homeBedroomJpg, homeBedroomBlur),
      caseImage(homeKitchen, homeKitchenJpg, homeKitchenBlur),
      caseImage(home1, home1Png, home1Blur),
    ],
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
    title: 'SAYURI FLOWERS',
    description: 'Flowers and Decor — флористика и оформление событий.',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80',
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
    image: caseImage(homeBedroom, homeBedroomJpg, homeBedroomBlur),
    images: [
      caseImage(homeBedroom, homeBedroomJpg, homeBedroomBlur),
      caseImage(homeKitchen, homeKitchenJpg, homeKitchenBlur),
      caseImage(home1, home1Png, home1Blur),
    ],
    category: 'Interior',
  },
  {
    id: 'volton',
    title: 'VOLTON',
    description: 'Электроника и энергетика — omnichannel и performance.',
    image: caseImage(voltHero, voltHeroJpg, voltHeroBlur),
    images: [
      caseImage(voltHero, voltHeroJpg, voltHeroBlur),
      caseImage(volt1, volt1Png, volt1Blur),
    ],
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
    image: caseImage(kitchenHero, kitchenHeroJpg, kitchenHeroBlur),
    images: [
      caseImage(kitchenHero, kitchenHeroJpg, kitchenHeroBlur),
      caseImage(kitchen1, kitchen1Png, kitchen1Blur),
      caseImage(kitchen2, kitchen2Png, kitchen2Blur),
    ],
    category: 'Retail Tech',
  },
  {
    id: 'demi-porselen',
    title: 'Demi Porselen',
    description: 'Посуда и фарфор — премиальный визуал и контент.',
    image: caseImage(tablewareHero, tablewareHeroJpg, tablewareHeroBlur),
    images: [
      caseImage(tablewareHero, tablewareHeroJpg, tablewareHeroBlur),
      caseImage(tableware1, tableware1Png, tableware1Blur),
    ],
    category: 'Lifestyle',
  },
  {
    id: 'new-year-tableware',
    title: 'New Year Tableware',
    description: 'Праздничная сервировка и предметная съёмка посуды с новогодними акцентами.',
    image: caseImage(newYearTablewareHero, newYearTablewareHeroJpg, newYearTablewareHeroBlur),
    images: [caseImage(newYearTablewareHero, newYearTablewareHeroJpg, newYearTablewareHeroBlur)],
    category: 'Tableware',
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
]
