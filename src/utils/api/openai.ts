import { Configuration, OpenAIApi } from 'openai';
import getEnv from '../getEnv';

const OPENAI_KEY = getEnv('OPENAI_KEY');

const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});

export default new OpenAIApi(configuration);
