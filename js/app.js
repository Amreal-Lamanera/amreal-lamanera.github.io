
dayjs.extend(window.dayjs_plugin_customParseFormat);

const contacts = [
    {
        name: 'Michela',
        avatar: 'https://i.pravatar.cc/50?img=1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: 'https://i.pravatar.cc/50?img=2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: 'https://i.pravatar.cc/50?img=3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: 'https://i.pravatar.cc/50?img=4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: 'https://i.pravatar.cc/50?img=5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: 'https://i.pravatar.cc/50?img=6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: 'https://i.pravatar.cc/50?img=7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: 'https://i.pravatar.cc/50?img=8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]

const app = new Vue({
    el: '#app',
    data: {
        active: null,
        contacts,
        newMessage: ''
    },
    computed: {
        getMessages() {
            return this.contacts[this.active].messages;
        }
    },
    methods: {
        getHour(messages) {
            let date = messages[messages.length - 1].date;
            // console.log(date);
            // console.log(dayjs(date).format('HH:mm'));
            // let arrDate = date.split(' ');
            // arrDate = arrDate[1].split(':');
            // return arrDate[0] + ':' + arrDate[1]
            // console.log(dayjs(date, 'DD/MM/YYYY HH:mm:ss', true));

            return dayjs(date, 'DD/MM/YYYY HH:mm:ss').format('HH:mm');
        },
        moveActive(index) {
            this.active = index;
        },
        addMessage() {
            this.newMessage = this.newMessage.trim();
            if (!this.newMessage || this.active === null) return

            this.contacts[this.active].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newMessage,
                status: 'sent'
            });

            setTimeout(() => {
                this.contacts[this.active].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'ok',
                    status: 'received'
                });
            }, 1000);

            this.newMessage = ''
        },
        getLastMsg(i) {
            const last = this.contacts[i].messages.length - 1;
            return this.contacts[i].messages[last].message;
        }
    }
})