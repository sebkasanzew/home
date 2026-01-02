export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NEXT_PUBLIC_MOCK_API === 'true') {
    console.log('Mocking API enabled');
    const { server } = await import('./mocks/server');
    server.listen({
      onUnhandledRequest: 'bypass',
    });
    console.log('MSW server listening');
  }
}
