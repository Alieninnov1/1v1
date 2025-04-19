
export interface IPTimestamp {
  id: string;
  timestamp: string;
  hash: string;
  title: string;
  description: string;
}

export const generateIPTimestamp = (title: string, description: string): IPTimestamp => {
  const timestamp = new Date().toISOString();
  const id = Math.random().toString(36).substring(2, 15);
  
  // Simple hash generation for demo purposes
  const hash = btoa(`${title}-${timestamp}-${id}`);

  return {
    id,
    timestamp,
    hash,
    title,
    description
  };
};
