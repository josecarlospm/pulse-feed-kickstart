/** Sample fiction for Pulse Feed kickstart — never copy real publisher IP. */

export interface Story {
  readonly id: string;
  readonly category: string;
  readonly headline: string;
  readonly dek: string;
  readonly author: string;
  readonly publishedAt: string;
  readonly relativeTime: string;
}

export interface ThemedPackage {
  readonly id: string;
  readonly title: string;
  /** When true, package title uses accent (breaking / live). */
  readonly live?: boolean;
  readonly stories: readonly Story[];
}

export interface PulseFeedContent {
  readonly brand: string;
  readonly tagline: string;
  readonly nav: readonly { readonly label: string; readonly href: string }[];
  readonly featured: Story & { readonly imageAlt: string };
  readonly river: readonly Story[];
  readonly packages: readonly ThemedPackage[];
  readonly footerLinks: readonly { readonly label: string; readonly href: string }[];
}

export const PULSE_FEED_CONTENT: PulseFeedContent = {
  brand: 'Pulse Feed',
  tagline: 'Tech signals for people who ship.',
  nav: [
    { label: 'AI', href: '#river' },
    { label: 'Gadgets', href: '#gadgets' },
    { label: 'Policy', href: '#policy' },
    { label: 'Chips', href: '#river' },
  ],
  featured: {
    id: 'lead-1',
    category: 'Chips',
    headline: 'Edge NPUs stop pretending they are GPUs',
    dek: 'Three silicon houses bet on on-device inference that survives airplane mode — and a power budget under 8 watts.',
    author: 'Mira Chen',
    publishedAt: '2026-10-22T14:00:00Z',
    relativeTime: '6h ago',
    imageAlt: 'Dim newsroom desk with stacked monitors casting cool light across a keyboard',
  },
  river: [
    {
      id: 'r1',
      category: 'AI',
      headline: 'Open weights, closed evals: labs argue over what “public” means',
      dek: 'A weekend dump of mid-size models arrived with missing training cards and opaque contamination tests.',
      author: 'Jonah Hale',
      publishedAt: '2026-10-22T12:30:00Z',
      relativeTime: '8h ago',
    },
    {
      id: 'r2',
      category: 'Gadgets',
      headline: 'Foldable phones finally ship with replaceable outer glass',
      dek: 'Two OEMs quietly add modular display kits — repair shops cheer, carriers shrug.',
      author: 'Priya Nair',
      publishedAt: '2026-10-22T10:00:00Z',
      relativeTime: '10h ago',
    },
    {
      id: 'r3',
      category: 'Policy',
      headline: 'EU agent logging rule enters consultation without a schema',
      dek: 'Draft text demands “meaningful traces” for autonomous tools — engineers ask what that looks like in JSON.',
      author: 'Elena Vos',
      publishedAt: '2026-10-22T08:15:00Z',
      relativeTime: '12h ago',
    },
    {
      id: 'r4',
      category: 'AI',
      headline: 'Browser copilots start refusing to fill payment forms',
      dek: 'Default deny for checkout fields lands in three major agents after a string of wallet mishaps.',
      author: 'Sam Ortiz',
      publishedAt: '2026-10-21T22:00:00Z',
      relativeTime: '22h ago',
    },
    {
      id: 'r5',
      category: 'Chips',
      headline: 'HBM4 capacity race shifts to packaging yield, not raw bandwidth',
      dek: 'Foundries say the bottleneck is now stacking, not DRAM die size.',
      author: 'Kenji Morita',
      publishedAt: '2026-10-21T18:40:00Z',
      relativeTime: '1d ago',
    },
  ],
  packages: [
    {
      id: 'pkg-ai',
      title: 'This week in on-device AI',
      stories: [
        {
          id: 'p1',
          category: 'AI',
          headline: 'Whisper-class models run offline on mid-tier phones',
          dek: 'Latency drops below 200ms for short dictation once vendors ship unified NPU drivers.',
          author: 'Asha Reddy',
          publishedAt: '2026-10-21T16:00:00Z',
          relativeTime: '1d ago',
        },
        {
          id: 'p2',
          category: 'AI',
          headline: 'Tool-use sandboxes get a shared allowlist format',
          dek: 'Four agent frameworks agree on a YAML surface for filesystem and network scopes.',
          author: 'Leo Park',
          publishedAt: '2026-10-21T11:20:00Z',
          relativeTime: '1d ago',
        },
        {
          id: 'p3',
          category: 'Gadgets',
          headline: 'Earbuds that transcribe meetings without a phone nearby',
          dek: 'Local speech stack lives on the buds; the companion app only syncs transcripts later.',
          author: 'Nina Brooks',
          publishedAt: '2026-10-20T20:00:00Z',
          relativeTime: '2d ago',
        },
      ],
    },
    {
      id: 'pkg-policy',
      title: 'Live: Policy desk',
      live: true,
      stories: [
        {
          id: 'p4',
          category: 'Policy',
          headline: 'Export controls draft names “agent orchestration” as dual-use',
          dek: 'Lawyers scramble to separate chat UIs from autonomous workflow runners.',
          author: 'Elena Vos',
          publishedAt: '2026-10-22T15:10:00Z',
          relativeTime: '5h ago',
        },
        {
          id: 'p5',
          category: 'Policy',
          headline: 'City broadband boards reject always-on camera side deals',
          dek: 'Municipal fiber RFPs start banning bundled surveillance add-ons by default.',
          author: 'Marcus Webb',
          publishedAt: '2026-10-22T09:00:00Z',
          relativeTime: '11h ago',
        },
      ],
    },
  ],
  footerLinks: [
    { label: 'About', href: '#about' },
    { label: 'Ethics', href: '#about' },
    { label: 'Contact', href: '#about' },
  ],
};

const BANNED_SUBSTRINGS = [
  'the verge',
  'verge.com',
  'vox media',
  'vml',
] as const;

/** Ensures sample copy stays clear of banned publisher IP for generators. */
export function assertSafeSampleCopy(content: PulseFeedContent): string[] {
  const blob = JSON.stringify(content).toLowerCase();
  return BANNED_SUBSTRINGS.filter((banned) => blob.includes(banned));
}

export function packageCount(content: PulseFeedContent): number {
  return content.packages.length;
}

export function riverCount(content: PulseFeedContent): number {
  return content.river.length;
}
