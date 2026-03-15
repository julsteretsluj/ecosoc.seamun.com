/**
 * SEAMUN committee list for the committee wheel.
 * - isCurrent: true = this site (ECOSOC); "Enter profile" stays here.
 * - href: external URL for other committees; "Visit site" redirects there.
 */
export interface Committee {
  id: string;
  name: string;
  shortName?: string;
  href?: string;
  isCurrent: boolean;
  /** Logo path under public/committee-logos/ (e.g. unhrc.png) */
  logo?: string;
}

export const SEAMUN_COMMITTEES: Committee[] = [
  { id: "unhrc", name: "UN Human Rights Council", shortName: "UNHRC", href: "https://unhrc.seamun.com", isCurrent: false, logo: "unhrc.png" },
  { id: "who", name: "World Health Organization", shortName: "WHO", href: "https://who.seamun.com", isCurrent: false, logo: "who.png" },
  { id: "unsc", name: "UN Security Council", shortName: "UNSC", href: "https://unsc.seamun.com", isCurrent: false, logo: "unsc.png" },
  { id: "disec", name: "Disarmament and International Security", shortName: "DISEC", href: "https://disec.seamun.com", isCurrent: false, logo: "disec.png" },
  { id: "fwc", name: "Future World Council", shortName: "FWC", href: "https://fwc.seamun.com", isCurrent: false, logo: "fwc.png" },
  { id: "press", name: "Press Corps", shortName: "Press Corps", href: "https://press.seamun.com", isCurrent: false, logo: "press.png" },
  { id: "unwomen", name: "UN Women", shortName: "UN Women", href: "https://unwomen.seamun.com", isCurrent: false, logo: "unwomen.png" },
  { id: "unodc", name: "UN Office on Drugs and Crime", shortName: "UNODC", href: "https://unodc.seamun.com", isCurrent: false, logo: "unodc.png" },
  { id: "interpol", name: "Interpol", shortName: "Interpol", href: "https://interpol.seamun.com", isCurrent: false, logo: "interpol.png" },
  { id: "ecosoc", name: "Economic and Social Council", shortName: "ECOSOC", isCurrent: true, logo: "ecosoc.png" },
];
