
export type ReportCategory = 'initiative' | 'analytical' | 'study';

type LocalizedText = { ar: string; en: string; ku?: string };
type LocalizedTags = { ar: string[]; en: string[]; ku?: string[] };

export interface ReportItem {
    id: number;
    title: LocalizedText;
    date: string;
    description: LocalizedText;
    image?: string;
    fileUrl?: string; // URL to the PDF or external report
    author?: LocalizedText;
    tags?: LocalizedTags;
    category: ReportCategory;
}

export const reports: ReportItem[] = [
    {
        id: 1,
        title: {
            ar: 'خرائط الكراهية في الفضاء السوري: قراءة تحليلية في بيانات البلاغات الرقمية',
            en: 'Hate Maps in the Syrian Space: An Analytical Reading of Digital Reports Data'
        },
        date: '2025-09-01',
        description: {
            ar: 'أطلقت “مبادرة مكافحة خطاب العنف والكراهية” تقريرها “خرائط الكراهية في الفضاء السوري: قراءة تحليلية في بيانات البلاغات الرقمية”، الذي يستند إلى تحليل 250 بلاغًا وردت عبر منصة التبليغ خلال الفترة الممتدة بين 27 تموز و18 آب 2025. يوفر التقرير نظرة معمّقة إلى أنماط خطاب الكراهية المنتشر في الفضاء السوري، مع تتبّع مستوياته اللغوية، وتوزّعه الجغرافي، والفئات الأكثر استهدافًا.',
            en: 'The "Violence and Hate Speech Combat Initiative" launched its report "Hate Maps in the Syrian Space: An Analytical Reading of Digital Reports Data", based on the analysis of 250 reports received via the reporting platform between July 27 and August 18, 2025. The report provides an in-depth look at the patterns of hate speech spreading in the Syrian space, tracking its linguistic levels, geographic distribution, and most targeted groups.'
        },
        image: '/images/reports/q3-2025-cover.jpg',
        fileUrl: '/reports/hate_maps_syria_2025.pdf',
        tags: {
            ar: ['رصد', 'تقرير ربعي', '2025'],
            en: ['Monitoring', 'QuarterlyReport', '2025']
        },
        category: 'initiative'
    },
    {
        id: 2,
        title: {
            ar: 'كيف تُصنع السرديات الكارهة في السياق السوري: تحليل آليات صناعة الانقسام وخطاب الكراهية',
            en: 'How Hateful Narratives are Crafted in the Syrian Context: Analyzing Mechanisms of Division and Hate Speech'
        },
        date: '2025-08-20',
        description: {
            ar: 'دراسة بحثية معمقة تتناول العلاقة بين انتشار المعلومات المضللة وتصاعد التوترات الأهلية في المجتمعات المحلية.',
            en: 'An in-depth research study examining the relationship between the spread of disinformation and escalating civil tensions in local communities.'
        },
        image: '/images/reports/narratives-study.png',
        fileUrl: '#',
        tags: {
            ar: ['دراسة', 'معلومات مضللة', 'سلم أهلي'],
            en: ['Study', 'Disinformation', 'CivilPeace']
        },
        category: 'study'
    }
];
