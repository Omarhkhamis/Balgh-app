import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  eslint: {
    // Skip lint errors during builds to unblock deployments; keep linting in CI/dev.
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);
