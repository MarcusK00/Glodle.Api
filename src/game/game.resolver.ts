import { Resolver, Query, Args } from '@nestjs/graphql';
import { GameService } from './game.service';
import { Country } from './game.dto';
import { Question } from './game.dto';
import { CountryMetric } from './game.dto';

@Resolver()
export class GameResolver {
  constructor(private gameService: GameService) {}

  @Query(() => String)
  async ping(): Promise<string> {
    return 'pong';
  }

  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return this.gameService.getCountries();
  }

    @Query(() => [Question])
  async questions(): Promise<Question[]> {
    return this.gameService.getQuestions();
  }

  @Query(() => Country, { nullable: true })
async country(@Args('name') name: string): Promise<Country | null> {
  return this.gameService.getCountryByName(name);
}

@Query(() => CountryMetric, { nullable: true })
async countryMetric(
  @Args('name') name: string,
  @Args('metric') metric: string,
): Promise<CountryMetric | null> {
  return this.gameService.getCountryMetric(name, metric);
}

@Query(()=> Question, {nullable:true})
async randomQuestion(): Promise<Question | null>{
  return this.gameService.getRandomQuestion();
}

  
}