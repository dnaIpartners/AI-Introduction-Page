
import { Project, Service, Partner, NewsItem, Solution, LibraryItem, ProductItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'HYUNDAI GEN-AI COMMERCE',
    client: 'Hyundai Motor Company',
    category: 'AI Commerce',
    imageUrl: 'https://picsum.photos/seed/hyundai/1200/800',
    description: '생성형 AI를 활용한 개인화된 차량 추천 및 구매 경험 설계.'
  },
  {
    id: '02',
    title: 'SKT A. DOT CAMPAIGN',
    client: 'SK Telecom',
    category: 'AI Branding',
    imageUrl: 'https://picsum.photos/seed/skt/1200/800',
    description: 'AI 에이전트 서비스의 아이덴티티를 확립하는 인터랙티브 캠페인.'
  },
  {
    id: '03',
    title: 'SOLUM SMART RETAIL',
    client: 'SoluM',
    category: 'Data Intelligence',
    imageUrl: 'https://picsum.photos/seed/solum/1200/800',
    description: '매장 내 고객 행동 데이터를 AI로 분석하여 최적의 동선을 제안.'
  },
  {
    id: '04',
    title: 'LG ENERGY SOLUTION AX',
    client: 'LG Energy Solution',
    category: 'Corporate DX',
    imageUrl: 'https://picsum.photos/seed/lgen/1200/800',
    description: '복잡한 배터리 기술 데이터를 시각화 AI로 쉽게 전달하는 플랫폼.'
  },
  {
    id: '05',
    title: 'SSG HYPER-PERSONALIZATION',
    client: 'Shinsegae',
    category: 'Personalization',
    imageUrl: 'https://picsum.photos/seed/ssg/1200/800',
    description: '고객의 라이프스타일을 예측하여 실시간으로 콘텐츠를 생성/매칭.'
  }
];

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'AX STRATEGY',
    subItems: ['AI Transformation Roadmap', 'Tech Feasibility', 'Data Strategy']
  },
  {
    id: '02',
    title: 'GENERATIVE BRAND EX',
    subItems: ['AI Art Direction', 'Virtual Humans', 'Generative Campaign']
  },
  {
    id: '03',
    title: 'INTELLIGENT PLATFORM',
    subItems: ['LLM Integration', 'RAG System', 'AI Chatbot/Agent']
  },
  {
    id: '04',
    title: 'DATA & INSIGHTS',
    subItems: ['Customer Data Platform', 'Predictive Analytics', 'Behavior AI']
  },
  {
    id: '05',
    title: 'AUTOMATED MARKETING',
    subItems: ['Dynamic Creative (DCO)', 'AI Copywriting', 'Auto-CRM']
  },
  {
    id: '06',
    title: 'TECH & INFRA',
    subItems: ['Cloud Native', 'MLOps', 'System Architecture']
  }
];

