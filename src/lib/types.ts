export interface TitanRecord {
  id: number;
  name: string;
  repo: string;
  domain: string;
  styleId: number;
  styleName: string;
  styleCategory: 'Modern & Clean' | 'Expressive & Retro' | 'Tactile & Depth' | 'Spatial & Layout' | 'Experimental & Emerging';
  liveUrl: string;
  githubUrl: string;
  routes: string[];
  status: 'HTTP 200 OK' | 'QUEUED';
  description: string;
}

export interface DesignStyle {
  id: number;
  name: string;
  category: 'Modern & Clean' | 'Expressive & Retro' | 'Tactile & Depth' | 'Spatial & Layout' | 'Experimental & Emerging';
  characteristics: string[];
  titanName: string;
  titanRepo: string;
  primaryColors: string[];
}

export interface SystemMetrics {
  totalTitans: number;
  completedTitans: number;
  totalRoutes: number;
  verifiedRoutes: number;
  staticExportPassRate: number;
  uptimePct: number;
  organization: string;
}
