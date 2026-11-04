export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NEXT_PUBLIC_MOCK_API === 'true') {
    console.log('Mocking API enabled');
    const { makeServer } = await import('./mocks/server');
    const server = await makeServer();
    server.listen({
      onUnhandledFrame: 'bypass',
    });
    console.log('MSW server listening');
  }
}
