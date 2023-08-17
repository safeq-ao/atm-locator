export const FAKE_ATMS: ATM[] = [
    {
        name: 'ATM BNI Xyami Shopping Kilamba',
        horary: '24/24',
        distance: '1.2',
        time: '1.2',
        moneyStatus: true,
        paperStatus: true,
        position: { lat: -8.9905227, lng: 13.2863515 }
    },
    {
        name: 'ATM BNI Kilamba X3',
        horary: '08-21h',
        distance: '0.4',
        time: '1',
        moneyStatus: false,
        paperStatus: false,
        position: { lat: -8.936636, lng: 13.3009833 }
    },
    {
        name: 'ATM BAI Talatona',
        horary: '08-22h',
        distance: '2.5',
        time: '1.5',
        moneyStatus: true,
        paperStatus: true,
        position: { lat: -8.879043, lng: 13.21355 }
    },
    {
        name: 'ATM BAI Viana',
        horary: '08-19h',
        distance: '3.0',
        time: '2',
        moneyStatus: true,
        paperStatus: false,
        position: { lat: -8.873901, lng: 13.34291 }
    },
    {
        name: 'ATM Millennium Kilamba',
        horary: '24/24',
        distance: '0.8',
        time: '0.8',
        moneyStatus: false,
        paperStatus: true,
        position: { lat: -8.990585, lng: 13.265853 }
    },
    {
        name: 'ATM Millennium Maianga',
        horary: '06-22h',
        distance: '2.2',
        time: '1.7',
        moneyStatus: false,
        paperStatus: false,
        position: { lat: -8.812286, lng: 13.238048 }
    },
    {
        name: 'ATM BCA Belas',
        horary: '07-23h',
        distance: '1.5',
        time: '1.2',
        moneyStatus: true,
        paperStatus: true,
        position: { lat: -8.874401, lng: 13.225779 }
    },
    {
        name: 'ATM BCA Cacuaco',
        horary: '08-00h',
        distance: '3.8',
        time: '2.5',
        moneyStatus: false,
        paperStatus: false,
        position: { lat: -8.79807, lng: 13.333907 }
    },
    {
        name: 'ATM Banco Económico Kilamba',
        horary: '08-21h',
        distance: '0.6',
        time: '0.7',
        moneyStatus: true,
        paperStatus: false,
        position: { lat: -8.988132, lng: 13.262808 }
    },
    {
        name: 'ATM Banco Económico Alvalade',
        horary: '05-20h',
        distance: '2.0',
        time: '1.4',
        moneyStatus: true,
        paperStatus: true,
        position: { lat: -8.857915, lng: 13.226593 }
    },
    {
        name: 'ATM Standard Bank Talatona',
        horary: '08-16h',
        distance: '2.7',
        time: '1.8',
        moneyStatus: false,
        paperStatus: true,
        position: { lat: -8.877492, lng: 13.206507 }
    },
    {
        name: 'ATM Standard Bank Morro Bento',
        horary: '08-22h',
        distance: '1.8',
        time: '1.3',
        moneyStatus: true,
        paperStatus: false,
        position: { lat: -8.862761, lng: 13.207925 }
    },
    {
        name: 'ATM BNI Calemba 2',
        horary: '24/24',
        distance: '25',
        time: '18',
        moneyStatus: true,
        paperStatus: false,
        position: { lat: -8.90496, lng: 13.287869 }
    },
    {
        name: 'ATM BIC Calemba 2',
        horary: '24/24',
        distance: '25',
        time: '18',
        moneyStatus: true,
        paperStatus: false,
        position: { lat: -8.904651, lng: 13.2884564 }
    },
    {
        name: 'ATM BNI Camama 1',
        horary: '24/24',
        distance: '25',
        time: '18',
        moneyStatus: true,
        paperStatus: true,
        position: { lat: -8.901924, lng: 13.261929 }
    },
    {
        name: 'ATM BNI Desvio do Zango',
        horary: '24/24',
        distance: '20',
        time: '14',
        moneyStatus: true,
        paperStatus: true,
        position: { lat: -8.979359, lng: 13.390567 }
    },
    {
        name: 'ATM BAI Kilamba',
        horary: '24/24',
        distance: '25',
        time: '18',
        moneyStatus: true,
        paperStatus: true,
        position: { lat: -8.998227, lng: 13.279537 }
    },
    {
        position: { lat: -8.998131715522176, lng: 13.262770914763179 },
        name: 'ATM BNI Kilamba 4ª Paragem',
        horary: '24/24',
        distance: '15',
        time: '11',
        moneyStatus: false,
        paperStatus: false
    },
    {
        name: 'ATM BIC Benfica',
        horary: '24/24',
        distance: '25',
        time: '18',
        moneyStatus: true,
        paperStatus: false,
        position: { lat: -8.960619, lng: 13.149327 }
    },
    {
        name: 'ATM BNI Patriota',
        horary: '24/24',
        distance: '25',
        time: '18',
        moneyStatus: true,
        paperStatus: false,
        position: { lat: -8.974609, lng: 13.211242 }
    },
    {
        position: { lat: -8.881052, lng: 13.254033 },
        name: 'ATM BNI Golf 2',
        horary: '24/24',
        distance: '25',
        time: '18',
        moneyStatus: true,
        paperStatus: false
    },
    {
        position: { lat: -8.838377, lng: 13.263921 },
        name: 'Paragem do Escongolensse - Sentido 1º de Maio',
        horary: '24/24',
        distance: '25',
        time: '18',
        moneyStatus: true,
        paperStatus: true
    }
]

export interface ATM {
    name: string
    horary: string
    distance: string
    time: string
    moneyStatus: boolean
    paperStatus: boolean
    position: {
        lat: number
        lng: number
    }
}
