    new Vue({ 
        el: '#app',
        data: {
            image: { url: ""},
            image_type: 'gif'
        },
        watch: {           
            image_type: function()
            {
                this.getImage();
            }
        },
        created(){
            this.getImage();
        } ,
        methods:{
            async getImage()
            {
                try{
                    axios.defaults.headers.common['x-api-key'] = "bde9ee5d-dd91-4e94-9f10-d3527c32a7a9" 
                    let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" , mime_types: this.image_type } } )
                    
                    this.image = response.data[0] 
                    
                }catch(err){
                    console.log(err)
                }
            }
        }
    })

function refreshPage(){
    window.location.reload();
} 
