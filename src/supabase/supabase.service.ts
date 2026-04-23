import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Injectable()
export class SupabaseService {
  private pool: Pool;

constructor(private config: ConfigService) {
  const url = this.config.get<string>('DATABASE_URL')!;
  
  this.pool = new Pool({
    connectionString: url,
    ssl: { rejectUnauthorized: false },
  });
}

  getPool(): Pool {
    return this.pool;
  }
}