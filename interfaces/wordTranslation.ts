export interface Translation {
  code: string;
  lang: string;
  sense: string;
  tags: string[];
  word: string;
}

export interface Example {
  ref: string;
  text: string;
  type: string;
}

export interface Sense {
  categories: string[];
  examples: Example[];
  glosses: string[];
}

interface Sound {
  ipa?: string;
  rhymes?: string;
  audio?: string;
  mp3_url?: string;
  ogg_url?: string;
  tags?: string[];
  text?: string;
}

export interface TranslationData {
  forms?: Array<{ form: string; tags: string[] }>;
  head_templates: Array<{
    args: Record<string, string>;
    expansion: string;
    name: string;
  }>;
  hyphenation?: any[];
  lang?: string;
  lang_code?: string;
  pos?: string;
  sounds?: Sound[];
  word: string;
  etymology_text?: string;
  translations: Translation[];
  senses?: Sense[];
  categories?: string[];
}
export interface WordData {
  word: string;
  option?: string;
  tipType?: string;
  translation?: string;
  categories?: string[];
  meaning?: string;
  picture?: string;
  sound?: Sound[];
}
