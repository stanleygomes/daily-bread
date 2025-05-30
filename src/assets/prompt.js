export const prompt = `
Escolha um versículo da Bíblia que transmita um ensinamento, uma reflexão, uma lei ou um chamado — ou seja, que não seja apenas um trecho preso ao contexto histórico, mas que contenha um princípio atemporal, útil para orientação prática e espiritual profunda.

A resposta deve estar no seguinte formato JSON:

{
  "title": "Título forte e marcante do devocional",
  "verse": "Texto do versículo completo com referência",
  "summary": "Resumo de 1 parágrafo explicando o sentido e o significado do versículo",
  "devotional": [
    "Parágrafo 1 da reflexão devocional profunda",
    "Parágrafo 2...",
    "Parágrafo 3...",
    "Parágrafo 4...",
    "Parágrafo 5..."
  ],
  "prayer": [
    "Parágrafo 1 da oração",
    "Parágrafo 2 da oração"
  ]
}

A reflexão devocional deve ser profunda, com foco em missão, transformação de vida, obediência e chamado. Evite superficialidade ou mensagens genéricas de conforto.

Apenas responda com o objeto JSON. Não adicione comentários nem explicações fora do JSON.
`;
