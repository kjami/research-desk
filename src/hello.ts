import 'dotenv/config';
import { OpenRouter } from '@openrouter/sdk';

const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY
});

const response = await client.responses.send({
  responsesRequest: {
    model: process.env.MODEL_WORKER!.split(',')[0],
    input: [{ role: 'user', content: 'Say hello in one sentence.' }],
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}
if (response.status !== 'completed') {
  throw new Error(response.error?.message ?? `Response ended as ${response.status}`);
}

const message = response.output.find((item) => item.type === 'message');
console.log(message?.content.find((part) => part.type === 'output_text')?.text);

