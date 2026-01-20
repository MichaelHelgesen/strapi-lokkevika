import type { Schema, Struct } from '@strapi/strapi';

export interface HjemHero extends Struct.ComponentSchema {
  collectionName: 'components_hjem_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    Bilde: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Introtekst: Schema.Attribute.Text;
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HjemMenyoversikt extends Struct.ComponentSchema {
  collectionName: 'components_hjem_menyoversikts';
  info: {
    displayName: 'Menyoversikt';
  };
  attributes: {
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HjemMotested extends Struct.ComponentSchema {
  collectionName: 'components_hjem_motesteds';
  info: {
    description: '';
    displayName: 'M\u00F8tested';
  };
  attributes: {
    Bilde1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Bilde2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Bilde3: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Bilde4: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Bilde5: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Tekst: Schema.Attribute.RichText;
    Tittel: Schema.Attribute.String;
  };
}

export interface HjemOmInnehaverne extends Struct.ComponentSchema {
  collectionName: 'components_hjem_om_innehavernes';
  info: {
    displayName: 'Om innehaverne';
  };
  attributes: {
    Tekst: Schema.Attribute.RichText;
    Tittel: Schema.Attribute.String;
  };
}

export interface HjemReferanse extends Struct.ComponentSchema {
  collectionName: 'components_hjem_referanses';
  info: {
    displayName: 'Referanse';
  };
  attributes: {
    Bilde: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HjemReferanseoversikt extends Struct.ComponentSchema {
  collectionName: 'components_hjem_referanseoversikts';
  info: {
    displayName: 'Referanseoversikt';
  };
  attributes: {
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HjemTjeneste extends Struct.ComponentSchema {
  collectionName: 'components_hjem_tjenestes';
  info: {
    displayName: 'Tjeneste';
  };
  attributes: {
    Beskrivelse: Schema.Attribute.Text;
    Ikon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HjemTjenesteoversikt extends Struct.ComponentSchema {
  collectionName: 'components_hjem_tjenesteoversikts';
  info: {
    displayName: 'Tjenesteoversikt';
  };
  attributes: {
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface KalenderDato extends Struct.ComponentSchema {
  collectionName: 'components_kalender_datoes';
  info: {
    displayName: 'Dato';
  };
  attributes: {
    Dato: Schema.Attribute.Integer;
    Tekst: Schema.Attribute.Text;
  };
}

export interface KomponenterBildeFullbredde extends Struct.ComponentSchema {
  collectionName: 'components_komponenter_bilde_fullbreddes';
  info: {
    displayName: 'Bilde_fullbredde';
  };
  attributes: {
    Bilde: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface KomponenterTekstEnspalte extends Struct.ComponentSchema {
  collectionName: 'components_komponenter_tekst_enspaltes';
  info: {
    displayName: 'Tekst_enspalte';
  };
  attributes: {
    Tekst: Schema.Attribute.RichText;
    Tittel: Schema.Attribute.String;
  };
}

export interface KomponenterTopp extends Struct.ComponentSchema {
  collectionName: 'components_komponenter_topps';
  info: {
    description: '';
    displayName: 'Topp';
  };
  attributes: {
    Bakgrunnsbilde: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    Beskrivelse: Schema.Attribute.Text;
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LeverandorerLeverandor extends Struct.ComponentSchema {
  collectionName: 'components_leverandorer_leverandors';
  info: {
    displayName: 'Leverandor';
  };
  attributes: {
    Bilde: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Lenke_til_leverandor: Schema.Attribute.String;
    Tekst: Schema.Attribute.RichText;
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MenyVare extends Struct.ComponentSchema {
  collectionName: 'components_meny_vares';
  info: {
    description: '';
    displayName: 'vare';
  };
  attributes: {
    Beskrivelse: Schema.Attribute.RichText;
    Bilde: Schema.Attribute.Media<'images'>;
    Pris: Schema.Attribute.Integer;
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetadataMeta extends Struct.ComponentSchema {
  collectionName: 'components_metadata_metas';
  info: {
    description: '';
    displayName: 'Meta';
  };
  attributes: {
    Metabeskrivelse: Schema.Attribute.Text;
    Metabilde: Schema.Attribute.Media<'images', true>;
    Metatittel: Schema.Attribute.String;
  };
}

export interface MetadataMetadata extends Struct.ComponentSchema {
  collectionName: 'components_metadata_metadata';
  info: {
    displayName: 'metadata';
    icon: 'search';
  };
  attributes: {
    Metabeskrivelse: Schema.Attribute.String;
    Metabilde: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Metatittel: Schema.Attribute.String;
  };
}

export interface OmBilderad extends Struct.ComponentSchema {
  collectionName: 'components_om_bilderads';
  info: {
    displayName: 'Bilderad';
  };
  attributes: {
    Bilde1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Bilde2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Bilde3: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface OmTekst extends Struct.ComponentSchema {
  collectionName: 'components_om_teksts';
  info: {
    displayName: 'Tekst';
  };
  attributes: {
    Tekst_enspalte: Schema.Attribute.RichText;
  };
}

export interface OmTekstMedSitat extends Struct.ComponentSchema {
  collectionName: 'components_om_tekst_med_sitats';
  info: {
    displayName: 'Tekst_med_sitat';
  };
  attributes: {
    Bilde: Schema.Attribute.Media<'images'>;
    Sitat: Schema.Attribute.Text;
    Tekst: Schema.Attribute.RichText;
    Venstrejustert: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface OmTekstPaBilde extends Struct.ComponentSchema {
  collectionName: 'components_om_tekst_pa_bildes';
  info: {
    displayName: 'Tekst_p\u00E5_bilde';
  };
  attributes: {
    Bilde: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Tekst: Schema.Attribute.RichText;
  };
}

export interface OmTekstTospalte extends Struct.ComponentSchema {
  collectionName: 'components_om_tekst_tospaltes';
  info: {
    displayName: 'Tekst_tospalte';
  };
  attributes: {
    Tekst: Schema.Attribute.RichText;
  };
}

export interface OmToppbilde extends Struct.ComponentSchema {
  collectionName: 'components_om_toppbildes';
  info: {
    displayName: 'Toppbilde';
  };
  attributes: {
    Bakgrunnsbilde: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    Tittel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OmUthevet extends Struct.ComponentSchema {
  collectionName: 'components_om_uthevets';
  info: {
    displayName: 'Uthevet';
  };
  attributes: {
    Bilde: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Tekst: Schema.Attribute.RichText;
    Tittel: Schema.Attribute.String;
  };
}

export interface TekstTekst extends Struct.ComponentSchema {
  collectionName: 'components_tekst_teksts';
  info: {
    description: '';
    displayName: 'Tekst';
    icon: 'feather';
  };
  attributes: {
    beskrivelse: Schema.Attribute.RichText;
    Bilde: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Fil: Schema.Attribute.Media<'images' | 'videos' | 'audios' | 'files'>;
    Tittel: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
