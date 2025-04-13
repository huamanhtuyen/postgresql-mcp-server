interface ConnectionConfig {
  connectionString: string;
  ssl: {
    rejectUnauthorized: boolean;
  };
}

// Cấu hình kết nối PostgreSQL
export const defaultConnection: ConnectionConfig = {
  connectionString: 'postgresql://postgres:Linhsan@1712@db.hxetbhwcaqjfmfpnaiiq.supabase.co:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
};

// Hàm trợ giúp để lấy connection string
export function getConnectionString(userConnectionString?: string): string {
  return userConnectionString || defaultConnection.connectionString;
} 