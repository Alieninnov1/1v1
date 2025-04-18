
// Ensure the types are exported
export type DataSource = {
  id: string;
  name: string;
  status: "active" | "idle" | "error";
  lastUpdated: string;
};

export type ScrapedData = {
  topic: string;
  keywords: string[];
  volume: number;
  trends: "up" | "down" | "stable";
  source: string;
};

export type DataScraperProps = {
  onDataUpdate?: (data: ScrapedData[]) => void;
  isCompact?: boolean;
};
