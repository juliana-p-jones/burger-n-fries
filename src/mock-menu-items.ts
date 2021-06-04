import { MenuItem } from './menu-item';

export const MENUITEMS: MenuItem[] = [
    {
       
        name: 'Vitamin D Therapy',
        brand: "Jules' Sunshine",
        description: 'Invigorate leaves with natural light therapy',
        price: 50.00,
        featureOfDay: true,
        qty: 0,
        "image": 'https://i.pinimg.com/originals/3b/7e/22/3b7e22157a8b4746b07db32fcd2c12bd.png',
    },
    {
    
        name: 'Water',
        brand: "H2Ohhh",
        description: "Rehydrate and replenish",
        price: 10.00,
        featureOfDay: false,
        "image": 'http://cdn.shopify.com/s/files/1/1061/1924/products/Sweat_Water_Emoji_grande.png?v=1571606064',
        qty: 0
    },
    {
       
        name: 'Fertilizer',
        brand: "Miracle Gro",
        description: 'Nutrient packed delicacy',
        price: 30.00,
        featureOfDay: false,
        qty: 0,
        "image": 'http://static1.squarespace.com/static/56e0f44160b5e96aec2019f3/56e1545f60b5e96aec21a826/5c1984dc352f53782fa29cfd/1589880785073/Poop_Emoji.png?format=1500w',
    }
];