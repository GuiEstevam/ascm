import { CANONICAL_ORIGIN } from './site-config.js';

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Rua Turiassú, 390 – 14º andar – conj. 141 e 145',
  addressLocality: 'São Paulo',
  addressRegion: 'SP',
  postalCode: '05005-000',
  addressCountry: 'BR',
};

export function buildJsonLd() {
  const orgId = `${CANONICAL_ORIGIN}/#organization`;
  const logoUrl = `${CANONICAL_ORIGIN}/og-placeholder.svg`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'A.S. Couto & Monteiro Contadores Associados',
        alternateName: 'ASCM',
        url: `${CANONICAL_ORIGIN}/`,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
        },
        email: 'contato@ascm.com.br',
        telephone: '+55-11-3875-6050',
        address: postalAddress,
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${CANONICAL_ORIGIN}/#localbusiness`,
        name: 'A.S. Couto & Monteiro Contadores Associados',
        image: logoUrl,
        url: `${CANONICAL_ORIGIN}/`,
        email: 'contato@ascm.com.br',
        telephone: '+55-11-3875-6050',
        faxNumber: '+55-11-3875-6048',
        address: postalAddress,
        parentOrganization: { '@id': orgId },
      },
      {
        '@type': 'AccountingService',
        '@id': `${CANONICAL_ORIGIN}/#accounting`,
        name: 'Perícias contábeis e assistência técnica contábil — ASCM',
        url: `${CANONICAL_ORIGIN}/`,
        provider: { '@id': orgId },
        address: postalAddress,
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'São Paulo',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${CANONICAL_ORIGIN}/#professional`,
        name: 'Serviços profissionais contábeis e periciais — ASCM',
        url: `${CANONICAL_ORIGIN}/`,
        provider: { '@id': orgId },
        address: postalAddress,
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
      },
    ],
  };
}
