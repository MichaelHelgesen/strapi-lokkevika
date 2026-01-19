import type { Schema, Attribute } from '@strapi/strapi';

export interface HjemHero extends Schema.Component {
  collectionName: 'components_hjem_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
    Introtekst: Attribute.Text;
    Bilde: Attribute.Media & Attribute.Required;
  };
}

export interface HjemMenyoversikt extends Schema.Component {
  collectionName: 'components_hjem_menyoversikts';
  info: {
    displayName: 'Menyoversikt';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
  };
}

export interface HjemMotested extends Schema.Component {
  collectionName: 'components_hjem_motesteds';
  info: {
    displayName: 'M\u00F8tested';
    description: '';
  };
  attributes: {
    Tittel: Attribute.String;
    Tekst: Attribute.RichText;
    Bilde1: Attribute.Media & Attribute.Required;
    Bilde2: Attribute.Media & Attribute.Required;
    Bilde3: Attribute.Media & Attribute.Required;
    Bilde4: Attribute.Media & Attribute.Required;
    Bilde5: Attribute.Media & Attribute.Required;
  };
}

export interface HjemOmInnehaverne extends Schema.Component {
  collectionName: 'components_hjem_om_innehavernes';
  info: {
    displayName: 'Om innehaverne';
  };
  attributes: {
    Tittel: Attribute.String;
    Tekst: Attribute.RichText;
  };
}

export interface HjemReferanse extends Schema.Component {
  collectionName: 'components_hjem_referanses';
  info: {
    displayName: 'Referanse';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
    Bilde: Attribute.Media & Attribute.Required;
  };
}

export interface HjemReferanseoversikt extends Schema.Component {
  collectionName: 'components_hjem_referanseoversikts';
  info: {
    displayName: 'Referanseoversikt';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
  };
}

export interface HjemTjeneste extends Schema.Component {
  collectionName: 'components_hjem_tjenestes';
  info: {
    displayName: 'Tjeneste';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
    Beskrivelse: Attribute.Text;
    Ikon: Attribute.Media & Attribute.Required;
  };
}

export interface HjemTjenesteoversikt extends Schema.Component {
  collectionName: 'components_hjem_tjenesteoversikts';
  info: {
    displayName: 'Tjenesteoversikt';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
  };
}

export interface KalenderDato extends Schema.Component {
  collectionName: 'components_kalender_datoes';
  info: {
    displayName: 'Dato';
  };
  attributes: {
    Dato: Attribute.Integer;
    Tekst: Attribute.Text;
  };
}

export interface KomponenterBildeFullbredde extends Schema.Component {
  collectionName: 'components_komponenter_bilde_fullbreddes';
  info: {
    displayName: 'Bilde_fullbredde';
  };
  attributes: {
    Bilde: Attribute.Media & Attribute.Required;
  };
}

export interface KomponenterTekstEnspalte extends Schema.Component {
  collectionName: 'components_komponenter_tekst_enspaltes';
  info: {
    displayName: 'Tekst_enspalte';
  };
  attributes: {
    Tittel: Attribute.String;
    Tekst: Attribute.RichText;
  };
}

export interface KomponenterTopp extends Schema.Component {
  collectionName: 'components_komponenter_topps';
  info: {
    displayName: 'Topp';
    description: '';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
    Beskrivelse: Attribute.Text;
    Bakgrunnsbilde: Attribute.Media & Attribute.Required;
  };
}

export interface LeverandorerLeverandor extends Schema.Component {
  collectionName: 'components_leverandorer_leverandors';
  info: {
    displayName: 'Leverandor';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
    Tekst: Attribute.RichText;
    Lenke_til_leverandor: Attribute.String;
    Bilde: Attribute.Media & Attribute.Required;
  };
}

export interface MenyVare extends Schema.Component {
  collectionName: 'components_meny_vares';
  info: {
    displayName: 'vare';
    description: '';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
    Beskrivelse: Attribute.RichText;
    Pris: Attribute.Integer;
    Bilde: Attribute.Media;
  };
}

export interface MetadataMeta extends Schema.Component {
  collectionName: 'components_metadata_metas';
  info: {
    displayName: 'Meta';
    description: '';
  };
  attributes: {
    Metatittel: Attribute.String;
    Metabeskrivelse: Attribute.Text;
    Metabilde: Attribute.Media;
  };
}

