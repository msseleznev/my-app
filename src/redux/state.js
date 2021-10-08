let state = {
    profilePage: {
        posts: [            //хардкодим массив постов, в будущем этот массив будет подгружаться извне
            { id: 1, message: 'Hi!', likesCount: 150 },
            { id: 2, message: "I from Russia", likesCount: 35 },
            { id: 3, message: "i'm Russian", likesCount: 235 }
        ]
    },
    dialogsPage: {
        dialogs: [         //хардкодим массив имен пользователей, в будущем этот массив будет подгружаться извне
            { id: 1, name: 'Sveta' },
            { id: 2, name: 'Maks' },
            { id: 3, name: 'Sanya' },
            { id: 4, name: 'Anjelika' },
            { id: 5, name: 'Kris' }
        ],
        messages: [        //хардкодим массив сообщений, в будущем этот массив будет подгружаться извне
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'What your name?' },
            { id: 3, message: "I'm Nick" }
        ]
    }
}


export default state;

