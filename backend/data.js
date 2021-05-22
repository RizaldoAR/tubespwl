import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name:'admin',
            email:'admin@teratics.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Aldo',
            email:'rizaldo.a.r@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }

    ],
    products: [
        {
            
            name: 'Baju 1',
            stock:2,
            category: 'Shirts',
            image: 'https://www.unrealclubs.com/assets/img/produk/march5b.jpg',
            price: 50000,
            brand: 'Unreal',
            description: "High quality modern products"
    
    
        },
        {
            
            name: 'Baju 2',
            stock:2,
            category: 'Shirts',
            image: 'https://www.unrealclubs.com/assets/img/produk/march5b.jpg',
            price: 50000,
            brand: 'Unreal',
            description: "High quality modern products"
    
    
        },
        {
            
            name: 'Baju 3',
            stock:2,
            category: 'Shirts',
            image: 'https://www.unrealclubs.com/assets/img/produk/march5b.jpg',
            price: 50000,
            brand: 'Unreal',
            description: "High quality modern products"
    
    
        },
    ]
    
}
export default data; 