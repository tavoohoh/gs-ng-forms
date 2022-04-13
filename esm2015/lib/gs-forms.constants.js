// https://lowpostayuda.zendesk.com/hc/es/articles/115004070469-Nombres-Identificaci%C3%B3n-tributaria-por-pa%C3%ADses
// http://www.wtng.info/wtng-54-ar.html
export const LOCATION = {
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
export const VALIDATION_MESSAGES = {
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
export const MESSAGES = {
    en: {
        SELECT_ADDRESS: 'Select address'
    },
    es: {
        SELECT_ADDRESS: 'Selecciones una dirección'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMuY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdzL25nLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2dzLWZvcm1zLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxzSEFBc0g7QUFDdEgsdUNBQXVDO0FBRXZDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBaUM7SUFDcEQsRUFBRSxFQUFFO1FBQ0YsR0FBRyxFQUFFO1lBQ0g7Z0JBQ0UsSUFBSSxFQUFFLGtEQUFrRDtnQkFDeEQsS0FBSyxFQUFFLE1BQU07YUFDZDtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFdBQVc7WUFDakIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxjQUFjO1NBQ3JCO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsSUFBSSxFQUFFLEtBQUs7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLFNBQVMsRUFBRSxHQUFHO1lBQ2QsT0FBTyxFQUFFLEdBQUc7WUFDWixTQUFTLEVBQUUsQ0FBQztTQUNiO0tBQ0Y7SUFDRCxFQUFFLEVBQUU7UUFDRixHQUFHLEVBQUU7WUFDSDtnQkFDRSxJQUFJLEVBQUUsd0NBQXdDO2dCQUM5QyxLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUztZQUNmLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsYUFBYTtTQUNwQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLEtBQUs7WUFDYixTQUFTLEVBQUUsR0FBRztZQUNkLE9BQU8sRUFBRSxHQUFHO1lBQ1osU0FBUyxFQUFFLENBQUM7U0FDYjtLQUNGO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsR0FBRyxF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QVMsRUFBRSx3Q0FBd0M7UUFDbkQsY0FBYyxFQUFFLGtEQUFrRDtRQUNsRSxjQUFjLEVBQUUsc0RBQXNEO1FBQ3RFLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsT0FBTyxFQUFFLHVDQUF1QztRQUNoRCwyQkFBMkIsRUFBRSxxQ0FBcUM7UUFDbEUsMEJBQTBCLEVBQUUsdUNBQXVDO1FBQ25FLGdCQUFnQixFQUFFLDRCQUE0QjtRQUM5QyxpQkFBaUIsRUFBRSwwQkFBMEI7UUFDN0MscUJBQXFCLEVBQUUsd0NBQXdDO1FBQy9ELGVBQWUsRUFBRSx5Q0FBeUM7UUFDMUQsZ0JBQWdCLEVBQUUsdUNBQXVDO1FBQ3pELG9CQUFvQixFQUFFLDZDQUE2QztLQUNwRTtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxRQUFRLEdBQWlEO0lBQ3BFLEVBQUUsRUFBRTtRQUNGLGNBQWMsRUFBRSxnQkFBZ0I7S0FDakM7SUFDRCxFQUFFLEVBQUU7UUFDRixjQUFjLEVBQUUsMkJBQTJCO0tBQzVDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdMb2NhdGlvbiB9IGZyb20gJy4vZ3MtZm9ybXMubW9kZWxzJztcblxuLy8gaHR0cHM6Ly9sb3dwb3N0YXl1ZGEuemVuZGVzay5jb20vaGMvZXMvYXJ0aWNsZXMvMTE1MDA0MDcwNDY5LU5vbWJyZXMtSWRlbnRpZmljYWNpJUMzJUIzbi10cmlidXRhcmlhLXBvci1wYSVDMyVBRHNlc1xuLy8gaHR0cDovL3d3dy53dG5nLmluZm8vd3RuZy01NC1hci5odG1sXG5cbmV4cG9ydCBjb25zdCBMT0NBVElPTjogeyBba2V5OiBzdHJpbmddOiBHTG9jYXRpb24gfSA9IHtcbiAgYXI6IHtcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NVSVQgKEPDs2RpZ28gw5puaWNvIGRlIElkZW50aWZpY2FjacOzbiBUcmlidXRhcmlhKScsXG4gICAgICAgIHZhbHVlOiAnQ1VJVCdcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIG5hbWU6ICdBcmdlbnRpbmEnLFxuICAgICAgYWxwaGEyQ29kZTogJ0FSJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICc1NCcsXG4gICAgICBtYXNrOiAnMDAwIDAwMDAwMDAwJ1xuICAgIH0sXG4gICAgY3VycmVuY3lGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICdBUlMnLFxuICAgICAgc3ltYm9sOiAnJCcsXG4gICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgIGRlY2ltYWw6ICcsJyxcbiAgICAgIHByZWNpc2lvbjogMlxuICAgIH1cbiAgfSxcbiAgYm86IHtcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JVQyAoUmVnaXN0cm8gw5puaWNvIGRlIENvbnRyaWJ1eWVudGVzKScsXG4gICAgICAgIHZhbHVlOiAnUlVDJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ0JvbGl2aWEnLFxuICAgICAgYWxwaGEyQ29kZTogJ0JPJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICc1OTEnLFxuICAgICAgbWFzazogJzAwMCAwMDAwMDAwJ1xuICAgIH0sXG4gICAgY3VycmVuY3lGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICdCT0InLFxuICAgICAgc3ltYm9sOiAnQnMuJyxcbiAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgZGVjaW1hbDogJywnLFxuICAgICAgcHJlY2lzaW9uOiAyXG4gICAgfVxuICB9LFxuICBicjoge1xuICAgIHRheDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnQ1BGIChDYWRhc3RybyBkZSBQZXJzb25hIEbDrXNpY2EpJyxcbiAgICAgICAgdmFsdWU6ICdDUEYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ05QSiAoQ2FkYXN0cm8gZGUgUGVyc29uYSBKdXLDrWRpY2EpJyxcbiAgICAgICAgdmFsdWU6ICdDTlBKJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ0JyYXppbCcsXG4gICAgICBhbHBoYTJDb2RlOiAnQlInXG4gICAgfSxcbiAgICBwaG9uZUZvcm1hdDoge1xuICAgICAgY29kZTogJzU1JyxcbiAgICAgIG1hc2s6ICcwMCAwIDAwMDAgMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnQlJMJyxcbiAgICAgIHN5bWJvbDogJ1IkJyxcbiAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgZGVjaW1hbDogJywnLFxuICAgICAgcHJlY2lzaW9uOiAyXG4gICAgfVxuICB9LFxuICBjYToge1xuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIHRheDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnU0lOIChTb2NpYWwgSW5zdXJhbmNlIE51bWJlciknLFxuICAgICAgICB2YWx1ZTogJ1NJTidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IGBOQVMgKG51bcOpcm8gZCdhc3N1cmFuY2Ugc29jaWFsKWAsXG4gICAgICAgIHZhbHVlOiAnTkFTJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ0NhbmFkYScsXG4gICAgICBhbHBoYTJDb2RlOiAnQ0EnXG4gICAgfSxcbiAgICBwaG9uZUZvcm1hdDoge1xuICAgICAgY29kZTogJzEnLFxuICAgICAgbWFzazogJzAwMCAwMDAgMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnQ0FEJyxcbiAgICAgIHN5bWJvbDogJyQnLFxuICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICBkZWNpbWFsOiAnLicsXG4gICAgICBwcmVjaXNpb246IDJcbiAgICB9XG4gIH0sXG4gIGNsOiB7XG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSVVQgKFJvbCDDmm5pY28gVHJpYnV0YXJpbyknLFxuICAgICAgICB2YWx1ZTogJ1JVVCdcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIG5hbWU6ICdDaGlsZScsXG4gICAgICBhbHBoYTJDb2RlOiAnQ0wnXG4gICAgfSxcbiAgICBwaG9uZUZvcm1hdDoge1xuICAgICAgY29kZTogJzU2JyxcbiAgICAgIG1hc2s6ICcwMCAwMDAwMDAwJ1xuICAgIH0sXG4gICAgY3VycmVuY3lGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICdDTFAnLFxuICAgICAgc3ltYm9sOiAnJCcsXG4gICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgIGRlY2ltYWw6ICcuJyxcbiAgICAgIHByZWNpc2lvbjogMFxuICAgIH1cbiAgfSxcbiAgY286IHtcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05JVCAoTsO6bWVybyBkZSBJZGVudGlmaWNhY2nDs24gVHJpYnV0YXJpYSknLFxuICAgICAgICB2YWx1ZTogJ05JVCdcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIG5hbWU6ICdDb2xvbWJpYScsXG4gICAgICBhbHBoYTJDb2RlOiAnQ08nXG4gICAgfSxcbiAgICBwaG9uZUZvcm1hdDoge1xuICAgICAgY29kZTogJzU3JyxcbiAgICAgIG1hc2s6ICcwMDAgMDAwIDAwMDAnXG4gICAgfSxcbiAgICBjdXJyZW5jeUZvcm1hdDoge1xuICAgICAgY29kZTogJ0NPUCcsXG4gICAgICBzeW1ib2w6ICckJyxcbiAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgZGVjaW1hbDogJywnLFxuICAgICAgcHJlY2lzaW9uOiAwXG4gICAgfSxcbiAgICBsYW5Mbmc6IHtcbiAgICAgIGxhdDogNC42NTY1MzY1LFxuICAgICAgbG5nOiAtNzQuMTI0ODM2N1xuICAgIH1cbiAgfSxcbiAgY3I6IHtcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05JVEUgKE7Dum1lcm8gZGUgSWRlbnRpZmljYWNpw7NuIFRyaWJ1dGFyaWEgRXNwZWNpYWwpJyxcbiAgICAgICAgdmFsdWU6ICdOSVRFJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ0Nvc3RhIFJpY2EnLFxuICAgICAgYWxwaGEyQ29kZTogJ0NSJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICc1MDYnLFxuICAgICAgbWFzazogJzAwMDAwMDAwMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnQ1JDJyxcbiAgICAgIHN5bWJvbDogJ+KCoScsXG4gICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgIGRlY2ltYWw6ICcsJyxcbiAgICAgIHByZWNpc2lvbjogMlxuICAgIH1cbiAgfSxcbiAgZWM6IHtcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JVQyAoUmVnaXN0cm8gw5puaWNvIGRlIENvbnRyaWJ1eWVudGVzKScsXG4gICAgICAgIHZhbHVlOiAnUlVDJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ0VjdWFkb3InLFxuICAgICAgYWxwaGEyQ29kZTogJ0VDJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICc1OTMnLFxuICAgICAgbWFzazogJzAwMDAwMDAwMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnVVNEJyxcbiAgICAgIHN5bWJvbDogJyQnLFxuICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICBkZWNpbWFsOiAnLicsXG4gICAgICBwcmVjaXNpb246IDJcbiAgICB9XG4gIH0sXG4gIG14OiB7XG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSRkMgKFJlZ2lzdHJvIEZlZGVyYWwgZGUgQ29udHJpYnV5ZW50ZXMpJyxcbiAgICAgICAgdmFsdWU6ICdSRkMnXG4gICAgICB9XG4gICAgXSxcbiAgICBjb3VudHJ5OiB7XG4gICAgICBuYW1lOiAnTWV4aWNvJyxcbiAgICAgIGFscGhhMkNvZGU6ICdNWCdcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTInLFxuICAgICAgbWFzazogJzAwIDAwMDAgMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnTVhOJyxcbiAgICAgIHN5bWJvbDogJyQnLFxuICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICBkZWNpbWFsOiAnLicsXG4gICAgICBwcmVjaXNpb246IDJcbiAgICB9XG4gIH0sXG4gIHBlOiB7XG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSVUMgKFJlZ2lzdHJvIMOabmljbyBkZSBDb250cmlidXllbnRlcyknLFxuICAgICAgICB2YWx1ZTogJ1JVQydcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIG5hbWU6ICdQZXJ1JyxcbiAgICAgIGFscGhhMkNvZGU6ICdQRSdcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTEnLFxuICAgICAgbWFzazogJzAwMDAwMDAwMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnUEVOJyxcbiAgICAgIHN5bWJvbDogJ1MvLicsXG4gICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgIGRlY2ltYWw6ICcsJyxcbiAgICAgIHByZWNpc2lvbjogMlxuICAgIH1cbiAgfSxcbiAgdXM6IHtcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RJTiAoVGF4cGF5ZXIgSWRlbnRpZmljYXRpb24gTnVtYmVyKScsXG4gICAgICAgIHZhbHVlOiAnVElOJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgICAgYWxwaGEyQ29kZTogJ1VTJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICcxJyxcbiAgICAgIG1hc2s6ICcwMDAgMDAwIDAwMDAnXG4gICAgfSxcbiAgICBjdXJyZW5jeUZvcm1hdDoge1xuICAgICAgY29kZTogJ1VTRCcsXG4gICAgICBzeW1ib2w6ICckJyxcbiAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgZGVjaW1hbDogJy4nLFxuICAgICAgcHJlY2lzaW9uOiAyXG4gICAgfVxuICB9LFxuICB1eToge1xuICAgIHRheDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnUlVUIChSZWdpc3RybyDDmm5pY28gVHJpYnV0YXJpbyknLFxuICAgICAgICB2YWx1ZTogJ1JVVCdcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIG5hbWU6ICdVcnVndWF5JyxcbiAgICAgIGFscGhhMkNvZGU6ICdVWSdcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTk4JyxcbiAgICAgIG1hc2s6ICcwMDAwMDAwMDAwMDAnXG4gICAgfSxcbiAgICBjdXJyZW5jeUZvcm1hdDoge1xuICAgICAgY29kZTogJ1VZVScsXG4gICAgICBzeW1ib2w6ICckJyxcbiAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgZGVjaW1hbDogJy4nLFxuICAgICAgcHJlY2lzaW9uOiAyXG4gICAgfVxuICB9LFxuICB2ZToge1xuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIHRheDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnUklGIChSZWdpc3RybyBkZSBJbmZvcm1hY2nDs24gRmlzY2FsKScsXG4gICAgICAgIHZhbHVlOiAnUklGJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ1ZlbmV6dWVsYScsXG4gICAgICBhbHBoYTJDb2RlOiAnVkUnXG4gICAgfSxcbiAgICBwaG9uZUZvcm1hdDoge1xuICAgICAgY29kZTogJzU4JyxcbiAgICAgIG1hc2s6ICcwMDAgMDAwIDAwMDAnXG4gICAgfSxcbiAgICBjdXJyZW5jeUZvcm1hdDoge1xuICAgICAgY29kZTogJ1ZFRicsXG4gICAgICBzeW1ib2w6ICdCcy4nLFxuICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICBkZWNpbWFsOiAnLCcsXG4gICAgICBwcmVjaXNpb246IDBcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBWQUxJREFUSU9OX01FU1NBR0VTOiB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfSA9IHtcbiAgZW46IHtcbiAgICBFUlJfTUlOOiAnVGhlIHZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICR7cGFyYW19JyxcbiAgICBFUlJfTUFYOiAnVGhlIHZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7cGFyYW19JyxcbiAgICBFUlJfUkVRVUlSRUQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICBFUlJfRU1BSUw6ICdUaGUgZW1haWwgbXVzdCBoYXZlIGEgdmFsaWQgZm9ybWF0JyxcbiAgICBFUlJfTUlOX0xFTkdUSDogJ1RoZSB2YWx1ZSBtdXN0IGJlIGF0IGxlYXN0ICR7cGFyYW19IGNoYXJhY3RlcnMnLFxuICAgIEVSUl9NQVhfTEVOR1RIOiAnVGhlIHZhbHVlIG11c3QgaGF2ZSBhIG1heGltdW0gb2YgJHtwYXJhbX0gY2hhcmFjdGVycycsXG4gICAgRVJSX1BBVFRFUk46ICdUaGUgdmFsdWUgZm9ybWF0IGlzIG5vdCBjb3JyZWN0JyxcbiAgICBERUZBVUxUOiAnVGhpcyBmaWVsZCBoYXMgYW4gdW5rbm93biBlcnJvcicsXG4gICAgRVJSX1JFUVVJUkVEX1RXT19EQVRBX1JJR0hUOiAnVGhlIHJpZ2h0IGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICBFUlJfUkVRVUlSRURfVFdPX0RBVEFfTEVGVDogJ1RoZSBsZWZ0IGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICBFUlJfUkVRVUlSRURfTUlOOiAnTWludXRlcyBhcmUgcmVxdWlyZWQnLFxuICAgIEVSUl9SRVFVSVJFRF9IT1VSOiAnSG91cnMgYXJlIHJlcXVpcmVkJyxcbiAgICBFUlJfUkVRVUlSRURfRlVMTFRJTUU6ICdIb3VycyBhbmQgbWludXRlcyBhcmUgcmVxdWlyZWQnLFxuICAgIEVSUl9QQVRURVJOX01JTjogJ01pbnV0ZXMgZm9ybWF0IGlzIGludmFsaWQnLFxuICAgIEVSUl9QQVRURVJOX0hPVVI6ICdIb3VycyBmb3JtYXQgaXMgaW52YWxpZCcsXG4gICAgRVJSX1BBVFRFUk5fRlVMTFRJTUU6ICdIb3VycyBhbmQgbWludXRlcyBmb3JtYXQgYXJlIGludmFsaWQnXG4gIH0sXG4gIGVzOiB7XG4gICAgRVJSX01JTjogJ0VsIHZhbG9yIGRlYmUgc2VyIG1heW9yIG8gaWd1YWwgcXVlICR7cGFyYW19JyxcbiAgICBFUlJfTUFYOiAnRWwgdmFsb3IgZGViZSBzZXIgbWVub3IgbyBpZ3VhbCBxdWUgJHtwYXJhbX0nLFxuICAgIEVSUl9SRVFVSVJFRDogJ0VzdGEgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICBFUlJfRU1BSUw6ICdFbCBjb3JyZW8gZGViZSB0ZW5lciB1biBmb3JtYXRvIHbDoWxpZG8nLFxuICAgIEVSUl9NSU5fTEVOR1RIOiAnRWwgdmFsb3IgZGViZSB0ZW5lciBhbCBtZW5vcyAke3BhcmFtfSBjYXJhY3RlcmVzJyxcbiAgICBFUlJfTUFYX0xFTkdUSDogJ0VsIHZhbG9yIGRlYmUgdGVuZXIgdW4gbcOheGltbyBkZSAke3BhcmFtfSBjYXJhY3RlcmVzJyxcbiAgICBFUlJfUEFUVEVSTjogJ0VsIGZvcm1hdG8gZGVsIHZhbG9yIG5vIGVzIGNvcnJlY3RvLicsXG4gICAgREVGQVVMVDogJ0VzdGUgY2FtcG8gdGllbmUgdW4gZXJyb3IgZGVzY29ub2NpZG8nLFxuICAgIEVSUl9SRVFVSVJFRF9UV09fREFUQV9SSUdIVDogJ0VsIGNhbXBvIGRlIGxhIGRlcmVjaGEgZXMgcmVxdWVyaWRvJyxcbiAgICBFUlJfUkVRVUlSRURfVFdPX0RBVEFfTEVGVDogJ0VsIGNhbXBvIGRlIGxhIGl6cXVpZXJkYSBlcyByZXF1ZXJpZG8nLFxuICAgIEVSUl9SRVFVSVJFRF9NSU46ICdMb3MgbWludXRvcyBzb24gcmVxdWVyaWRvcycsXG4gICAgRVJSX1JFUVVJUkVEX0hPVVI6ICdMYXMgaG9yYXMgc29uIHJlcXVlcmlkYXMnLFxuICAgIEVSUl9SRVFVSVJFRF9GVUxMVElNRTogJ0xhcyBob3JhcyB5IGxvcyBtaW51dG9zIHNvbiByZXF1ZXJpZG9zJyxcbiAgICBFUlJfUEFUVEVSTl9NSU46ICdFbCBmb3JtYXRvIGRlIGxvcyBtaW51dG9zIGVzIGluY29ycmVjdG8nLFxuICAgIEVSUl9QQVRURVJOX0hPVVI6ICdFbCBmb3JtYXRvIGRlIGxhcyBob3JhcyBlcyBpbmNvcnJlY3RvJyxcbiAgICBFUlJfUEFUVEVSTl9GVUxMVElNRTogJ0VsIGZvcm1hdG8gZGUgaG9yYXMgeSBtaW51dG9zIGVzIGluY29ycmVjdG8nXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFUzogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IH0gPSB7XG4gIGVuOiB7XG4gICAgU0VMRUNUX0FERFJFU1M6ICdTZWxlY3QgYWRkcmVzcydcbiAgfSxcbiAgZXM6IHtcbiAgICBTRUxFQ1RfQUREUkVTUzogJ1NlbGVjY2lvbmVzIHVuYSBkaXJlY2Npw7NuJ1xuICB9XG59O1xuXG4iXX0=