import 'dotenv/config';
import { OpenRouter } from '@openrouter/sdk';

const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY
});

const response = await client.responses.send({
  responsesRequest: {
    model: process.env.MODEL_WORKER!.split(',')[0],
    input: [{ role: 'user', content: 'Say hello in one sentence.' }],
    stream: false,
  },
});

const message = response.output.find((item) => item.type === 'message');
console.log(message?.content.find((part) => part.type === 'output_text')?.text);
console.log(response.usage);

