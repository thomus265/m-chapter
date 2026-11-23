export type GenderKey = 'w' | 'm';
export type ColourKey = 'espresso' | 'caramel' | 'sand' | 'ivory' | 'noir';

export interface PaletteSwatch {
  key: ColourKey;
  name: string;
  hex: string;
}

export interface LookbookItem {
  id: string;
  src: string;
  g: GenderKey;
  c: ColourKey[];
  caption: string;
}

export interface HairCard {
  numeral: string;
  title: string;
  description: string;
}

export const EVENT_INFO = {
  title: 'The M Chapter',
  eyebrow: 'You’re invited to celebrate',
  scriptLine: 'Mpho’s Birthday',
  date: '13 December 2026',
  time: '6pm till late',
  venue: 'New Dawn Events Center',
  note: 'Strictly by invitation, no plus one. Please confirm by 8 December.',
  host: 'Mpho',
  phoneDisplay: '0993 626 013',
  phoneHref: 'tel:+265993626013',
  whatsappHref:
    'https://wa.me/265993626013?text=Hello%20Mpho%2C%20I%E2%80%99m%20confirming%20my%20attendance%20for%20The%20M%20Chapter%20on%2013%20December%202026.',
  portraitSrc: '/assets/aistudio/IMG_1925_07c1ce2a.JPG',
} as const;

export const PALETTE_SWATCHES: PaletteSwatch[] = [
  { key: 'espresso', name: 'Espresso', hex: '#5C3A26' },
  { key: 'caramel', name: 'Caramel', hex: '#B58A5F' },
  { key: 'sand', name: 'Sand', hex: '#EBD5B8' },
  { key: 'ivory', name: 'Ivory', hex: '#FBF6EC' },
  { key: 'noir', name: 'Noir', hex: '#0E0C0B' },
];

export const HAIR_CARDS: HairCard[] = [
  {
    numeral: '01',
    title: 'Wig Installation',
    description:
      'Seamless frontal or closure installation finished sleek and straight, softly waved, or tucked cleanly behind the ears.',
  },
  {
    numeral: '02',
    title: 'Ponytail or Freeze',
    description:
      'Sculpted high or low ponytail with a smooth crown, refined edges, and crisp freeze hold to frame the neckline.',
  },
  {
    numeral: '03',
    title: 'Clean Black Braids',
    description:
      'Ultra-neat jet-black knotless braids or stitch cornrows worn straight down or gathered into a composed low bun.',
  },
];