export interface MetadataMetadata extends Schema.Component {
  collectionName: 'components_metadata_metadata';
  info: {
    displayName: 'metadata';
    icon: 'search';
  };
  attributes: {
    Metatittel: Attribute.String;
    Metabeskrivelse: Attribute.String;
    Metabilde: Attribute.Media;
  };
}

export interface OmBilderad extends Schema.Component {
  collectionName: 'components_om_bilderads';
  info: {
    displayName: 'Bilderad';
  };
  attributes: {
    Bilde1: Attribute.Media & Attribute.Required;
    Bilde2: Attribute.Media & Attribute.Required;
    Bilde3: Attribute.Media & Attribute.Required;
  };
}

export interface OmTekstMedSitat extends Schema.Component {
  collectionName: 'components_om_tekst_med_sitats';
  info: {
    displayName: 'Tekst_med_sitat';
  };
  attributes: {
    Tekst: Attribute.RichText;
    Sitat: Attribute.Text;
    Bilde: Attribute.Media;
    Venstrejustert: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface OmTekstPaBilde extends Schema.Component {
  collectionName: 'components_om_tekst_pa_bildes';
  info: {
    displayName: 'Tekst_p\u00E5_bilde';
  };
  attributes: {
    Tekst: Attribute.RichText;
    Bilde: Attribute.Media & Attribute.Required;
  };
}

export interface OmTekstTospalte extends Schema.Component {
  collectionName: 'components_om_tekst_tospaltes';
  info: {
    displayName: 'Tekst_tospalte';
  };
  attributes: {
    Tekst: Attribute.RichText;
  };
}

export interface OmTekst extends Schema.Component {
  collectionName: 'components_om_teksts';
  info: {
    displayName: 'Tekst';
  };
  attributes: {
    Tekst_enspalte: Attribute.RichText;
  };
}

export interface OmToppbilde extends Schema.Component {
  collectionName: 'components_om_toppbildes';
  info: {
    displayName: 'Toppbilde';
  };
  attributes: {
    Tittel: Attribute.String & Attribute.Required;
    Bakgrunnsbilde: Attribute.Media & Attribute.Required;
  };
}

export interface OmUthevet extends Schema.Component {
  collectionName: 'components_om_uthevets';
  info: {
    displayName: 'Uthevet';
  };
  attributes: {
    Tittel: Attribute.String;
    Tekst: Attribute.RichText;
    Bilde: Attribute.Media & Attribute.Required;
  };
}

export interface TekstTekst extends Schema.Component {
  collectionName: 'components_tekst_teksts';
  info: {
    displayName: 'Tekst';
    icon: 'feather';
    description: '';
  };
  attributes: {
    Tittel: Attribute.String;
    Fil: Attribute.Media;
    beskrivelse: Attribute.RichText;
    Bilde: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hjem.hero': HjemHero;
      'hjem.menyoversikt': HjemMenyoversikt;
      'hjem.motested': HjemMotested;
      'hjem.om-innehaverne': HjemOmInnehaverne;
      'hjem.referanse': HjemReferanse;
      'hjem.referanseoversikt': HjemReferanseoversikt;
      'hjem.tjeneste': HjemTjeneste;
      'hjem.tjenesteoversikt': HjemTjenesteoversikt;
      'kalender.dato': KalenderDato;
      'komponenter.bilde-fullbredde': KomponenterBildeFullbredde;
      'komponenter.tekst-enspalte': KomponenterTekstEnspalte;
      'komponenter.topp': KomponenterTopp;
      'leverandorer.leverandor': LeverandorerLeverandor;
      'meny.vare': MenyVare;
      'metadata.meta': MetadataMeta;
      'metadata.metadata': MetadataMetadata;
      'om.bilderad': OmBilderad;
      'om.tekst-med-sitat': OmTekstMedSitat;
      'om.tekst-pa-bilde': OmTekstPaBilde;
      'om.tekst-tospalte': OmTekstTospalte;
      'om.tekst': OmTekst;
      'om.toppbilde': OmToppbilde;
      'om.uthevet': OmUthevet;
      'tekst.tekst': TekstTekst;
    }
  }
}
