import Circle from '../../../public/images/ultimate/circle.png'
import One from '../../../public/images/ultimate/one.png'
import Two from '../../../public/images/ultimate/two.png'
import Three from '../../../public/images/ultimate/three.png'
import Four from '../../../public/images/ultimate/four.png'
import Five from '../../../public/images/ultimate/five.png'
import Six from '../../../public/images/ultimate/six.png'
import Right from '../../../public/images/ultimate/right.png'
import Left from '../../../public/images/ultimate/left.png'

interface UltimateItem {
    id: string;
    title: string;
}

export const ultimate: UltimateItem[] = [
    {
        id: "1",
        title: "The Ultimate Solution For Streamlining Every Slow Flip Deal.",
    },
];

interface UltimateCard {
    id: string;
    title: string;
    btn: string;
    img: string;
    img1: string;
    img2?: string;
}

export const ultimateCards: UltimateCard[] = [
    {
        id: "1",
        title: "Cashflow Innovator is the Platform For Your Slow Flip KPI Dashboard.",
        btn: "Start Your Free Trial Today",
        img: Circle.src,
        img1: One.src,
        img2: Right.src,
    },
    {
        id: "2",
        img: Circle.src,
        img1: Two.src,
        title: "Cashflow Innovator is Your Platform For Slow Flip Property Management.",
        btn: "Start Your Free Trial Today",
        img2: Left.src,
    },
    {
        id: "3",
        title: "Cashflow Innovator Is Your Platform For Streamlined Eviction Processing.",
        btn: "Start Your Free Trial Today",
        img: Circle.src,
        img1: Three.src,
        img2: Right.src,
    },
    {
        id: "4",
        img: Circle.src,
        img1: Four.src,
        title: "Cashflow Innovator Is The Platform For Filling Your Slow Flips Properties.",
        btn: "Start Your Free Trial Today",
        img2: Left.src,
    },
    {
        id: "5",
        title: "Cashflow Innovator Stores Your Agreement.",
        btn: "Start Your Free Trial Today",
        img: Circle.src,
        img1: Four.src,
        img2: Right.src,
    },
    {
        id: "6",
        img: Circle.src,
        img1: Five.src,
        title: "Cashflow Innovator Is The Platform For Receiving Monthly Payments On Each Slow Flip Property, Deposited Directly Into Your Bank Account.",
        btn: "Start Your Free Trial Today",
        img2: Left.src,
    },
    {
        id: "7",
        title: "Cashflow Innovator Is Your One Stop Shop For Emails and Messaging.",
        btn: "Start Your Free Trial Today",
        img: Circle.src,
        img1: Six.src,
    },
];