// 22 uploaded lookbook photographs (10 women, 12 men)
export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'w-01',
    src: '/assets/aistudio/images__17__7bf479ab.jpeg',
    g: 'w',
    c: ['espresso'],
    caption: 'Draped espresso satin gowns with subtle side slits',
  },
  {
    id: 'm-01',
    src: '/assets/aistudio/images__11__68a51f57.jpeg',
    g: 'm',
    c: ['sand', 'ivory'],
    caption: 'Sand blazer, open ivory collar & taupe trousers',
  },
  {
    id: 'w-02',
    src: '/assets/aistudio/images__12__c82cb12e.jpeg',
    g: 'w',
    c: ['espresso'],
    caption: 'Cowl-back espresso column & sleek low chignon',
  },
  {
    id: 'm-02',
    src: '/assets/aistudio/images__9__7ae60c2b.jpeg',
    g: 'm',
    c: ['caramel', 'noir'],
    caption: 'Caramel tailored jacket over noir knit & trousers',
  },
  {
    id: 'w-03',
    src: '/assets/aistudio/images__14__12e5f76d.jpeg',
    g: 'w',
    c: ['ivory'],
    caption: 'Strapless ivory column midi & pearl drop pendant',
  },
  {
    id: 'm-03',
    src: '/assets/aistudio/images__10__4eeabf8d.jpeg',
    g: 'm',
    c: ['sand', 'ivory'],
    caption: 'Double-breasted sand suit & crisp ivory shirt',
  },
  {
    id: 'w-04',
    src: '/assets/aistudio/IMG_6781_f22c9d99.webp',
    g: 'w',
    c: ['caramel'],
    caption: 'Draped caramel satin one-shoulder scarf gown',
  },
  {
    id: 'm-04',
    src: '/assets/aistudio/images__4__cd4f0896.jpeg',
    g: 'm',
    c: ['espresso', 'ivory'],
    caption: 'Espresso blazer styled with crisp ivory trousers',
  },
  {
    id: 'w-05',
    src: '/assets/aistudio/images__13__46422628.jpeg',
    g: 'w',
    c: ['sand'],
    caption: 'Champagne sand ribbed midi & delicate strappy heels',
  },
  {
    id: 'm-05',
    src: '/assets/aistudio/images__8__d0f67cd9.jpeg',
    g: 'm',
    c: ['caramel', 'noir'],
    caption: 'Structured caramel blazer with noir shirt & trousers',
  },
  {
    id: 'w-06',
    src: '/assets/aistudio/images__15__edc284b7.jpeg',
    g: 'w',
    c: ['espresso'],
    caption: 'Ruched espresso evening gowns with strappy heels',
  },
  {
    id: 'm-06',
    src: '/assets/aistudio/images__2__b6a5f566.jpeg',
    g: 'm',
    c: ['caramel', 'ivory'],
    caption: 'Double-breasted caramel suit & ivory poplin shirt',
  },
  {
    id: 'w-07',
    src: '/assets/aistudio/710k5YRfQqL_ef464b72.jpg',
    g: 'w',
    c: ['caramel'],
    caption: 'Sleek caramel slit silhouette & minimalist heels',
  },
  {
    id: 'm-07',
    src: '/assets/aistudio/images__3__ef6df14b.jpeg',
    g: 'm',
    c: ['espresso', 'noir', 'ivory'],
    caption: 'Espresso jacket, white shirt, noir trousers & fedora',
  },
  {
    id: 'w-08',
    src: '/assets/aistudio/17836542634870547a347528947a13cb20fc3cacad_thumbnail_750x999_a113790c.webp',
    g: 'w',
    c: ['sand', 'espresso', 'ivory'],
    caption: 'Sand, espresso & ivory strapless midi dresses',
  },
  {
    id: 'm-08',
    src: '/assets/aistudio/images__5__2732bf67.jpeg',
    g: 'm',
    c: ['espresso', 'sand', 'ivory'],
    caption: 'Espresso tailoring paired with sand trousers',
  },
  {
    id: 'w-09',
    src: '/assets/aistudio/images__16__271f30b9.jpeg',
    g: 'w',
    c: ['caramel', 'sand'],
    caption: 'Caramel slip dress & champagne sand two-piece',
  },
  {
    id: 'm-09',
    src: '/assets/aistudio/967066433_02_adc3566a.webp',
    g: 'm',
    c: ['caramel', 'ivory'],
    caption: 'Caramel linen suiting with relaxed ivory shirt',
  },
  {
    id: 'w-10',
    src: '/assets/aistudio/images_6ad5b8e2.jpeg',
    g: 'w',
    c: ['espresso'],
    caption: 'Bias-cut espresso satin slip & metallic heels',
  },
  {
    id: 'm-10',
    src: '/assets/aistudio/ce12c1c48b57a393f7ddf750fe9d76d0_700baf7d.jpg',
    g: 'm',
    c: ['sand', 'espresso', 'ivory'],
    caption: 'Three-piece sand suit & deep espresso silk tie',
  },
  {
    id: 'm-11',
    src: '/assets/aistudio/images__7__6405d7e4.jpeg',
    g: 'm',
    c: ['caramel', 'noir'],
    caption: 'Warm caramel suit styled with noir button-down',
  },
  {
    id: 'm-12',
    src: '/assets/aistudio/images__6__c2f37447.jpeg',
    g: 'm',
    c: ['caramel', 'espresso'],
    caption: 'Tailored caramel two-piece & dark espresso shirt',
  },
];
