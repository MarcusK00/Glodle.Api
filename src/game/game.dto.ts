import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  flag_url!: string;

  @Field({ nullable: true })
  region!: string;

  @Field(() => Int, { nullable: true })
  population!: number;

  @Field(() => Float, { nullable: true })
  avg_age!: number;

  @Field(() => Float, { nullable: true })
  happiness_score!: number;

  @Field(() => Float, { nullable: true })
  beer_consumption!: number;

  @Field(() => Float, { nullable: true })
  military_budget!: number;

  @Field(() => Float, { nullable: true })
  area_km2!: number;

  @Field(() => Float, { nullable: true })
  num_billionaires!: number;

  @Field(() => Float, { nullable: true })
  minimum_wage!: number;

  @Field(() => Float, { nullable: true })
  big_mac_price!: number;

  @Field(() => Float, { nullable: true })
  avg_house_price!: number;

  @Field(() => Float, { nullable: true })
  unemployment_rate!: number;

  @Field(() => Float, { nullable: true })
  life_expectancy!: number;

  @Field(() => Float, { nullable: true })
  birth_rate!: number;

  @Field(() => Float, { nullable: true })
  avg_temperature!: number;

  @Field(() => Float, { nullable: true })
  tourist_arrivals!: number;

  @Field(() => Float, { nullable: true })
  obesity_rate!: number;

  @Field(() => Float, { nullable: true })
  road_length_km!: number;

  @Field(() => Float, { nullable: true })
  num_airports!: number;

  @Field(() => Float, { nullable: true })
  avg_monthly_salary!: number;

  @Field(() => Float, { nullable: true })
  cost_of_living_index!: number;

  @Field(() => Float, { nullable: true })
  house_price_income_ratio!: number;

  @Field(() => Float, { nullable: true })
  gasoline_price!: number;

  @Field(() => Float, { nullable: true })
  gold_reserves!: number;

  @Field(() => Float, { nullable: true })
  highest_peak_m!: number;

  @Field(() => Float, { nullable: true })
  air_pollution_pm25!: number;

  @Field(() => Float, { nullable: true })
  coffee_consumption!: number;

  @Field(() => Float, { nullable: true })
  wine_consumption!: number;

  @Field(() => Float, { nullable: true })
  olympic_medals_total!: number;

  @Field(() => Float, { nullable: true })
  num_mcdonalds!: number;

  @Field(() => Float, { nullable: true })
  avg_height_cm!: number;

  @Field(() => Float, { nullable: true })
  chocolate_consumption!: number;
}


@ObjectType()
export class Question {
  @Field()
  id!: string;

  @Field()
  label!: string;

  @Field({ nullable: true })
  column_key!: string;

  @Field({ nullable: true })
  unit!: string;

  @Field({ nullable: true })
  display_format!: string;

  @Field({ nullable: true })
  is_active!: boolean;
}

@ObjectType()
export class CountryMetric {
  @Field()
  country!: string;

  @Field(() => Float, { nullable: true })
  value!: number;

  @Field({ nullable: true })
  unit!: string;

  @Field()
  label!: string;
}

