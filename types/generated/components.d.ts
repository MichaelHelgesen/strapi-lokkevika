import type { Attribute, Schema } from '@strapi/strapi';

export interface HjemHero extends Schema.Component {
  collectionName: 'components_hjem_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    Bilde: Attribute.Media<'images'> & Attribute.Required;
    Introtekst: Attribute.Text;
    Tittel: Attribute.String & Attribute.Required;
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
    description: '';
    displayName: 'M\u00F8tested';
  };
  attributes: {
    Bilde1: Attribute.Media<'images'> & Attribute.Required;
    Bilde2: Attribute.Media<'images'> & Attribute.Required;
    Bilde3: Attribute.Media<'images'> & Attribute.Required;
    Bilde4: Attribute.Media<'images'> & Attribute.Required;
    Bilde5: Attribute.Media<'images'> & Attribute.Required;
    Tekst: Attribute.RichText;
    Tittel: Attribute.String;
  };
}

export interface HjemOmInnehaverne extends Schema.Component {
  collectionName: 'components_hjem_om_innehavernes';
  info: {
    displayName: 'Om innehaverne';
  };
  attributes: {
    Tekst: Attribute.RichText;
    Tittel: Attribute.String;
  };
}

export interface HjemReferanse extends Schema.Component {
  collectionName: 'components_hjem_referanses';
  info: {
    displayName: 'Referanse';
  };
  attributes: {
    Bilde: Attribute.Media<'images'> & Attribute.Required;
    Tittel: Attribute.String & Attribute.Required;
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
    Beskrivelse: Attribute.Text;
    Ikon: Attribute.Media<'images'> & Attribute.Required;
    Tittel: Attribute.String & Attribute.Required;
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
    Bilde: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface KomponenterTekstEnspalte extends Schema.Component {
  collectionName: 'components_komponenter_tekst_enspaltes';
  info: {
    displayName: 'Tekst_enspalte';
  };
  attributes: {
    Tekst: Attribute.RichText;
    Tittel: Attribute.String;
  };
}

export interface KomponenterTopp extends Schema.Component {
  collectionName: 'components_komponenter_topps';
  info: {
    description: '';
    displayName: 'Topp';
  };
  attributes: {
    Bakgrunnsbilde: Attribute.Media<'images'> & Attribute.Required;
    Beskrivelse: Attribute.Text;
    Tittel: Attribute.String & Attribute.Required;
  };
}

export interface LeverandorerLeverandor extends Schema.Component {
  collectionName: 'components_leverandorer_leverandors';
  info: {
    displayName: 'Leverandor';
  };
  attributes: {
    Bilde: Attribute.Media<'images'> & Attribute.Required;
    Lenke_til_leverandor: Attribute.String;
    Tekst: Attribute.RichText;
    Tittel: Attribute.String & Attribute.Required;
  };
}

export interface MenyVare extends Schema.Component {
  collectionName: 'components_meny_vares';
  info: {
    description: '';
    displayName: 'vare';
  };
  attributes: {
    Beskrivelse: Attribute.RichText;
    Bilde: Attribute.Media<'images'>;
    Pris: Attribute.Integer;
    Tittel: Attribute.String & Attribute.Required;
  };
}

export interface MetadataMeta extends Schema.Component {
  collectionName: 'components_metadata_metas';
  info: {
    description: '';
    displayName: 'Meta';
  };
  attributes: {
    Metabeskrivelse: Attribute.Text;
    Metabilde: Attribute.Media<'images', true>;
    Metatittel: Attribute.String;
  };
}

export interface MetadataMetadata extends Schema.Component {
  collectionName: 'components_metadata_metadata';
  info: {
    displayName: 'metadata';
    icon: 'search';
  };
  attributes: {
    Metabeskrivelse: Attribute.String;
    Metabilde: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Metatittel: Attribute.String;
  };
}

export interface OmBilderad extends Schema.Component {
  collectionName: 'components_om_bilderads';
  info: {
    displayName: 'Bilderad';
  };
  attributes: {
    Bilde1: Attribute.Media<'images'> & Attribute.Required;
    Bilde2: Attribute.Media<'images'> & Attribute.Required;
    Bilde3: Attribute.Media<'images'> & Attribute.Required;
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

export interface OmTekstMedSitat extends Schema.Component {
  collectionName: 'components_om_tekst_med_sitats';
  info: {
    displayName: 'Tekst_med_sitat';
  };
  attributes: {
    Bilde: Attribute.Media<'images'>;
    Sitat: Attribute.Text;
    Tekst: Attribute.RichText;
    Venstrejustert: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface OmTekstPaBilde extends Schema.Component {
  collectionName: 'components_om_tekst_pa_bildes';
  info: {
    displayName: 'Tekst_p\u00E5_bilde';
  };
  attributes: {
    Bilde: Attribute.Media<'images'> & Attribute.Required;
    Tekst: Attribute.RichText;
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

export interface OmToppbilde extends Schema.Component {
  collectionName: 'components_om_toppbildes';
  info: {
    displayName: 'Toppbilde';
  };
  attributes: {
    Bakgrunnsbilde: Attribute.Media<'images'> & Attribute.Required;
    Tittel: Attribute.String & Attribute.Required;
  };
}

export interface OmUthevet extends Schema.Component {
  collectionName: 'components_om_uthevets';
  info: {
    displayName: 'Uthevet';
  };
  attributes: {
    Bilde: Attribute.Media<'images'> & Attribute.Required;
    Tekst: Attribute.RichText;
    Tittel: Attribute.String;
  };
}

export interface TekstTekst extends Schema.Component {
  collectionName: 'components_tekst_teksts';
  info: {
    description: '';
    displayName: 'Tekst';
    icon: 'feather';
  };
  attributes: {
    beskrivelse: Attribute.RichText;
    Bilde: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Fil: Attribute.Media<'images' | 'videos' | 'audios' | 'files'>;
    Tittel: Attribute.String;
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
      'om.tekst': OmTekst;
      'om.tekst-med-sitat': OmTekstMedSitat;
      'om.tekst-pa-bilde': OmTekstPaBilde;
      'om.tekst-tospalte': OmTekstTospalte;
      'om.toppbilde': OmToppbilde;
      'om.uthevet': OmUthevet;
      'tekst.tekst': TekstTekst;
    }
  }
}
