import NodeCache from 'node-cache';

// Cache with 1 hour TTL (3600 seconds)
// Indonesian stocks data doesn't change frequently, so 1 hour is reasonable
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

export default cache;
