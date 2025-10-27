// Static pagefind implementation for static sites
const pagefindCode = `
export const search = (query) => {
  return Promise.resolve({ results: [] });
};

export const init = () => {
  return Promise.resolve();
};
`;

export async function GET() {
  return new Response(pagefindCode, {
    headers: {
      'content-type': 'application/javascript'
    }
  });
}