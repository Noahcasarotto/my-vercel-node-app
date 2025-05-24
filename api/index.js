// api/index.js
// Runs as a Vercel Serverless Function.
//   - Each request gets its own isolated instance
//   - Cold start ≈ 50 ms on Node 18

/**
 * @param {import('@vercel/node').VercelRequest}  req
 * @param {import('@vercel/node').VercelResponse} res
 */
export default async function handler(req, res) {
    // Query example:  /api?name=Alice
    const { name = 'World' } = req.query;
  
    res.status(200).json({
      greeting: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
    });
  }
  