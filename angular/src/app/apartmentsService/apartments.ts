import { Apartment } from "../interfaces/apartment";

export const APARTMENTS: Apartment[] = [
    {
        id: 1,
        name: "Peaceful Greenpoint",
        description: "Escape the hustle and bustle of city life and retreat to the tranquility of Peaceful Greenpoint. Nestled in the heart of Brooklyn, this cozy apartment offers a serene oasis with lush greenery and scenic views. Unwind in the spacious living area, adorned with stylish decor and comfortable furnishings. Enjoy a leisurely stroll along the nearby waterfront or explore the vibrant neighborhood filled with charming cafes, boutique shops, and art galleries. Whether you're seeking a peaceful getaway or an adventure-filled escape, Peaceful Greenpoint is the perfect home base for your Brooklyn adventure.",
        city: "New York, United States",
        owner: "Diane Keaton",
        address: "94 Prince St, New York, NY 10012, United States",
        src: "assets/img/apartments/1",
        price: "$80",
        rating: 4.2,
        longitud: 40.72463418034214,
        latitud:-73.99882430360019,
        nearbyPlaces: {
            'Washington Square Park': '5 min on foot',
            'Brooklyn Bridge': '15 min by subway',
            'Central Park': '10 min by taxi',
            'Times Square': '20 min by subway'
        },
       
          
    },
    {
        id: 2,
        name: "Private Bedroom in Brooklyn",
        description: "Indulge in luxury and privacy at Private Bedroom in Brooklyn. This elegant apartment boasts a spacious bedroom with modern amenities and stylish decor. Relax in comfort and style as you enjoy stunning views of the Brooklyn skyline from your private balcony. Take advantage of the building's exclusive amenities, including a rooftop pool, fitness center, and 24-hour concierge service. With its prime location in the heart of Brooklyn, you'll have easy access to the city's top attractions, restaurants, and nightlife. Experience the best of Brooklyn living at Private Bedroom in Brooklyn.",
        city: "New York, United States",
        owner: "Elaine May",
        address: "1000 St Johns Pl 2514, Brooklyn, NY 11213, United States",
        src: "assets/img/apartments/2",
        price: "$68",
        rating: 4.8,
        longitud: 40.67133330731358,
        latitud:-73.9451984342862,
        nearbyPlaces: {
            'Brooklyn Museum': '10 min on foot',
            'Prospect Park': '5 min by subway',
            'Barclays Center': '15 min on foot',
            'Brooklyn Botanic Garden': '8 min by taxi'
        },
         
    },
    {
        id: 3,
        name: "Cozy room in the heart of Zurich",
        description: "Immerse yourself in the charm and elegance of Zurich with a stay at our cozy apartment in the heart of the city. Located in a historic building overlooking the picturesque streets of Zurich, this apartment offers a warm and inviting atmosphere for your stay. Relax in the comfortable living space or step outside to explore the city's vibrant culture, from its renowned museums and galleries to its quaint cafes and bustling markets. Whether you're here for business or leisure, our cozy apartment provides the perfect retreat in the heart of Zurich.",
        city: "Zürich, Switzerland",
        owner: "Jean-Luc Godard",
        address: "Magnusstrasse 21, 8004 Zürich, Switzerland",
        src: "assets/img/apartments/3",
        price: "$102",
        rating: 4.5,
        longitud: 47.38014591401019,
        latitud: 8.524896281425212,
        nearbyPlaces: {
            'Zurich Airport (ZRH)': '15-20 min by car',
            'Lindenhof Park': 'Panoramic views, 3 min on foot',
            'Swiss National Museum': 'Exhibitions, 7 min by car',
            'Märtplatz Zurich': 'Near river, 5 min on foot',
            'Zurich Hauptbahnhof': 'Central station, 10 min by car',
            'Paradeplatz': '5 min on foot'
          },
         
          
          
    },
    {
        id: 4,
        name: "Right in the middle of Geneva",
        description: "Discover the beauty and charm of Geneva with a stay at our centrally located apartment. Situated in the heart of the city, this spacious apartment offers easy access to Geneva's top attractions, including the iconic Jet d'Eau, St. Pierre Cathedral, and Old Town. Step outside and explore the city's vibrant neighborhoods, from the trendy cafes and boutiques of Carouge to the picturesque shores of Lake Geneva. With its convenient location and comfortable amenities, our apartment is the perfect choice for your stay in Geneva.",
        city: "Genève, Switzerland",
        owner: "Bruno Ganz",
        address: "Chem. Surinam 5, 1203 Genève, Switzerland",
        src: "assets/img/apartments/4",
        price: "$110",
        rating: 4.3,
        longitud: 46.20920941623444,
        latitud:6.127513296699077,
        nearbyPlaces: {
            'Lake Geneva': '5 min on foot',
            'Old Town Geneva': '10 min on foot',
            'Jet d\'Eau': '15 min by tram',
            'Palais des Nations': '20 min by bus'
        },
        
          
          
    },
    {
        id: 5,
        name: "Charming Apartment near the Eiffel Tower",
        description: "Experience the romance and elegance of Paris with a stay at our charming apartment near the Eiffel Tower. Located in the heart of the city, just steps away from one of the world's most iconic landmarks, this apartment offers a truly unforgettable Parisian experience. Relax in the cozy living space, adorned with classic French decor and modern amenities. Explore the charming streets of the 7th arrondissement, home to trendy cafes, boutique shops, and world-class restaurants. Whether you're here for a romantic getaway or a cultural adventure, our charming apartment is the perfect home base for your Parisian escape.",
        city: "Paris, France",
        owner: "Julie Delpy",
        address: "25-27 Pl. de la Madeleine, 75008 Paris, France",
        src: "assets/img/apartments/5",
        price: "$79",
        rating: 4.7,
        longitud: 48.87121644213378,
        latitud:2.3245133968548797,
        nearbyPlaces: {
            'Place de la Concorde': '5 min on foot',
            'Louvre Museum': '10 min on foot',
            'Champs-Élysées': '15 min on foot',
            'Musée d\'Orsay': '10 min by taxi'
        },
        
          
          
    },
    {
        id: 6,
        name: "Modern Apartment in Mexico City",
        description: "Discover the vibrant culture and rich history of Mexico City with a stay at our modern apartment in the heart of the city. Located in the trendy neighborhood of Napoles, this stylish apartment offers a contemporary retreat with sleek design and comfortable amenities. Explore the nearby attractions, from the iconic World Trade Center to the lush parks and gardens of Chapultepec. After a day of sightseeing, unwind in the spacious living area or enjoy a drink on the private balcony overlooking the city skyline. Whether you're here for business or leisure, our modern apartment provides the perfect home base for your Mexico City adventure.",
        city: "Mexico City, Mexico",
        owner: "Emilio Fernandez",
        address: "C. Pachuca 146-a, Colonia Condesa, Cuauhtémoc, 06140 Ciudad de México, CDMX",
        src: "assets/img/apartments/6",
        price: "$52",
        rating: 4.1,
        longitud: 19.412978980504686,
        latitud: -99.17892395813908,
        nearbyPlaces: {
            'Parque México': '5 min on foot',
            'Avenida Ámsterdam': '3 min on foot',
            'Mercado Roma': '10 min on foot',
            'Chapultepec Castle': '15 min by taxi'
        },
        
          
    },
    {
        id: 7,
        name: "Private Room in West Seattle",
        description: "Escape to the tranquility of West Seattle with a stay at our private room overlooking Puget Sound. Nestled in a quiet neighborhood just minutes from downtown Seattle, this charming room offers a peaceful retreat with stunning waterfront views. Relax in the comfortable living space or step outside to explore the nearby parks and beaches. With its convenient location and cozy atmosphere, our private room is the perfect choice for your Seattle getaway.",
        city: "Washington, United States",
        owner: "Billy Wilder",
        address: "420 Blanchard St, Seattle, WA 98121, United States",
        src: "assets/img/apartments/7",
        price: "$80",
        rating: 4.4,
        longitud: 47.615285353935995,
        latitud:-122.34228101856104,
        nearbyPlaces: {
            'Pike Place Market': '10 min on foot',
            'Space Needle': '15 min by tram',
            'Seattle Art Museum': '5 min on foot',
            'CenturyLink Field': '20 min on foot'
        },
        
    },
    {
        id: 8,
        name: "Designer apartment near Tokyo",
        description: "Experience the sophistication and style of Tokyo with a stay at our designer apartment in the heart of the city. Located in the bustling neighborhood of Arakawa City, this luxurious apartment offers modern amenities and elegant decor for your comfort and convenience. Explore the nearby attractions, from the historic temples and shrines of Asakusa to the trendy shops and cafes of Akihabara. After a day of sightseeing, relax in the spacious living area or enjoy a meal in the sleek dining room overlooking the city skyline. Whether you're here for business or leisure, our designer apartment provides the perfect retreat in Tokyo.",
        city: "Arakawa City, Japan",
        owner: "Yasujiro Ozu",
        address: "6-chōme-3-3 Higashinippori, Arakawa City, Tokyo 116-0014, Japan",
        src: "assets/img/apartments/8",
        price: "$75",
        rating: 4.9,
        longitud: 35.73228119201864,
        latitud:139.7785652384839,
        nearbyPlaces: {
            'Ueno Park': '10 min by subway',
            'Asakusa Temple': '15 min by subway',
            'Tokyo Skytree': '20 min by subway',
            'Shinjuku Gyoen National Garden': '25 min by subway'
        },
        
          
    },
    {
        id: 9,
        name: "Chic Room in Seoul",
        description: "Immerse yourself in the vibrant energy of Seoul with a stay at our chic room in the heart of the city. Located in the bustling neighborhood of Itaewon, this stylish room offers modern amenities and comfortable furnishings for your stay. Explore the nearby attractions, from the historic palaces and temples of Jongno to the trendy boutiques and cafes of Gangnam. After a day of sightseeing, unwind in the cozy living space or enjoy a drink on the private balcony overlooking the city skyline. Whether you're here for business or leisure, our chic room provides the perfect home base for your Seoul adventure.",
        city: "Seoul, South Korea",
        owner: "Park Chan-wook",
        address: "36 Sejong-daero 11-gil, Jung-gu, Seoul, South Korea",
        src: "assets/img/apartments/9",
        price: "$90",
        rating: 4.6,
        longitud: 37.562371632478175,
        latitud: 126.97387339624146,
        nearbyPlaces: {
            'Gyeongbokgung Palace': '5 min by taxi',
            'N Seoul Tower': '10 min by taxi',
            'Myeongdong Shopping Street': '15 min on foot',
            'Dongdaemun Design Plaza': '20 min by subway'
          },
         
          
          
    },
    {
        id: 10,
        name: "Workshop Loft in Cologne",
        description: "Discover the creative spirit of Cologne with a stay at our workshop loft in the heart of the city. Located in the vibrant Belgian Quarter, this spacious loft offers a unique blend of industrial charm and modern comfort. Explore the nearby art galleries and design studios, or stroll along the scenic Rhine River. After a day of exploring, relax in the stylish living area or host a gathering in the spacious workshop space. Whether you're here for work or play, our workshop loft provides the perfect backdrop for your Cologne experience.",
        city: "Cologne, Germany",
        owner: "Wim Wenders",
        address: "Wöhlerstraße 24, 50823 Köln, Germany",
        src: "assets/img/apartments/10",
        price: "$84",
        rating: 4.2,
        longitud: 50.9565359955173,
        latitud: 6.932130125816848,
        nearbyPlaces: {
            'Cologne Cathedral': '10 min on foot',
            'Hohenzollern Bridge': '5 min on foot',
            'Museum Ludwig': '15 min by tram',
            'Rhine River': '20 min on foot'
        },
        
    },
    {
        id: 11,
        name: "Luxury Penthouse in Ibiza",
        description: "Experience the ultimate luxury and relaxation with a stay at our penthouse in the heart of Ibiza. Perched atop a stunning cliffside overlooking the Mediterranean Sea, this luxurious penthouse offers breathtaking views and unparalleled tranquility. Indulge in the lavish amenities, including a private infinity pool, rooftop terrace, and personal concierge service. Whether you're here to party or unwind, our penthouse provides the perfect escape for your Ibiza getaway.",
        city: "Ibiza, Spain",
        owner: "Pedro Almodovar",
        address: "Carrer del País Valencià, 13, 07800 Eivissa, Illes Balears, Spain",
        src: "assets/img/apartments/11",
        price: "$125",
        rating: 4.8,
        longitud: 38.90841270163723,
        latitud:1.4222807098013042,
        nearbyPlaces: {
            'Ibiza Old Town (Dalt Vila)': '5 min on foot',
            'Talamanca Beach': '10 min on foot',
            'Pacha Ibiza': '15 min by taxi',
            'Es Vedrà': '30 min by boat'
        },
        
          
    },
    {
        id: 12,
        name: "Venetian Retreat in Venice",
        description: "Step into a world of elegance and romance with a stay at our Venetian retreat in the heart of Venice. Located in a historic palazzo overlooking the iconic Grand Canal, this luxurious apartment offers old-world charm and modern amenities for your comfort and enjoyment. Explore the winding streets and hidden piazzas of Venice, or take a leisurely gondola ride along the picturesque canals. After a day of sightseeing, relax in the opulent living space or enjoy a meal in the elegant dining room overlooking the water. Whether you're here for a romantic getaway or a cultural adventure, our Venetian retreat provides the perfect setting for your Venice experience.",
        city: "Venice, Italy",
        owner: "Vittorio de Sica",
        address: "Sestiere Dorsoduro, 3494/ A, 30123 Venezia VE, Italy",
        src: "assets/img/apartments/12",
        price: "$140",
        rating: 4.4,
        longitud: 45.43620676886931,
        latitud:12.3206321966551,
        nearbyPlaces: {
            'St. Mark\'s Basilica': '10 min by waterbus',
            'Rialto Bridge': '15 min on foot',
            'Grand Canal': '5 min on foot',
            'Peggy Guggenheim Collection': '20 min on foot'
        },
        
          
          
    }
];
