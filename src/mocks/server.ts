export async function makeServer() {
  const { setupServer } = await import('msw/node');
  const { createHandlers } = await import('./handlers');
  const handlers = await createHandlers();

  return setupServer(...handlers);
}
