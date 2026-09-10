/** Join a path to Astro `base` without missing or doubled slashes. */
export function withBase(path = ''): string {
	const base = import.meta.env.BASE_URL || '/';
	const normalizedBase = base.endsWith('/') ? base : `${base}/`;
	if (!path || path === '/') return normalizedBase;
	return `${normalizedBase}${path.replace(/^\//, '')}`;
}
