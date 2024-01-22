interface ProductsType{
    collectionTitle: string,
    collectionProducts: {
        name: string,
        img: string[],
        isFeature: boolean,
        featureBackGround? : string,
        featureText? : string,
        price: number,
    }[]
}

export const Groups: ProductsType[] = [

    {
        collectionTitle: 'New Arrivals',
        collectionProducts: [
            {
                name: 'MoonShine Snake Plant',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Snake-Moonshine_Medium_Hyde_Cream_Variant.jpg?v=1686664154&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_snake-plant-moonshine_gallery_medium_all_all_04.jpg?v=1686664154&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Snake-Moonshine_Madium_Trio_Variant.jpg?v=1686664154&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'New Arrival',
                price: 48,
            },
            {
                name: 'Corkscrew Rush',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Corkscrew-Rush_Small_Grant_Black.jpg?v=1687365974&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Corkscrew-Rush_small_Trio.jpg?v=1687365974&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Corkscrew-Rush_Small_Grant_Cream.jpg?v=1687365974&width=400'
            ],
                isFeature: true,
                featureBackGround: '#f4364c',
                featureText: 'up to 25% off',
                price: 34,
            },
            {
                name: 'Fairy Castle Cactus',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Fairy-Castle-Cactus_small_upcycled_blue_variant.jpg?v=1687797475&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Fairy-Castle-Cactus_small_gallery.jpg?v=1689026091&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Fairy-Castle-Cactus_small_trio_variant.jpg?v=1689026091&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'New Arrival',
                price: 38,
            },
            {
                name: 'Barrel Cactus',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/The-Sill_Medium-Barrel-Cactus_Medium_Grant_Terracotta_Variant.jpg?v=1686605124&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/The-Sill_Medium-Barrel-Cactus_Gallery.jpg?v=1686605124&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/The-Sill_Medium-Barrel-Cactus_Medium_Trio_Variant.jpg?v=1686605124&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'New Arrival',
                price: 48,
            },
        ]
    },

    {
        collectionTitle: 'Our Best Sellers',
        collectionProducts: [
            {
                name: 'Money Tree Plant',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-money_tree.jpg?v=1680542101&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_money-tree_gallery_small_all_all_02_f4730339-7e2a-4019-964f-2ce297ef7f62.jpg?v=1680542101&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_money-tree_gallery_small_all_all_03_d6267802-77f2-4588-9471-05bb865f168c.jpg?v=1680542101&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Pet-Friendly',
                price: 48,
            },
            {
                name: 'Olive Tree',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/The-Sill_Olive-Tree_Small_Hyde_Cream_Variant.jpg?v=1687298782&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/The-Sill_OliveTree_Medium_gallery_01.jpg?v=1687298782&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/The-Sill_Olive-Tree_Small_Trio_Variant.jpg?v=1687298782&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Pet-Friendly',
                price: 38,
            },
            {
                name: 'ZZ Plant',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-zz_plant.jpg?v=1680548849&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_large_gallery_all_all_02_175b6bd9-7ee7-4ab3-89e0-9da22325e683.jpg?v=1680548849&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the_sill-variant-grow_pot-zz_plant.jpg?v=1683581989&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Easy Care',
                price: 48,
            },
            {
                name: 'Snake Plant Laurentii',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_variant_medium_hyde_terracotta.jpg?v=1686263548&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_gallery_small_all_all_01.jpg?v=1686263548&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_gallery_small_all_all_04.jpg?v=1686263548&width=400'    
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Easy Care',
                price: 38,
            },
        ]
    },
    
    {
        collectionTitle: 'Large Plants & Trees',
        collectionProducts: [
            {
                name: 'Large Bird of Paradise',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Cordyline-Red-Sister_Large_Mexia_Cream_Variant.jpg?v=1703616877&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Bird-of-Paradise_Large_Trio_Variant.jpg?v=1688570334&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_large-bird-of-paradise_gallery_all_05.jpg?v=1688570334&width=400'
                ],
                isFeature: false,
                price: 98,
            },
            {
                name: 'Large Majesty Palm',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_calamansi-tree_growpot_variant_01.jpg?v=1702576674&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_majesty-palm_gallery_all_02.png?v=1688569810&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_majesty-palm_upcycled-stonewash_gallery_all_all_01.jpg?v=1688569810&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Pet-Friendly',
                price: 98,
            },
            {
                name: 'Large Money Tree',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Money-Tree_Large_Mexia_Black_Variant.jpg?v=1687308983&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Money-Tree_Large_Case-Study-with-Stand_white_variant.jpg?v=1687308983&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_money-tree_gallery_all_03.jpg?v=1687308983&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Pet-Friendly',
                price: 140,
            },
            {
                name: 'Tropical Vibes Pet-Friendly Duo',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/The-Sill_PetFriendly_Large_Pallas-grey_Variant.jpg?v=1689171958&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_tropical-vibes-pet-friendly-duo_growpot_variant.jpg?v=1689171958&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Majesty-Palm_Stromanthe_Large_Mexia_Black_Variant.jpg?v=1689171958&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Pet-Friendly',
                price: 178,
            },
        ]
    },

    {
        collectionTitle: 'Flowering Plants',
        collectionProducts: [
            {
                name: 'Bromeliad Antonio Pink',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-bromeliad_pink.jpg?v=1680539579&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_bromeliad-pink-antonio_small_gallery_01_1f3a0bcc-2479-4015-8607-754e994f1d94.jpg?v=1680571735&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_bromeliad-antonio-pink_kent_white_gallery_all_all_02_b8d7204f-f672-4042-ab5e-3608a8828e72.jpg?v=1680571735&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Pet-Friendly',
                price: 78,
            },
            {
                name: 'Pink Anthurium',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_pink.jpg?v=1680539203&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_anthurium-pink_gallery_small_all_all_02_cef2f3f5-ac12-4d55-92cc-91f5cd7ca91f.jpg?v=1680539203&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pink-anthurium_gallery_all_all_02_646c1e30-ea14-4ca3-a6c0-8806c4ba7ecf.jpg?v=1680539203&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Easy Care',
                price: 78,
            },
            {
                name: 'Coral Anthurium',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_coral.jpg?v=1680539003&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_coral_anthurium_gallery_01_83770a77-2561-4d47-879c-a25610285d45.jpg?v=1680539003&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-light_blue_gloss-anthurium_coral.jpg?v=1680539000&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Easy Care',
                price: 78,
            },
            {
                name: 'Red Anthurium',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_red.jpg?v=1680539300&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_red-anthurium_gallery_all_all_01_5c387706-02ef-4e9d-8009-99b6820f1cdf.jpg?v=1680539300&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-light_blue_gloss-anthurium_red.jpg?v=1680539298&width=400'
                ],
                isFeature: true,
                featureBackGround: '#00c79f',
                featureText: 'Easy Care',
                price: 78,
            },
        ]
    },

    {
        collectionTitle: 'Faux & Preserved Plants',
        collectionProducts: [
            {
                name: 'Faux Variegated Monstera Tree',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Faux_Variegated_Monstera_Large_Helena_Cream_Variant.jpg?v=1685669305&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Monstera-Tree_gallery_01.jpg?v=1685669305&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Faux_Variegated_Monstera_Large_BalBoa_Blush_Variant.jpg?v=1685669304&width=400'
                ],
                isFeature: false,
                price: 275,
            },
            {
                name: 'Faux Rubber Tree',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux_Rubber_Tree_Large_Helena_Black_Variant.jpg?v=1684506789&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Rubber-Tree_gallery_01.jpg?v=1684506789&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_faux-rubber-tree_large_acadia_tan.jpg?v=1684506789&width=400'
                ],
                isFeature: false,
                price: 275,
            },
            {
                name: 'Faux Palm Tree',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux_Palm_Large_Balboa_Cream_Variant.jpg?v=1684507189&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Palm-Tree_gallery_01.jpg?v=1684507189&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Palm-Tree_growpot.jpg?v=1684507189&width=400'
                ],
                isFeature: false,
                price: 275,
            },
            {
                name: 'Faux Braided Money Tree',
                img: [
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_faux-braided-monkey-tree_large_grant_gray.jpg?v=1684506379&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Braided-Money-Tree_gallery_01.jpg?v=1684506379&width=400',
                    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Braided-Money-Tree_growpot_variant.jpg?v=1684506379&width=400',
                ],
                isFeature: false,
                price: 325,
            },
        ]
    },
]