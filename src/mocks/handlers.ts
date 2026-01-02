export async function createHandlers() {
  const { http } = await import('msw/core/http');

  return [
    http.post('https://api.anthropic.com/v1/messages', () => {
      const body = {
        id: 'msg_123',
        type: 'message',
        role: 'assistant',
        content: [
          {
            type: 'text',
            text: 'This is a mocked response from MSW.',
          },
        ],
        model: 'claude-3-5-sonnet-20241022',
        stop_reason: 'end_turn',
        stop_sequence: null,
        usage: {
          input_tokens: 10,
          output_tokens: 10,
        },
      };

      return new Response(JSON.stringify(body), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }),
  ];
}