export const PARTNERS: Partner[] = [
  { name: 'HYUNDAI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg' },
  { name: 'SK HYNIX', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/SK_Hynix_Logo.svg' },
  { name: 'NAVER CLOUD', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Naver_Logotype.svg' },
  { name: 'OPEN AI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'GOOGLE', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'SAMSUNG SDS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'KIA', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Kia_logo_2021.svg' },
  { name: 'LG CNS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg' }
];

export const NEWS_ITEMS: NewsItem[] = [
  // --- AX TRENDS ---
  {
    id: 'n1',
    date: 'SEP 10, 2023',
    category: 'AX TRENDS',
    title: 'Why AX (AI Experience) Matters Now',
    imageUrl: 'https://picsum.photos/seed/news1/1200/600',
    author: 'CEREWEN',
    readTime: '5 MIN READ',
    content: `
      <p>디지털 전환(DX)의 시대를 넘어, 이제는 AI 전환(AX)의 시대입니다. 브랜드는 단순한 정보 제공을 넘어, AI를 통해 사용자의 의도를 예측하고 선제적으로 대응하는 경험을 제공해야 합니다.</p>
    `
  },
  {
    id: 'n1-2',
    date: 'AUG 22, 2023',
    category: 'AX TRENDS',
    title: 'Generative UI: The End of Static Interfaces',
    imageUrl: 'https://picsum.photos/seed/genui/1200/600',
    author: 'Design Team',
    readTime: '6 MIN READ',
    content: `
      <p>사용자의 상황과 맥락에 따라 실시간으로 생성되는 인터페이스. Generative UI가 가져올 웹 디자인의 혁명적인 변화를 예측합니다.</p>
    `
  },
  {
    id: 'n1-3',
    date: 'AUG 05, 2023',
    category: 'AX TRENDS',
    title: 'Hyper-Personalization in 2025',
    imageUrl: 'https://picsum.photos/seed/hyper/1200/600',
    author: 'Strategy Lab',
    readTime: '4 MIN READ',
    content: `
      <p>초개인화를 넘어선 하이퍼 퍼스널라이제이션. AI가 사용자의 잠재적 니즈까지 파악하여 제안하는 미래의 커머스 경험을 소개합니다.</p>
    `
  },

  // --- AWARD ---
  {
    id: 'n2',
    date: 'SEP 12, 2023',
    category: 'AWARD',
    title: '2024 AI Creative Grand Prix Winner',
    imageUrl: 'https://picsum.photos/seed/news2/1200/600',
    author: 'MELVILE',
    readTime: '3 MIN READ',
    content: `
      <p>아이파트너즈가 국내 최초로 생성형 AI를 활용한 브랜드 필름으로 '2024 AI 크리에이티브 그랑프리'를 수상했습니다.</p>
    `
  },
  {
    id: 'n2-2',
    date: 'JUL 15, 2023',
    category: 'AWARD',
    title: 'Best AI Agency - Web Awards 2023',
    imageUrl: 'https://picsum.photos/seed/award2/1200/600',
    author: 'PR Team',
    readTime: '2 MIN READ',
    content: `
      <p>웹 어워드 코리아에서 '올해의 AI 에이전시' 부문 대상을 수상하며, 기술력과 크리에이티브의 융합을 인정받았습니다.</p>
    `
  },
  {
    id: 'n2-3',
    date: 'JUN 20, 2023',
    category: 'AWARD',
    title: 'Red Dot Design Award: Interface Design',
    imageUrl: 'https://picsum.photos/seed/award3/1200/600',
    author: 'Design Team',
    readTime: '3 MIN READ',
    content: `
      <p>자체 개발한 AI 대시보드 솔루션 'i-Data Insight'가 레드닷 디자인 어워드 인터페이스 디자인 부문 본상을 수상했습니다.</p>
    `
  },

  // --- TECH (Tech Logic) ---
  {
    id: 'n3',
    date: 'SEP 05, 2023',
    category: 'TECH',
    title: 'RAG System in Enterprise',
    imageUrl: 'https://picsum.photos/seed/news3/1200/600',
    author: 'AMANDA',
    readTime: '8 MIN READ',
    content: `
      <p>기업 내부 데이터 보안을 지키면서도 LLM의 강력한 성능을 활용하는 방법, 바로 RAG(검색 증강 생성) 기술입니다.</p>
    `
  },
  {
    id: 'n3-2',
    date: 'AUG 18, 2023',
    category: 'TECH',
    title: 'Optimizing LLM Latency for Real-time Services',
    imageUrl: 'https://picsum.photos/seed/latency/1200/600',
    author: 'Dev Ops',
    readTime: '7 MIN READ',
    content: `
      <p>실시간 서비스에 거대 언어 모델을 도입할 때 발생하는 지연 시간 문제. 캐싱 전략과 경량화 모델을 통해 해결한 사례를 공유합니다.</p>
    `
  },
  {
    id: 'n3-3',
    date: 'JUL 30, 2023',
    category: 'TECH',
    title: 'Vector Databases: The Memory of AI',
    imageUrl: 'https://picsum.photos/seed/vector/1200/600',
    author: 'Tech Lead',
    readTime: '6 MIN READ',
    content: `
      <p>AI에게 장기 기억을 부여하는 벡터 데이터베이스의 원리와 구축 방법, 그리고 이를 활용한 시맨틱 검색 시스템에 대해 알아봅니다.</p>
    `
  },

  // --- COMPANY NEWS ---
  {
    id: 'n4',
    date: 'AUG 28, 2023',
    category: 'COMPANY NEWS',
    title: 'IPARTNERS Open New HQ in Gangnam',
    imageUrl: 'https://picsum.photos/seed/news4/1200/600',
    author: 'ADMIN',
    readTime: '2 MIN READ',
    content: `
      <p>아이파트너즈가 강남 신사옥으로 이전하며 새로운 도약을 준비합니다. 창의적인 협업 공간과 최신 AI 연구 랩을 갖춘 새로운 공간에서 더 혁신적인 AX 솔루션을 만들어가겠습니다.</p>
    `
  },
  {
    id: 'n4-2',
    date: 'JUL 10, 2023',
    category: 'COMPANY NEWS',
    title: 'IPARTNERS Signs MOU with Global Tech Giant',
    imageUrl: 'https://picsum.photos/seed/mou/1200/600',
    author: 'Business Team',
    readTime: '3 MIN READ',
    content: `
      <p>글로벌 테크 기업과의 전략적 제휴를 통해 아시아 시장 내 AX 솔루션 공급을 확대하고 기술 교류를 강화합니다.</p>
    `
  },
  {
    id: 'n4-3',
    date: 'JUN 01, 2023',
    category: 'COMPANY NEWS',
    title: 'Series A Funding Secured for AX Platform',
    imageUrl: 'https://picsum.photos/seed/funding/1200/600',
    author: 'Finance',
    readTime: '4 MIN READ',
    content: `
      <p>자체 개발 중인 i-AX 플랫폼의 기술력을 인정받아 시리즈 A 투자를 성공적으로 유치했습니다. R&D 역량 강화에 집중할 계획입니다.</p>
    `
  },

  // --- CULTURE ---
  {
    id: 'n5',
    date: 'AUG 15, 2023',
    category: 'CULTURE',
    title: 'Work-Life Harmony at IPARTNERS',
    imageUrl: 'https://picsum.photos/seed/news5/1200/600',
    author: 'PEOPLE TEAM',
    readTime: '4 MIN READ',
    content: `
      <p>우리는 단순히 열심히 일하는 것이 아니라, 몰입하여 즐겁게 일하는 문화를 지향합니다. 자율 출퇴근제, 리모트 워크, 그리고 무제한 도서 지원까지. 아이파트너즈의 기업 문화를 소개합니다.</p>
    `
  },
  {
    id: 'n5-2',
    date: 'JUL 25, 2023',
    category: 'CULTURE',
    title: 'Annual Hackathon: Building the Future',
    imageUrl: 'https://picsum.photos/seed/hackathon/1200/600',
    author: 'Culture Team',
    readTime: '3 MIN READ',
    content: `
      <p>전사 직원이 참여하여 AI를 활용한 사이드 프로젝트를 진행하는 연례 해커톤. 올해의 우승작과 그 열기 넘치는 현장을 공개합니다.</p>
    `
  },
  {
    id: 'n5-3',
    date: 'JUN 15, 2023',
    category: 'CULTURE',
    title: 'Employee Spotlight: The AI Research Team',
    imageUrl: 'https://picsum.photos/seed/spotlight/1200/600',
    author: 'People Team',
    readTime: '5 MIN READ',
    content: `
      <p>아이파트너즈의 기술 혁신을 주도하는 AI 리서치 팀. 그들이 일하는 방식과 문제 해결 과정을 인터뷰했습니다.</p>
    `
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: '01',
    name: 'i-Consultant',
    desc: 'UX 진단 보고서, 전략 컨설팅 리포트',
    sub: 'UX Audit 15종',
    imageUrl: 'https://picsum.photos/seed/consultant/1200/800',
    content: `...`
  },
  {
    id: '02',
    name: 'i-Data Insight',
    desc: '데이터 기반 성과 분석 및 UX 개선 가이드',
    sub: 'Insight 로직',
    imageUrl: 'https://picsum.photos/seed/datainsight/1200/800',
    content: `...`
  },
  {
    id: '03',
    name: 'i-Intelligence',
    desc: '제안서 전략 파트, 서비스 기획서',
    sub: '표준 기획 템플릿',
    imageUrl: 'https://picsum.photos/seed/intelligence/1200/800',
    content: `...`
  },
  {
    id: '04',
    name: 'i-Creative Engine',
    desc: '일관된 톤앤매너 시안, 마케팅 에셋',
    sub: 'Style-Lock',
    imageUrl: 'https://picsum.photos/seed/creative/1200/800',
    content: `...`
  },
  {
    id: '05',
    name: 'i-AutoDev',
    desc: 'Clean Code 검수 리포트, 퍼블리싱 가이드',
    sub: '보안 가이드라인',
    imageUrl: 'https://picsum.photos/seed/autodev/1200/800',
    content: `...`
  },
  {
    id: '06',
    name: 'i-Search Optimizer',
    desc: 'SEO/GEO/AEO 통합 리포트, 콘텐츠 가이드',
    sub: 'AEO 최적화 로직',
    imageUrl: 'https://picsum.photos/seed/optimizer/1200/800',
    content: `...`
  }
];

// --- KNOWLEDGE HUB MOCK DATA (AI PROMPT FOCUSED) ---

export const HUB_UI_UX_LIBRARY: LibraryItem[] = [
  {
    id: 'lib1',
    title: 'Hyper-Minimal Dashboard Kit',
    description: 'A data-centric dashboard system designed for high-density information display. Optimized for financial and analytics apps.',
    tag: 'FIGMA',
    imageUrl: 'https://picsum.photos/seed/uiux1/800/800'
  },
  {
    id: 'lib2',
    title: 'Glassmorphism 3D Icon Pack',
    description: 'A set of 120+ high-resolution 3D icons with frosted glass effects. Perfect for spatial UI and modern web.',
    tag: 'BLENDER/PNG',
    imageUrl: 'https://picsum.photos/seed/uiux2/800/800'
  },
  {
    id: 'lib3',
    title: 'Accessible Color Palette Generator',
    description: 'AI-powered color tool ensuring WCAG 2.1 compliance while maintaining brand aesthetic.',
    tag: 'WEB TOOL',
    imageUrl: 'https://picsum.photos/seed/uiux3/800/800'
  },
  {
    id: 'lib4',
    title: 'Motion UI Interaction Library',
    description: 'Production-ready Framer Motion components for React. Includes micro-interactions and page transitions.',
    tag: 'REACT',
    imageUrl: 'https://picsum.photos/seed/uiux4/800/800'
  }
];

export const HUB_PRODUCTS: ProductItem[] = [
  {
    id: 'z1',
    title: 'Midjourney V6 Style Guide',
    price: '$45.00',
    originalPrice: '$60.00',
    imageUrl: 'https://picsum.photos/seed/prod1/800/1000'
  },
  {
    id: 'z2',
    title: 'GPT-4 System Prompt Archive',
    price: '$30.00',
    originalPrice: '$45.00',
    imageUrl: 'https://picsum.photos/seed/prod2/800/1000'
  },
  {
    id: 'z3',
    title: 'Stable Diffusion LoRA Handbook',
    price: '$35.00',
    originalPrice: '$50.00',
    imageUrl: 'https://picsum.photos/seed/prod3/800/1000'
  },
  {
    id: 'z4',
    title: 'Prompt Engineering for Developers',
    price: '$40.00',
    originalPrice: '$55.00',
    imageUrl: 'https://picsum.photos/seed/prod4/800/1000'
  }
];

export const HUB_EDITORS_PICK: NewsItem[] = [
  {
    id: 'ep1',
    date: 'OCT 12, 2024',
    category: 'PROMPT DESIGN',
    title: 'Structuring Context: The Anatomy of a Perfect System Prompt',
    content: `
      <h3>Introduction to System Prompts</h3>
      <p>A system prompt is the foundational instruction set that governs the behavior of an AI model. Unlike standard user prompts, system prompts establish the persona, constraints, and output format before the conversation even begins.</p>
      <p>In this article, we dissect the structure of high-performing system prompts used in enterprise applications.</p>
      <h4>Key Components</h4>
      <ul>
        <li><strong>Role Definition:</strong> Establishing "Who" the AI is.</li>
        <li><strong>Task Boundaries:</strong> Defining what the AI should NOT do.</li>
        <li><strong>Output Formatting:</strong> Specifying JSON, Markdown, or plain text structures.</li>
      </ul>
    `,
    imageUrl: 'https://picsum.photos/seed/ep1/800/1000',
    author: 'AX Research Team',
    readTime: '7 MIN READ'
  },
  {
    id: 'ep2',
    date: 'OCT 08, 2024',
    category: 'GENERATIVE ART',
    title: 'Controlling Consistency in AI Character Design with Seeds',
    content: `
      <p>One of the biggest challenges in generative art is maintaining character consistency across different scenes and poses. This guide explores advanced techniques using random seeds and control nets.</p>
      <p>We demonstrate how to lock facial features while changing clothing, lighting, and environments, essential for creating AI-generated storyboards and brand mascots.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/ep2/800/1000',
    author: 'Design Lab',
    readTime: '5 MIN READ'
  },
  {
    id: 'ep3',
    date: 'OCT 05, 2024',
    category: 'LLM STRATEGY',
    title: 'Zero-Shot vs Few-Shot: Optimizing Token Usage for Business',
    content: `
      <p>When integrating LLMs into business APIs, cost and latency are critical factors. We compare Zero-Shot prompting (asking without examples) versus Few-Shot prompting (providing examples).</p>
      <p>Our benchmarks show that while Few-Shot improves accuracy by 40% in complex tasks, it increases token consumption. We propose a hybrid strategy for optimal ROI.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/ep3/800/1000',
    author: 'Tech Lead',
    readTime: '10 MIN READ'
  },
  {
    id: 'ep4',
    date: 'SEP 28, 2024',
    category: 'AI ETHICS',
    title: 'Mitigating Hallucinations: Grounding Prompts with RAG',
    content: `
      <p>AI Hallucinations—confidently stated false information—pose a risk to corporate credibility. Retrieval-Augmented Generation (RAG) is the industry standard solution.</p>
      <p>This piece explains how to architect a RAG pipeline that forces the model to cite sources from your internal knowledge base, effectively eliminating fabricated facts.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/ep4/800/1000',
    author: 'AI Ethics Board',
    readTime: '6 MIN READ'
  }
];
