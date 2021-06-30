const app = {
    data () {
        return {
            name: 'Wbh',
            lastName: 'NoneH123',
            product: {
                title: 'Filme 01',
                description: 'Filme lego 1',
                image: './assets/images/lego1.png'
            },
            product2: {
                title: 'Filme 02',
                description: 'Filme lego 2',
                image: './assets/images/lego2.png'
            }
        }
    }    
} 

Vue.createApp(app).mount('#app')
