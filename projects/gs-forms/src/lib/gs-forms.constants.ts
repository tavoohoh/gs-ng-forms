import { GLocation } from './gs-forms.models';

// https://lowpostayuda.zendesk.com/hc/es/articles/115004070469-Nombres-Identificaci%C3%B3n-tributaria-por-pa%C3%ADses
// http://www.wtng.info/wtng-54-ar.html

export const LOCATION: { [key: string]: GLocation } = {
  ar: {
    tax: [
      {
        name: 'CUIT (Código Único de Identificación Tributaria)',
        value: 'CUIT'
      }
    ],
    country: {
      name: 'Argentina',
      alpha2Code: 'AR'
    },
    phoneFormat: {
      code: '54',
      mask: '000 00000000'
    },
    currencyFormat: {
      code: 'ARS',
      symbol: '$',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  bo: {
    tax: [
      {
        name: 'RUC (Registro Único de Contribuyentes)',
        value: 'RUC'
      }
    ],
    country: {
      name: 'Bolivia',
      alpha2Code: 'BO'
    },
    phoneFormat: {
      code: '591',
      mask: '000 0000000'
    },
    currencyFormat: {
      code: 'BOB',
      symbol: 'Bs.',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  br: {
    tax: [
      {
        name: 'CPF (Cadastro de Persona Física)',
        value: 'CPF'
      },
      {
        name: 'CNPJ (Cadastro de Persona Jurídica)',
        value: 'CNPJ'
      }
    ],
    country: {
      name: 'Brazil',
      alpha2Code: 'BR'
    },
    phoneFormat: {
      code: '55',
      mask: '00 0 0000 0000'
    },
    currencyFormat: {
      code: 'BRL',
      symbol: 'R$',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  ca: {
    disabled: true,
    tax: [
      {
        name: 'SIN (Social Insurance Number)',
        value: 'SIN'
      },
      {
        name: `NAS (numéro d'assurance social)`,
        value: 'NAS'
      }
    ],
    country: {
      name: 'Canada',
      alpha2Code: 'CA'
    },
    phoneFormat: {
      code: '1',
      mask: '000 000 0000'
    },
    currencyFormat: {
      code: 'CAD',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  cl: {
    tax: [
      {
        name: 'RUT (Rol Único Tributario)',
        value: 'RUT'
      }
    ],
    country: {
      name: 'Chile',
      alpha2Code: 'CL'
    },
    phoneFormat: {
      code: '56',
      mask: '00 0000000'
    },
    currencyFormat: {
      code: 'CLP',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 0
    }
  },
  co: {
    tax: [
      {
        name: 'NIT (Número de Identificación Tributaria)',
        value: 'NIT'
      }
    ],
    country: {
      name: 'Colombia',
      alpha2Code: 'CO'
    },
    phoneFormat: {
      code: '57',
      mask: '000 000 0000'
    },
    currencyFormat: {
      code: 'COP',
      symbol: '$',
      thousands: '.',
      decimal: ',',
      precision: 0
    },
    lanLng: {
      lat: 4.6565365,
      lng: -74.1248367
    }
  },
  cr: {
    disabled: true,
    tax: [
      {
        name: 'NITE (Número de Identificación Tributaria Especial)',
        value: 'NITE'
      }
    ],
    country: {
      name: 'Costa Rica',
      alpha2Code: 'CR'
    },
    phoneFormat: {
      code: '506',
      mask: '000000000000'
    },
    currencyFormat: {
      code: 'CRC',
      symbol: '₡',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  ec: {
    disabled: true,
    tax: [
      {
        name: 'RUC (Registro Único de Contribuyentes)',
        value: 'RUC'
      }
    ],
    country: {
      name: 'Ecuador',
      alpha2Code: 'EC'
    },
    phoneFormat: {
      code: '593',
      mask: '000000000000'
    },
    currencyFormat: {
      code: 'USD',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  mx: {
    tax: [
      {
        name: 'RFC (Registro Federal de Contribuyentes)',
        value: 'RFC'
      }
    ],
    country: {
      name: 'Mexico',
      alpha2Code: 'MX'
    },
    phoneFormat: {
      code: '52',
      mask: '00 0000 0000'
    },
    currencyFormat: {
      code: 'MXN',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  pe: {
    tax: [
      {
        name: 'RUC (Registro Único de Contribuyentes)',
        value: 'RUC'
      }
    ],
    country: {
      name: 'Peru',
      alpha2Code: 'PE'
    },
    phoneFormat: {
      code: '51',
      mask: '000000000000'
    },
    currencyFormat: {
      code: 'PEN',
      symbol: 'S/.',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  us: {
    disabled: true,
    tax: [
      {
        name: 'TIN (Taxpayer Identification Number)',
        value: 'TIN'
      }
    ],
    country: {
      name: 'United States',
      alpha2Code: 'US'
    },
    phoneFormat: {
      code: '1',
      mask: '000 000 0000'
    },
    currencyFormat: {
      code: 'USD',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  uy: {
    tax: [
      {
        name: 'RUT (Registro Único Tributario)',
        value: 'RUT'
      }
    ],
    country: {
      name: 'Uruguay',
      alpha2Code: 'UY'
    },
    phoneFormat: {
      code: '598',
      mask: '000000000000'
    },
    currencyFormat: {
      code: 'UYU',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  ve: {
    disabled: true,
    tax: [
      {
        name: 'RIF (Registro de Información Fiscal)',
        value: 'RIF'
      }
    ],
    country: {
      name: 'Venezuela',
      alpha2Code: 'VE'
    },
    phoneFormat: {
      code: '58',
      mask: '000 000 0000'
    },
    currencyFormat: {
      code: 'VEF',
      symbol: 'Bs.',
      thousands: '.',
      decimal: ',',
      precision: 0
    }
  }
};

export const VALIDATION_MESSAGES: { [key: string]: { [key: string]: string } } = {
  en: {
    ERR_MIN: 'The value must be greater than or equal to ${param}',
    ERR_MAX: 'The value must be less than or equal to ${param}',
    ERR_REQUIRED: 'This field is required',
    ERR_EMAIL: 'The email must have a valid format',
    ERR_MIN_LENGTH: 'The value must be at least ${param} characters',
    ERR_MAX_LENGTH: 'The value must have a maximum of ${param} characters',
    ERR_PATTERN: 'The value format is not correct',
    DEFAULT: 'This field has an unknown error',
    ERR_REQUIRED_TWO_DATA_RIGHT: 'The right field is required',
    ERR_REQUIRED_TWO_DATA_LEFT: 'The left field is required',
    ERR_REQUIRED_MIN: 'Minutes are required',
    ERR_REQUIRED_HOUR: 'Hours are required',
    ERR_REQUIRED_FULLTIME: 'Hours and minutes are required',
    ERR_PATTERN_MIN: 'Minutes format is invalid',
    ERR_PATTERN_HOUR: 'Hours format is invalid',
    ERR_PATTERN_FULLTIME: 'Hours and minutes format are invalid'
  },
  es: {
    ERR_MIN: 'El valor debe ser mayor o igual que ${param}',
    ERR_MAX: 'El valor debe ser menor o igual que ${param}',
    ERR_REQUIRED: 'Esta campo es requerido',
    ERR_EMAIL: 'El correo debe tener un formato válido',
    ERR_MIN_LENGTH: 'El valor debe tener al menos ${param} caracteres',
    ERR_MAX_LENGTH: 'El valor debe tener un máximo de ${param} caracteres',
    ERR_PATTERN: 'El formato del valor no es correcto.',
    DEFAULT: 'Este campo tiene un error desconocido',
    ERR_REQUIRED_TWO_DATA_RIGHT: 'El campo de la derecha es requerido',
    ERR_REQUIRED_TWO_DATA_LEFT: 'El campo de la izquierda es requerido',
    ERR_REQUIRED_MIN: 'Los minutos son requeridos',
    ERR_REQUIRED_HOUR: 'Las horas son requeridas',
    ERR_REQUIRED_FULLTIME: 'Las horas y los minutos son requeridos',
    ERR_PATTERN_MIN: 'El formato de los minutos es incorrecto',
    ERR_PATTERN_HOUR: 'El formato de las horas es incorrecto',
    ERR_PATTERN_FULLTIME: 'El formato de horas y minutos es incorrecto'
  }
};

export const MESSAGES: { [key: string]: { [key: string]: string } } = {
  en: {
    SELECT_ADDRESS: 'Select address'
  },
  es: {
    SELECT_ADDRESS: 'Selecciones una dirección'
  }
};

