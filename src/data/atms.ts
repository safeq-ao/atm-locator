export const atms: ATM[] = [
    {
        name: 'ATM BNI Xyami Shopping',
        horary: '24/24',
        distance: '1.2',
        time: '1.2',
        moneyStatus: true,
        paperStatus: true
    },
    {
        name: 'ATM BNI Kilamba X3',
        horary: '08-21h',
        distance: '0.4',
        time: '1',
        moneyStatus: false,
        paperStatus: false
    },
    {
        name: 'ATM BAI Talatona',
        horary: '08-22h',
        distance: '2.5',
        time: '1.5',
        moneyStatus: true,
        paperStatus: true
    },
    {
        name: 'ATM BAI Viana',
        horary: '08-19h',
        distance: '3.0',
        time: '2',
        moneyStatus: true,
        paperStatus: false
    },
    {
        name: 'ATM Millennium Kilamba',
        horary: '24/24',
        distance: '0.8',
        time: '0.8',
        moneyStatus: false,
        paperStatus: true
    },
    {
        name: 'ATM Millennium Maianga',
        horary: '06-22h',
        distance: '2.2',
        time: '1.7',
        moneyStatus: false,
        paperStatus: false
    },
    {
        name: 'ATM BCA Belas',
        horary: '07-23h',
        distance: '1.5',
        time: '1.2',
        moneyStatus: true,
        paperStatus: true
    },
    {
        name: 'ATM BCA Cacuaco',
        horary: '08-00h',
        distance: '3.8',
        time: '2.5',
        moneyStatus: false,
        paperStatus: false
    },
    {
        name: 'ATM Banco Económico Kilamba',
        horary: '08-21h',
        distance: '0.6',
        time: '0.7',
        moneyStatus: true,
        paperStatus: false
    },
    {
        name: 'ATM Banco Económico Alvalade',
        horary: '05-20h',
        distance: '2.0',
        time: '1.4',
        moneyStatus: true,
        paperStatus: true
    },
    {
        name: 'ATM Standard Bank Talatona',
        horary: '08-16h',
        distance: '2.7',
        time: '1.8',
        moneyStatus: false,
        paperStatus: true
    },
    {
        name: 'ATM Standard Bank Morro Bento',
        horary: '08-22h',
        distance: '1.8',
        time: '1.3',
        moneyStatus: true,
        paperStatus: false
    },
    {
        name: 'ATM BIC Kilamba',
        horary: '24/24',
        distance: '1.0',
        time: '1.0',
        moneyStatus: false,
        paperStatus: false
    },
    {
        name: 'ATM BIC Viana',
        horary: '09-22h',
        distance: '3.5',
        time: '2.3',
        moneyStatus: true,
        paperStatus: true
    },
    {
        name: 'ATM Crédito Agrícola Cacuaco',
        horary: '08-22h',
        distance: '4.2',
        time: '2.7',
        moneyStatus: false,
        paperStatus: true
    }
]

interface ATM {
    name: string
    horary: string
    distance: string
    time: string
    moneyStatus: boolean
    paperStatus: boolean
}
