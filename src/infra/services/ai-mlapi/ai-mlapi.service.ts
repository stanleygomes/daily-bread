import { config } from '../../config/index.js';
import { Logger } from '../../logger/pino.logger.js';
import { IAIQueryService } from '../../../domain/port/services/ai-query.service.js';
import { BreadMessage } from '../../../domain/entities/bread-message.entity.js';
import { HttpClient } from '../../http/http-client.js';

const { apiUrl, apiKey, maxTokens } = config.services.aimlapi;
const model = config.services.aimlapi.models.text;

const http = new HttpClient(apiUrl);

export class AiMlApiService implements IAIQueryService {
  private logger = Logger.getLogger();

  async fetchText(prompt: string): Promise<BreadMessage> {
    const role = 'You are a pastor faithful to God and faithful to what is written in the Bible';

    try {
      const response = await http.post(
        '/v1/text/generate',
        {
          model: model,
          messages: [
            { role: "system", content: role },
            { role: "user", content: prompt }
          ],
          max_tokens: maxTokens,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.choices?.[0]?.message?.content || response;
    } catch (error: any) {
      this.logger.error(error)
      throw new Error('Failed to fetch text from aimlapi.com API');
    }
  }
}
