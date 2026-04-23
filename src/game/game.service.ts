import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { Country } from './game.dto';
import { Question } from './game.dto';

type CountryMetricResult = {
  key: string;
  value: number | null;
  unit: string | null;
  formatted: string;
};

@Injectable()
export class GameService {
  constructor(private supabase: SupabaseService) {}

  async getCountries(): Promise<Country[]> {
    const result = await this.supabase.getPool().query('SELECT * FROM countries');
    return result.rows;
  }

    async getQuestions(): Promise<Question[]> {
    const result = await this.supabase.getPool().query('SELECT * FROM questions');
    return result.rows;
  }

  async getCountryByName(name: string): Promise<Country | null> {
  const result = await this.supabase
    .getPool()
    .query('SELECT * FROM countries WHERE name = $1', [name]);

  return result.rows[0] ?? null;
}










  
}