import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { Country } from './game.dto';
import { Question } from './game.dto';
import { CountryMetric } from './game.dto';
import { randomInt } from 'crypto';



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

async getCountryMetric(
  countryName: string, metricKey: string,
): Promise<CountryMetric | null> {

  const questionRes = await this.supabase.getPool().query(
    `SELECT label, column_key, unit 
     FROM questions 
     WHERE column_key = $1`,
    [metricKey],
  );
  const question = questionRes.rows[0];
  if (!question) return null;

  const column = question.column_key;

const allowedColumns = [
  'military_budget',
  'population',
  'avg_age',
  'beer_consumption',
  'happiness_score',
  'area_km2',
  'num_billionaires',
  'minimum_wage',
  'big_mac_price',
  'avg_house_price',
  'unemployment_rate',
  'life_expectancy',
  'birth_rate',
  'avg_temperature',
  'tourist_arrivals',
  'obesity_rate',
  'road_length_km',
  'num_airports',
  'avg_monthly_salary',
  'cost_of_living_index',
  'house_price_income_ratio',
  'gasoline_price',
  'gold_reserves',
  'highest_peak_m',
  'air_pollution_pm25',
  'coffee_consumption',
  'wine_consumption',
  'olympic_medals_total',
  'num_mcdonalds',
  'avg_height_cm',
  'chocolate_consumption',
];
  if (!allowedColumns.includes(column)) {
    throw new Error(`Invalid metric: ${column}`);
  }

 
  const result = await this.supabase.getPool().query(
    `SELECT name, ${column} AS value
     FROM countries
     WHERE name = $1`,
    [countryName],
  );

  const row = result.rows[0];
  if (!row) return null;

  return {
    country: row.name,
    value: row.value,
    unit: question.unit,
    label: question.label,
  };
}

async getRandomQuestion(): Promise<Question|null>{
  const result = await this.supabase.getPool().query('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1');
  return result.rows[0] ?? null;
}
  
}