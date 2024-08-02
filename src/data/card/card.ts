interface CardItem {
    id: string;
    tie?: string;
    desp?: string;
    title: string;
    price?: string;
    btn?: { type1: string; type2: string };
    point: string;
    descriptions: string[];
    descriptions1?: string[];
    button: string;
}

export const card: CardItem[] = [
    {
        id: "1",
        title: "Pro",
        price: "$297",
        btn: {
            type1: 'Monthly',
            type2: "Annually"
        },
        point: "Enjoy all these features:",
        descriptions: [
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica."
        ],
        descriptions1: [
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas."
        ],
        button: 'Start Free Trial'
    },
    {
        id: "2",
        tie: 'Most Popular',
        title: "Business",
        price: "$397",
        btn: {
            type1: 'Monthly',
            type2: "Annually"
        },
        point: "Enjoy all these features:",
        descriptions: [
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica."
        ],
        descriptions1: [
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas.",
            "Lorem ipsum dolor sit amet zeut arcipel havicas."
        ],
        button: 'Start Free Trial'
    },
    {
        id: "3",
        title: "Platinum",
        desp: "Meet our team for the exciting deals",
        point: "Enjoy all these features:",
        descriptions: [
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica.",
            "Lorem ipsum dolor sit amet zeut arcipel havica."
        ],
        button: 'Contact Sales'
    },
];
