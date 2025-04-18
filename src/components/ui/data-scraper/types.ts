
export interface DataSource {
  id: string;
  name: string;
  status: "active" | "idle" | "error";
  lastUpdated: string;
}

export interface ScrapedData {
  topic: string;
  keywords: string[];
  volume: number;
  trends: "up" | "down" | "stable";
  source: string;
}

export interface DataScraperProps {
  onDataUpdate?: (data: ScrapedData[]) => void;
  isCompact?: boolean;
}
